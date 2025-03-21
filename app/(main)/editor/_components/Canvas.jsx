'use client';

import { useDragDropLayout } from '@/app/context/DragDropLayoutContext';
import { useEmailTemplate } from '@/app/context/EmailTemplateContext';
import { useScreen } from '@/app/context/ScreenSizeContext';
import React, { useState } from 'react';
import Columns from './LayoutElements/Columns';

export default function Canvas() {
    const { screenSize } = useScreen();
    const { layoutItem, setLayoutItem } = useDragDropLayout();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const [dragState, setDragState] = useState(false);

    // Handle drag over event
    const handleDragOver = (e) => {
        e.preventDefault(); // This is important to allow a drop
        setDragState(true);  // Set dragState to true when dragging over
        console.log('over...');
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault(); // Prevent default behavior
        setDragState(false); // Set dragState back to false after drop
        const droppedItem = layoutItem?.dragLayout; // Get the dragged item data
        console.log(droppedItem);
        // Add your logic to handle what happens when an item is dropped here
        if (droppedItem) {
            setEmailTemplate((prev) => [...prev, droppedItem]);
        }
    };

    return (
        <>
            <div className="mt-8 flex justify-center">
                <div
                    className={`p-6 w-full 
                        ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-md'}
                        ${dragState ? 'bg-amber-50 p-4' : 'bg-white'}  // Conditional class application
                    `}
                    onDragOver={handleDragOver}  // Pass the function directly (no arrow function needed)
                    onDrop={handleDrop}          // Pass the function directly (no arrow function needed)
                >
                    {emailTemplate?.length > 0 ? emailTemplate.map((layout, index) => (
                        <div key={index}>
                            <Columns layout={layout} />
                        </div>
                    )) : <div>
                            <h1>Add Element</h1>
                        </div>}
                </div>
            </div>
        </>
    );
}
