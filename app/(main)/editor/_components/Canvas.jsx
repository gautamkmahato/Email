'use client';

import { useDragDropLayout } from '@/app/context/DragDropLayoutContext';
import { useEmailTemplate } from '@/app/context/EmailTemplateContext';
import { useScreen } from '@/app/context/ScreenSizeContext';
import React, { useEffect, useRef, useState } from 'react';
import Columns from './LayoutElements/Columns';
import { useHtmlContext } from '@/app/context/HtmlContentContext';

export default function Canvas() {
    const [dragState, setDragState] = useState(false);

    const { screenSize } = useScreen();
    const { layoutItem, setLayoutItem } = useDragDropLayout();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const { htmlContent, setHtmlContent } = useHtmlContext();

    const htmlRef = useRef('')

    // Handle drag over event
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragState(true);  
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        setDragState(false);
        const droppedLayout = layoutItem?.dragLayout; // Get the dragged item data
        if (droppedLayout) {
            setEmailTemplate((prev) => [...(prev || []), droppedLayout]); // Safe spread
        }
    };

    const getColumnLayout = (layout) =>{
        if(layout?.type === 'column'){
            return <Columns layout={layout} />
        }
    }

    const getHtmlContent = () =>{
        if(htmlRef.current){
            const content = htmlRef.current.innerHTML;
            console.log(content)
            setHtmlContent(content);
        }
    }

    useEffect(() =>{
        console.log("==================================")
        console.log(emailTemplate)
        console.log("===================================")
        getHtmlContent();
    }, [emailTemplate]);



    return (
        <>
            <div className="mt-8 flex justify-center">
                <div
                    className={`p-6 w-full 
                        ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-md'}
                        ${dragState ? 'bg-amber-50 p-4' : 'bg-white'}  // Conditional class application
                    `}
                    onDragOver={handleDragOver}  
                    onDrop={handleDrop} 
                    ref={htmlRef}         
                >
                    {emailTemplate?.length > 0 ? emailTemplate.map((layout, index) => (
                        <div key={index}>
                            {getColumnLayout(layout)}
                        </div>
                    )) : <div>
                            <h1>Add Element</h1>
                        </div>}
                </div>
            </div>

        </>
    );
}
