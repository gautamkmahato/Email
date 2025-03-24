'use client'

import { useDragDropLayout } from '@/app/context/DragDropLayoutContext';
import Elements from '@/layout/Elements';
import Layouts from '@/layout/Layouts';  // Import the Layout array
import React from 'react';

export default function EditorSidebar() {

    const { layoutItem, setLayoutItem } = useDragDropLayout();

    const handleLayoutDragStart = (item) =>{
        //console.log(item);
        setLayoutItem({
            dragLayout: {
                ...item,
                id: Date.now()
            }
        })
    }
    const handleElementDragStart = (item) =>{
        console.log(item);
        setLayoutItem({
            dragElement: {
                ...item,
                id: Date.now()
            }
        })
    }

    return (
        <div className='p-4 bg-white'>
            {/* layout Section */}
            <div className=''>
                <h1 className='mb-4 font-bold text-lg'>Layout</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>              
                    {/* Map over Layout data array */}
                    {Layouts.map((item, index) => (
                    <div key={index} 
                        className="flex flex-col items-center justify-center space-x-2 p-3 shadow-lg cursor-pointer border border-dashed rounded-xl hover:bg-amber-100"
                        draggable
                        onDragStart={() => handleLayoutDragStart(item)}
                    >
                        <item.icon className="w-5 h-5 text-neutral-950" /> {/* Dynamically render the icon */}
                        <h2 className="text-sm text-gray-700">{item.name}</h2> {/* Display the name */}
                    </div>
                    ))}
                </div>
            </div>

            {/* Element Section */}
            <div className=''>
                <h1 className='mb-4 mt-4 font-bold text-lg'>Elements</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    {/* Map over Elements data array */}
                    {Elements.map((item, index) => (
                    <div key={index} 
                        className="flex flex-col items-center justify-center space-x-2 p-3 shadow-md cursor-pointer border border-dashed rounded-xl hover:bg-amber-100"
                        draggable
                        onDragStart={() => handleElementDragStart(item)}
                    >
                        <item.icon className="w-5 h-5 text-neutral-950" /> {/* Dynamically render the icon */}
                        <h2 className="text-sm text-gray-700">{item.label}</h2> {/* Display the name */}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
