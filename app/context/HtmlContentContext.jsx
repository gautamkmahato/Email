'use client'

import { createContext, useState, useContext } from "react";

const HtmlContentContext = createContext();

export const HtmlContentProvider = ({ children }) =>{
    const [htmlContent, setHtmlContent] = useState();
 
    return (
        <HtmlContentContext.Provider value={{htmlContent, setHtmlContent}}>
        {children}
    </HtmlContentContext.Provider>
    )
}

export const useHtmlContext = () =>{
    return useContext(HtmlContentContext);
}