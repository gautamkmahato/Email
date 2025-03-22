import { useDragDropLayout } from "@/app/context/DragDropLayoutContext";
import { useEmailTemplate } from "@/app/context/EmailTemplateContext";
import { useState, useEffect } from "react";

export default function Columns({ layout }) {
    // Initialize the state for column properties with the default styles
    const [columnProperties, setColumnProperties] = useState('p-2 border bg-gray-100');
    const [columnsCount, setColumnsCount] = useState(0); // Track the number of columns
    const [dragState, setDragState] = useState(null); // Track the dragged state
    const [draggedOverColumn, setDraggedOverColumn] = useState(null); // Track the column being dragged over
    const { layoutItem, setLayoutItem } = useDragDropLayout();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();

    // Handle column properties based on layout type
    const handleColumnProperties = (column) => {
        if (column === 'column-2') {
            setColumnProperties('grid grid-cols-1 md:grid-cols-2 gap-1');
            setColumnsCount(2); // Set number of columns for column-2
        } else if (column === 'column-3') {
            setColumnProperties('grid grid-cols-1 md:grid-cols-3 gap-1');
            setColumnsCount(3); // Set number of columns for column-3
        } else if (column === 'column-4') {
            setColumnProperties('grid grid-cols-1 md:grid-cols-4 gap-1');
            setColumnsCount(4); // Set number of columns for column-4
        } else {
            setColumnProperties('p-2 border bg-gray-100');
            setColumnsCount(1); // Default to 1 column if not a grid layout
        }
    };

    // Handle drag over event
    const handleDragOver = (e, index) => {
        e.preventDefault(); // This allows the drop to happen
        setDraggedOverColumn(index); // Set the index of the column that's being dragged over
        setDragState({
            index: index, // Set the index of the column that's being dragged over
            columnId: layout?.id
        });
    };

    // Handle drop event
    const handleDrop = (e, index) => {
        e.preventDefault();
        const droppedItem = layoutItem?.dragElement; // Get the dragged item data

        if (droppedItem) {
            // Update the emailTemplate state
            setEmailTemplate((prevTemplate) => {
                return prevTemplate.map((row) => {
                    if (row.id === layout.id) {
                        // If the row matches the current layout, update its contents
                        return {
                            ...row,
                            contents: {
                                ...row.contents,
                                [index]: [...(row.contents[index] || []), droppedItem], // Add the dropped item to the column
                            },
                        };
                    }
                    return row; // Return other rows unchanged
                });
            });
        }

        setDragState(null); // Reset drag state after the drop
        setDraggedOverColumn(null); // Reset the dragged over column after the drop
    };

    // Use useEffect to update column properties whenever the layout changes
    useEffect(() => {
        if (layout?.type) {
            handleColumnProperties(layout.type);
        }
        console.log("=============================")
        console.log(emailTemplate);
        console.log("==============================")
    }, [layout, emailTemplate]); // Run whenever layout changes

    // Render the content of a column
    const renderColumnContent = (index) => {
        const row = emailTemplate.find((row) => row.id === layout.id); // Find the current row in emailTemplate
        const content = row?.contents?.[index] || []; // Get the content for the column
        return content.map((item, i) => (
            <div key={i} className="p-2 bg-white border rounded mb-2">
                <item.icon className="w-5 h-5 text-neutral-950" /> {/* Render the icon */}
                <h2 className="text-sm text-gray-700">{item.label}</h2> {/* Render the label */}
            </div>
        ));
    };

    // Create default text for each column
    const renderColumns = () => {
        const columns = [];
        for (let i = 1; i <= columnsCount; i++) {
            columns.push(
                <div
                    key={i}
                    className={`p-4 border ${
                        draggedOverColumn === i ? 'bg-amber-700' : 'bg-gray-100'
                    }`} // Highlight dragged column
                    onDragOver={(e) => handleDragOver(e, i)} // Pass the index to handleDragOver
                    onDrop={(e) => handleDrop(e, i)} // Pass the index to handleDrop
                    draggable // You can make the div draggable if required
                >
                    <h3 className="text-sm font-bold mb-2">Column {i}</h3>
                    {renderColumnContent(i)} {/* Render the content of the column */}
                </div>
            );
        }
        return columns;
    };

    return (
        <div className={`${columnProperties}`}>
            {/* Dynamically generate the columns */}
            {renderColumns()}
        </div>
    );
}