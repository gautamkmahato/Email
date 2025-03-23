'use client'

const { createContext, useContext, useState, useEffect } = require("react");


const EmailTemplateContext = createContext();


export const EmailTemplateProvider = ({ children }) =>{
    const [emailTemplate, setEmailTemplate] = useState([]);

    useEffect(() =>{
        const emailTemplateStorage = JSON.parse(localStorage.getItem('emailTemplate'));
        setEmailTemplate(emailTemplateStorage)
    }, []);

    useEffect(() =>{
        if(typeof window !== undefined){
            localStorage.setItem('emailTemplate', JSON.stringify(emailTemplate))
        }
    }, [emailTemplate]);

    return(
        <EmailTemplateContext value={{emailTemplate, setEmailTemplate}}>
            {children}
        </EmailTemplateContext>
    )
}

export const useEmailTemplate = () =>{
    return useContext(EmailTemplateContext);
}