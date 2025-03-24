'use client'

import { useDragDropLayout } from "@/app/context/DragDropLayoutContext";
import { useEmailTemplate } from "@/app/context/EmailTemplateContext";
import { useState } from "react";
import ButtonElement from "../HtmlElements/ButtonElement";
import TextElement from "../HtmlElements/TextElement";
import ImageElement from "../HtmlElements/ImageElement";
import { useSelectedElement } from "@/app/context/SelectedElement";

export default function Columns({ layout }) {

    console.log(layout);

    // Initialize dragState with default values
    const [dragState, setDragState] = useState({
        columnIndex: null,
        layoutId: null
    });
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const { layoutItem, setLayoutItem } = useDragDropLayout();
    const { selectedElement, setSelectedElement } = useSelectedElement();

    // Handle drag over event
    const handleDragOver = (e, index) => {
        e.preventDefault();
        setDragState({
            columnIndex: index,
            layoutId: layout?.id 
        });
    };

    // Handle drop event
    const handleDropOver = (e) => {
        e.preventDefault();
        const index = dragState?.columnIndex;

        // Find the correct layout and update it with the dragged element
        setEmailTemplate(prevItems => prevItems.map(col => 
            col?.id === layout?.id ? {
                ...col,
                [index]: [...(col[index] || []), layoutItem?.dragElement] // Append the new element to the column array
            } : col
        ));

        // Reset dragState after drop
        setDragState({
            columnIndex: null,
            layoutId: null
        });
    };

    // Helper function to get element component (use it to render actual components in columns)
    const getElementComponent = (element) => {
        if (!element) return null;
        if(element?.type === 'Button'){
            return <ButtonElement {...element} />;
        } else if(element?.type === 'Text'){
            return <TextElement {...element} />;
        } else if(element?.type === 'Image'){
            return <ImageElement {...element} />;
        }
        return element?.type;
    };

    // Calculate grid style based on the number of columns
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${layout?.numberOfColumn}, 1fr)`, // Creates the columns dynamically
        gap: '0px', // Adjust the gap between columns
    };

    // Set the default height for the columns and allow it to grow based on content
    const columnStyle = {
        minHeight: '50px', // Set default height (adjust as needed)
        height: 'auto',     // Allow the column to grow based on content
        overflow: 'hidden', // Prevent overflow of content, adjust as necessary
    };

    // Helper function to handle selection of elements
    const handleElementClick = (element, columnIndex, elementIndex) => {
        setSelectedElement({ 
            layoutId: layout?.id, 
            columnIndex, 
            elementIndex,
            element: element
        });
    };

    return (
        <div className="">
            <div style={gridStyle}>
                {Array.from({ length: layout?.numberOfColumn }).map((_, columnIndex) => (
                    <div
                        key={columnIndex}
                        className={`${(columnIndex === dragState.columnIndex && dragState.layoutId) ? 'bg-gray-200' : ''}`}
                        onDragOver={(e) => handleDragOver(e, columnIndex)} 
                        onDrop={handleDropOver}
                        style={columnStyle} // Apply the style with default height
                    >
                        {/* Render the components inside each column */}
                        {layout?.[columnIndex]?.length > 0 ? (
                            layout[columnIndex].map((element, elementIndex) => (
                                <div 
                                    key={elementIndex} 
                                    className={`m-1 cursor-pointer 
                                        ${selectedElement?.layoutId === layout?.id && 
                                        selectedElement?.columnIndex === columnIndex && 
                                        selectedElement?.elementIndex === elementIndex ? 'border-4 border-blue-500' : ''}`} // Conditionally add blue border
                                    onClick={() => handleElementClick(element, columnIndex, elementIndex)} // Pass column index and element index only
                                >
                                    {getElementComponent(element)} {/* Render each element in the column */}
                                </div>
                            ))
                        ) : (
                            // Show a placeholder message if the column is empty
                            <div className="flex items-center justify-center h-full text-gray-500">
                                No Elements
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
