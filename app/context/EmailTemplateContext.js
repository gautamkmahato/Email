'use client'

const { createContext, useContext, useState } = require("react");


const EmailTemplateContext = createContext();


export const EmailTemplateProvider = ({ children }) =>{
    const [emailTemplate, setEmailTemplate] = useState([]);

    return(
        <EmailTemplateContext value={{emailTemplate, setEmailTemplate}}>
            {children}
        </EmailTemplateContext>
    )
}

export const useEmailTemplate = () =>{
    return useContext(EmailTemplateContext);
}