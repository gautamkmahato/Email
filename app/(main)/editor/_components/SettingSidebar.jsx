'use client'

import { useSelectedElement } from '@/app/context/SelectedElement'
import React, { useEffect, useState } from 'react'
import InputField from './Settings/InputField';
import { useEmailTemplate } from '@/app/context/EmailTemplateContext';
import DropdownSelect from './Settings/DropdownSelect';
import ColorPicker from './Settings/ColorPicker';
import Slider from './Settings/Slider';

export default function Settings() {
    const { selectedElement, setSelectedElement } = useSelectedElement();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const [data, setData] = useState();

    useEffect(() => {
        if (selectedElement && selectedElement.element) {
            setData(selectedElement.element);
        } else {
            setData(null); // or handle this case accordingly
        }
    }, [selectedElement]);

    const handleInputChange = (value, field) => {
        // Update the field value in the selectedElement
        const updatedElement = { 
            ...selectedElement,
            element: { 
                ...selectedElement.element, 
                [field]: value 
            }
        };

        setSelectedElement(updatedElement); // Update the selectedElement in context

        // Update the email template with the new element data
        const updatedTemplate = emailTemplate.map((col) => {
            if (col.id === selectedElement.layoutId) {
                return {
                    ...col,
                    [selectedElement.columnIndex]: col[selectedElement.columnIndex].map((el, idx) => {
                        if (idx === selectedElement.elementIndex) {
                            return updatedElement.element; // Update the selected element
                        }
                        return el;
                    })
                };
            }
            return col;
        });

        setEmailTemplate(updatedTemplate); // Update the emailTemplate context
    }

    const handleStyleChange = (value, field) => {
        const fields = field.split('.'); // Split the field path into parts (e.g., 'style.fontSize' becomes ['style', 'fontSize'])

        // Create a deep copy of the selectedElement to avoid mutating the state directly
        let updatedElement;
        if (fields[1] === 'fontSize' || fields[1] === 'padding' || fields[1] === 'borderRadius') {
            // Ensure the values are updated with px unit for these fields
            value = `${value}px`;
        }

        updatedElement = { 
            ...selectedElement,
            element: { 
                ...selectedElement.element,
                [fields[0]]: {
                    ...selectedElement.element[fields[0]],
                    [fields[1]]: value
                }
            }
        };

        setSelectedElement(updatedElement); // Update the selectedElement in context

        // Update the email template with the new element data
        const updatedTemplate = emailTemplate.map((col) => {
            if (col.id === selectedElement.layoutId) {
                return {
                    ...col,
                    [selectedElement.columnIndex]: col[selectedElement.columnIndex].map((el, idx) => {
                        if (idx === selectedElement.elementIndex) {
                            return updatedElement.element; // Update the selected element
                        }
                        return el;
                    })
                };
            }
            return col;
        });

        setEmailTemplate(updatedTemplate); // Update the emailTemplate context
    }

    const renderCommonAttributes = () => {
        if (!data) return null;

        return (
            <>
                {/* Common attributes for all elements */}
                <ColorPicker 
                    label="Background Color" 
                    value={data.style?.backgroundColor || '#ffffff'} 
                    onChange={(e) => handleStyleChange(e.target.value, 'style.backgroundColor')} 
                />
                <Slider 
                    label="Padding" 
                    value={parseInt(data.style?.padding || 0)} 
                    onChange={(e) => handleStyleChange(e, 'style.padding')} 
                    min={0} max={50}
                />
                <Slider 
                    label="Border Radius" 
                    value={parseInt(data.style?.borderRadius || 0)} 
                    onChange={(e) => handleStyleChange(e, 'style.borderRadius')} 
                    min={0} max={50}
                />
            </>
        );
    }

    const renderElementSpecificAttributes = () => {
        if (!data) return null;

        switch (data.type) {
            case 'Button':
                return (
                    <>
                        <InputField 
                            label="Button Text" 
                            value={data.content} 
                            onChange={(e) => handleInputChange(e.target.value, 'content')} 
                        />
                        <ColorPicker 
                            label="Text Color" 
                            value={data.style?.color || '#ffffff'} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.color')} 
                        />
                        <Slider 
                            label="Font Size" 
                            value={parseInt(data.style?.fontSize || 22)} 
                            onChange={(e) => handleStyleChange(e, 'style.fontSize')} 
                            min={10} max={50}
                        />
                        <DropdownSelect
                            label="Font Weight"
                            value={data.style?.fontWeight || 'normal'}
                            onChange={(e) => handleStyleChange(e.target.value, 'style.fontWeight')}
                            options={['bold', '600', 'normal', 'bolder']}
                        />
                        <DropdownSelect
                            label="Text Transform"
                            value={data.style?.textTransform || 'uppercase'}
                            onChange={(e) => handleStyleChange(e.target.value, 'style.textTransform')}
                            options={['none', 'uppercase', 'lowercase', 'capitalize']}
                        />
                        <DropdownSelect
                            label="Cursor"
                            value={data.style?.cursor || 'pointer'}
                            onChange={(e) => handleStyleChange(e.target.value, 'style.cursor')}
                            options={['default', 'pointer', 'help', 'wait']}
                        />
                        <InputField 
                            label="Border" 
                            value={data.style?.border || "none"} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.border')} 
                        />
                        <InputField 
                            label="Box Shadow" 
                            value={data.style?.boxShadow || ""} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.boxShadow')} 
                        />
                        <InputField
                            label="Transition"
                            value={data.style?.transition || 'background-color 0.3s ease, transform 0.3s ease'}
                            onChange={(e) => handleStyleChange(e.target.value, 'style.transition')}
                        />
                    </>
                );

            case 'Text':
                return (
                    <>
                        <InputField 
                            label="Text Content" 
                            value={data.content} 
                            onChange={(e) => handleInputChange(e.target.value, 'content')} 
                        />
                        <Slider 
                            label="Font Size" 
                            value={parseInt(data.style?.fontSize || 22)} 
                            onChange={(e) => handleStyleChange(e, 'style.fontSize')} 
                            min={10} max={50}
                        />
                        <InputField 
                            label="Font Family" 
                            value={data.style?.fontFamily || "'Roboto', sans-serif"} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.fontFamily')} 
                        />
                        <DropdownSelect
                            label="Text Align"
                            value={data.style?.textAlign || 'left'}
                            onChange={(e) => handleStyleChange(e.target.value, 'style.textAlign')}
                            options={['left', 'center', 'right']}
                        />
                        <DropdownSelect
                            label="Font Weight"
                            value={data.style?.fontWeight || 'normal'}
                            onChange={(e) => handleStyleChange(e.target.value, 'style.fontWeight')}
                            options={['bold', '600', 'normal', 'bolder']}
                        />
                        <ColorPicker 
                            label="Text Color" 
                            value={data.style?.color || '#000000'} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.color')} 
                        />
                    </>
                );

            case 'Image':
                return (
                    <>
                        <InputField 
                            label="Image URL" 
                            value={data.imageUrl} 
                            onChange={(e) => handleInputChange(e.target.value, 'imageUrl')} 
                        />
                        <InputField 
                            label="Alt Text" 
                            value={data.alt} 
                            onChange={(e) => handleInputChange(e.target.value, 'alt')} 
                        />
                        <Slider 
                            label="Width" 
                            value={parseInt(data.style?.width || 80)} 
                            onChange={(e) => handleStyleChange(e, 'style.width')} 
                            min={0} max={100}
                        />
                        <ColorPicker 
                            label="Border Color" 
                            value={data.style?.borderColor || '#f2f2f2'} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.borderColor')} 
                        />
                    </>
                );

            case 'Logo':
                return (
                    <>
                        <InputField 
                            label="Logo URL" 
                            value={data.imageUrl} 
                            onChange={(e) => handleInputChange(e.target.value, 'imageUrl')} 
                        />
                        <Slider 
                            label="Width" 
                            value={parseInt(data.style?.width || 30)} 
                            onChange={(e) => handleStyleChange(e, 'style.width')} 
                            min={10} max={100}
                        />
                        <Slider 
                            label="Height" 
                            value={parseInt(data.style?.height || 30)} 
                            onChange={(e) => handleStyleChange(e, 'style.height')} 
                            min={10} max={100}
                        />
                    </>
                );

            case 'LogoHeader':
                return (
                    <>
                        <InputField 
                            label="Logo URL" 
                            value={data.imageUrl} 
                            onChange={(e) => handleInputChange(e.target.value, 'imageUrl')} 
                        />
                        <Slider 
                            label="Width" 
                            value={parseInt(data.style?.width || 50)} 
                            onChange={(e) => handleStyleChange(e, 'style.width')} 
                            min={10} max={100}
                        />
                        <Slider 
                            label="Height" 
                            value={parseInt(data.style?.height || 50)} 
                            onChange={(e) => handleStyleChange(e, 'style.height')} 
                            min={10} max={100}
                        />
                    </>
                );

            case 'Divider':
                return (
                    <>
                        <ColorPicker 
                            label="Divider Color" 
                            value={data.style?.borderColor || '#e0e0e0'} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.borderColor')} 
                        />
                        <Slider 
                            label="Divider Thickness" 
                            value={parseInt(data.style?.borderWidth || 2)} 
                            onChange={(e) => handleStyleChange(e, 'style.borderWidth')} 
                            min={1} max={10}
                        />
                        <Slider 
                            label="Margin Top" 
                            value={parseInt(data.style?.marginTop || 20)} 
                            onChange={(e) => handleStyleChange(e, 'style.marginTop')} 
                            min={0} max={50}
                        />
                        <Slider 
                            label="Margin Bottom" 
                            value={parseInt(data.style?.marginBottom || 20)} 
                            onChange={(e) => handleStyleChange(e, 'style.marginBottom')} 
                            min={0} max={50}
                        />
                    </>
                );

            case 'SocialIcons':
                return (
                    <>
                        <Slider 
                            label="Icon Size" 
                            value={parseInt(data.style?.width || 40)} 
                            onChange={(e) => handleStyleChange(e, 'style.width')} 
                            min={20} max={100}
                        />
                        <ColorPicker 
                            label="Background Color" 
                            value={data.style?.backgroundColor || '#1da1f2'} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.backgroundColor')} 
                        />
                        <ColorPicker 
                            label="Border Color" 
                            value={data.style?.borderColor || '#ffffff'} 
                            onChange={(e) => handleStyleChange(e.target.value, 'style.borderColor')} 
                        />
                    </>
                );

            default:
                return null;
        }
    }

    return (
        <div className='bg-white p-4'>
            <h1 className='font-semibold text-lg'>Settings</h1>
            {data ? (
                <>
                    {renderCommonAttributes()}
                    {renderElementSpecificAttributes()}
                </>
            ) : (
                <p>No element selected.</p>
            )}
        </div>
    );
}