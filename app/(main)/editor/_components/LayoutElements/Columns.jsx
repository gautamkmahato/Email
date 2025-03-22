'use client'

import { useDragDropLayout } from "@/app/context/DragDropLayoutContext";
import { useEmailTemplate } from "@/app/context/EmailTemplateContext";
import { useState } from "react";

export default function Columns({ layout }) {

    console.log(layout);

    // Initialize dragState with default values
    const [dragState, setDragState] = useState({
        columnIndex: null,
        layoutId: null
    });
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const { layoutItem, setLayoutItem } = useDragDropLayout();

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
                [index]: layoutItem?.dragElement
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
        // You can expand this function to return specific components based on the element's type
        if (!element) return null;
        return <div>{element?.type || 'Empty'}</div>; // Example to render the content of the drag element
    };

    // Calculate grid style based on the number of columns
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${layout?.numberOfColumn}, 1fr)`, // Creates the columns dynamically
        gap: '2px', // Adjust the gap between columns
    };

    return (
        <div className="p-1">
            <div style={gridStyle}>
                {Array.from({ length: layout?.numberOfColumn }).map((_, index) => (
                    <div
                        key={index}
                        className={`border p-1 ${(index === dragState.columnIndex && dragState.layoutId) ? 'bg-amber-400' : ''}`}
                        onDragOver={(e) => handleDragOver(e, index)} // Pass index properly
                        onDrop={handleDropOver} // Handle drop event
                    >
                        {/* Render the component for the column (e.g., the dragged element) */}
                        {getElementComponent(layout?.[index])}
                    </div>
                ))}
            </div>
        </div>
    );
}
