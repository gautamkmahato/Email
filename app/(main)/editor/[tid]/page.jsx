'use client'

import { useParams } from "next/navigation";
import Canvas from "../_components/Canvas";
import EditorHeader from "../_components/EditorHeader";
import EditorSidebar from "../_components/EditorSidebar";
import Settings from "../_components/SettingSidebar";
import { useEffect, useState } from "react";
import fetchContent from "@/app/action/fetchContent";
import { useEmailTemplate } from "@/app/context/EmailTemplateContext";
import LoadingSpinner from "@/app/_components/LoadingSpinner";


export default function Editor() {

    const { tid } = useParams();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate()
    const[ loading, setLoading ] = useState()

    console.log(tid)

    useEffect(() =>{
        async function getData() {
            setLoading(true)
            const result = await fetchContent(tid);
            console.log(result);
            setEmailTemplate(result?.design);
            setLoading(false);
        }
        getData();
    }, []);

    // if(loading){
    //     return(
    //         <>
    //             <h1>Loading...</h1>
    //         </>
    //     )
    // }

    return (
        <>
            <EditorHeader />
            <div className='mt-4 bg-gray-100 grid grid-cols-5'>
                <EditorSidebar />
                <div className='col-span-3'>
                    {!loading ? <Canvas /> : <LoadingSpinner />}
                </div>
                <Settings />
            </div>
        </>
    )
}
