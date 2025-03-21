import { useState, useEffect } from "react";

export default function Columns({ layout }) {
    console.log("layout: ", layout);
    
    // Initialize the state for column properties with the default styles
    const [columnProperties, setColumnProperties] = useState('p-2 border bg-gray-00');
    const [columnsCount, setColumnsCount] = useState(0);  // Track the number of columns
    const [dragState, setDragState] = useState();

    // Handle column properties based on layout type
    const handleColumnProperties = (column) => {
        if (column === 'column-2') {
            setColumnProperties('grid grid-cols-1 md:grid-cols-2 gap-1');
            setColumnsCount(2);  // Set number of columns for column-2
        } else if (column === 'column-3') {
            setColumnProperties('grid grid-cols-1 md:grid-cols-3 gap-1');
            setColumnsCount(3);  // Set number of columns for column-3
        } else if (column === 'column-4') {
            setColumnProperties('grid grid-cols-1 md:grid-cols-4 gap-1');
            setColumnsCount(4);  // Set number of columns for column-4
        } else {
            setColumnProperties('p-2 border bg-gray-100');
            setColumnsCount(0);  // No columns if not a grid layout
        }
    };

    const handleDragOver = (e, index) =>{
        e.preventDefault();
        setDragState({
            index: index,
            columnId: layout?.id
        })
        console.log("its element")
    }
    const handleDrop = (e) =>{
        e.preventDefault();
        console.log("item")
    }
    

    // Use useEffect to update column properties whenever the layout changes
    useEffect(() => {
        if (layout?.type) {
            handleColumnProperties(layout.type);
        }
    }, [layout]); // Run whenever layout changes

    // Create default text for each column
    const renderColumns = () => {
        const columns = [];
        for (let i = 1; i <= columnsCount; i++) {
            columns.push(
                <div key={i} className={`
                        ${dragState.index === i && 'bg-amber-700' }
                    `}
                    onDragOver={(e, i) => handleDragOver(e,i)}
                    onDrop={handleDrop}
                >
                    Column {i}
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
