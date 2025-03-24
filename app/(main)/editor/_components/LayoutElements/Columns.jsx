'use client'

import { useDragDropLayout } from "@/app/context/DragDropLayoutContext";
import { useEmailTemplate } from "@/app/context/EmailTemplateContext";
import { useState } from "react";
import ButtonElement from "../HtmlElements/ButtonElement";
import TextElement from "../HtmlElements/TextElement";
import ImageElement from "../HtmlElements/ImageElement";
import { useSelectedElement } from "@/app/context/SelectedElement";
import { ChevronDown, ChevronUp, MoveDown, Trash2 } from "lucide-react";

export default function Columns({ layout }) {
    console.log(layout);

    // Initialize dragState with default values
    const [dragState, setDragState] = useState({
        columnIndex: null,
        layoutId: null
    });

    // State to track the selected column
    const [selectedColumn, setSelectedColumn] = useState(null);
    // State to track the selected row (layout ID)
    const [selectedRow, setSelectedRow] = useState(null);
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
        if (element?.type === 'Button') {
            return <ButtonElement {...element} />;
        } else if (element?.type === 'Text') {
            return <TextElement {...element} />;
        } else if (element?.type === 'Image') {
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

    // Handle column selection
    const handleColumnClick = (columnIndex) => {
        setSelectedColumn(columnIndex); // Update the selected column state
    };
    // Handle row selection
    const handleRowClick = () => {
        // Reset selectedRow if the same row is clicked again
        if (selectedRow === layout?.id) {
            setSelectedRow(null);
        } else {
            setSelectedRow(layout?.id); // Update the selected row state
        }
    };
    // delete the layout
    const deleteLayout = (layoutId) =>{
        const updatedEmailTemplate = emailTemplate.filter((template) => template?.id !== layoutId);
        setEmailTemplate(updatedEmailTemplate);
        setSelectedElement(null)
    }
    // move the layout to the up
    const moveUp = (layoutId) =>{
        const index = emailTemplate.findIndex((template) => template?.id === layoutId);
        if(index > 0){
            setEmailTemplate((prevItems) =>{
                // get the previtems in a new updatedItems
                const updatedItems = [...prevItems];
                // swap the items based on position
                [updatedItems[index], updatedItems[index-1]] = [updatedItems[index-1], updatedItems[index]];
                // updated the template with new items
                return updatedItems;
            })
        }
    }
    // move the layout to the down
    const moveDown = (layoutId) =>{
        const index = emailTemplate.findIndex((template) => template?.id === layoutId);
        if(index >= 0){
            setEmailTemplate((prevItems) =>{
                // get the previtems in a new updatedItems
                const updatedItems = [...prevItems];
                // swap the items based on position
                [updatedItems[index], updatedItems[index+1]] = [updatedItems[index+1], updatedItems[index]];
                // updated the template with new items
                return updatedItems;
            })
        }
    }

    return (
        <div className="relative">
            <div style={gridStyle}
                className={`${selectedRow === layout?.id ? 'border-2 border-dashed border-blue-500' : ''}`} // Add dashed border for selected row
                onClick={handleRowClick} // Handle row selection
            >
                {Array.from({ length: layout?.numberOfColumn }).map((_, columnIndex) => (
                    <div
                        key={columnIndex}
                        className={`${(columnIndex === dragState.columnIndex && dragState.layoutId) ? 'bg-gray-200' : ''} 
                                  ${selectedColumn === columnIndex ? '' : ''}`} // Add dashed border for selected column
                        onDragOver={(e) => handleDragOver(e, columnIndex)}
                        onDrop={handleDropOver}
                        style={columnStyle} // Apply the style with default height
                        onClick={() => handleColumnClick(columnIndex)} // Handle column selection
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
                {selectedRow === layout?.id && (
  <div className="absolute top-0 -right-10 flex flex-col space-y-2">
    {/* Trash Icon */}
    <div 
      className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out transform hover:scale-110"
      onClick={() => deleteLayout(layout?.id)}
    >
      <Trash2 className="h-4 w-4 text-red-700" />
    </div>

    {/* Chevron Up Icon */}
    <div 
      className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out transform hover:scale-110"
      onClick={() => moveUp(layout?.id)}
    >
      <ChevronUp className="h-4 w-4 text-red-700" />
    </div>

    {/* Chevron Down Icon */}
    <div 
      className="bg-gray-100 hover:bg-gray-300 p-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out transform hover:scale-110"
      onClick={() => moveDown(layout?.id)}
    >
      <ChevronDown className="h-4 w-4 text-red-700" />
    </div>
  </div>
)}


                
            </div>
        </div>
    );
}