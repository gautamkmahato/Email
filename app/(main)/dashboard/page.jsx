'use client'

import fetchAllContent from '@/app/action/fetchAllContent';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Card from './_components/Card';
import { Plus } from 'lucide-react';

export default function Dashboard() {

    const [templateList, setTemplateList] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() =>{
        async function getData() {
            setLoading(true)
            const result = await fetchAllContent();
            console.log(result)
            if(result){
                const newList = [...result];
                console.log(newList)
                setTemplateList(newList);
            }   
            setLoading(false);
        }
        getData();
    }, []);

    if(loading){
        return(
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    return (
        <>
            <div className="min-h-scree py-6 px-8">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <Link href="/dashboard/create">
                        <button className="bg-red-800 text-white px-6 py-2 cursor-pointer rounded-lg hover:bg-blue-600 transition duration-300 flex items-center">
                            Create New Template
                            <Plus className="ml-2 w-5 h-5" /> {/* Adds margin-left to space out the icon */}
                        </button>
                    </Link>
                </div>


                {/* Card Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {templateList.length > 0 ? (
                        templateList.map((template, index) => (
                            <div key={index} className="col-span-1">
                                <Card prompt={template?.prompt} tid={template.id} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex justify-center items-center">
                            <div className="text-center">
                                <img
                                    src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg"
                                    alt="placeholder"
                                    className="mx-auto mb-4 w-64 h-64"
                                />
                                <h1 className="text-2xl font-semibold text-gray-700">No Templates Available.</h1>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </>
    )
}
