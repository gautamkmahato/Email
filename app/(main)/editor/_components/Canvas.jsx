'use client';

import { useDragDropLayout } from '@/app/context/DragDropLayoutContext';
import { useEmailTemplate } from '@/app/context/EmailTemplateContext';
import { useScreen } from '@/app/context/ScreenSizeContext';
import React, { useEffect, useState } from 'react';
import Columns from './LayoutElements/Columns';

export default function Canvas() {
    const { screenSize } = useScreen();
    const { layoutItem, setLayoutItem } = useDragDropLayout();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const [dragState, setDragState] = useState(false);

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
            setEmailTemplate((prev) => [...prev, droppedLayout]);   // Add DroppedLayout to the EmailTemplate Array
        }
    };

    const getColumnLayout = (layout) =>{
        if(layout?.type === 'column'){
            return <Columns layout={layout} />
        }
    }

    useEffect(() =>{
        console.log("==================================")
        console.log(emailTemplate)
        console.log("===================================")
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
