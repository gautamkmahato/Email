'use client'

const { createContext, useState, useContext } = require("react");


const DragDropLayoutContext = createContext();

export const DragDropLayoutProvider = ({ children }) =>{
    const [layoutItem, setLayoutItem] = useState('');

    return(
        <DragDropLayoutContext.Provider value={{ layoutItem, setLayoutItem }}>
            {children}
        </DragDropLayoutContext.Provider>
    )
} 

export const useDragDropLayout = () =>{
    return useContext(DragDropLayoutContext);
}