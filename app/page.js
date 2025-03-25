'use client'

import Head from 'next/head';
import { useState } from 'react';
import Navbar from './_components/Navbar';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('newsletter');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return(
    <>
      <div className="min-h-screen bg-gray-50">
      
        <Navbar />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Create Stunning</span>
              <span className="block text-indigo-600">Email Templates in Minutes</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Drag-and-drop email builder with AI-powered tools to help you design, send, and track professional emails effortlessly.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#demo" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Trusted by companies worldwide
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center">
              <div className="h-12 flex items-center text-gray-400 font-bold text-xl">Acme Inc</div>
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="h-12 flex items-center text-gray-400 font-bold text-xl">Globex</div>
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="h-12 flex items-center text-gray-400 font-bold text-xl">Soylent</div>
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="h-12 flex items-center text-gray-400 font-bold text-xl">Initech</div>
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="h-12 flex items-center text-gray-400 font-bold text-xl">Hooli</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="p-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to create amazing emails
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides all the tools to design, send, and track your email campaigns.
            </p>
          </div>

          <div className="mt-14">
              <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Professional Templates
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Choose from hundreds of professionally designed newsletter templates for any industry or occasion.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Custom Branding
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Add your logo, colors, and fonts to match your brand identity across all communications.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Content Blocks
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Pre-designed content blocks for articles, images, testimonials, and calls-to-action.
                  </p>
                </div>
              </div>


              <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Intuitive Interface
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Easily drag and drop elements like text, images, buttons, and dividers to create your perfect email.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Responsive Design
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    All templates automatically adjust to look great on any device from desktop to mobile.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Advanced Customization
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Fine-tune every aspect with custom CSS, spacing controls, and element styling options.
                  </p>
                </div>
              </div>



              <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Open Tracking
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Know exactly when your emails are opened and how many times they're viewed.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Click Tracking
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Track which links are clicked and how often to measure engagement.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Detailed Analytics
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Comprehensive reports with graphs and metrics to analyze your campaign performance.
                  </p>
                </div>
              </div>


              <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Smart Replies
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    AI suggests context-aware responses to incoming emails to save you time.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Content Suggestions
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get AI-generated subject lines and email content tailored to your audience.
                  </p>
                </div>

                <div className="group relative border p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Smart Scheduling
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    AI analyzes recipient behavior to suggest optimal send times for maximum engagement.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="p-16 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                <span className="block">See MailCraft in action</span>
              </h2>
              <p className="mt-3 text-lg text-indigo-200 sm:mt-5">
                Watch how easy it is to create beautiful, responsive emails with our drag-and-drop builder and AI-powered tools.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mt-5 rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Watch Demo Video
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white overflow-hidden rounded-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                      <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="p-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How it works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get started in minutes
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Step 1 */}
              <div className="relative lg:flex lg:items-center lg:justify-between mb-10">
                <div className="lg:w-5/12 lg:pr-8">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">1. Choose a template</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Select from our library of professionally designed templates or start from scratch.
                  </p>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-5/12 lg:pl-8">
                  <div className="flex items-center justify-center h-48 w-full bg-white rounded-md shadow overflow-hidden">
                    <svg className="h-20 w-20 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative lg:flex lg:flex-row-reverse lg:items-center lg:justify-between mb-10">
                <div className="lg:w-5/12 lg:pl-8">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">2. Customize your design</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Use our drag-and-drop editor to personalize your email with your content, colors, and images.
                  </p>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-5/12 lg:pr-8">
                  <div className="flex items-center justify-center h-48 w-full bg-white rounded-md shadow overflow-hidden">
                    <svg className="h-20 w-20 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-5/12 lg:pr-8">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">3. Send and track</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Send to your list and monitor opens, clicks, and conversions in real-time.
                  </p>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-5/12 lg:pl-8">
                  <div className="flex items-center justify-center h-48 w-full bg-white rounded-md shadow overflow-hidden">
                    <svg className="h-20 w-20 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="p-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our customers say
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">JD</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">John Doe</h3>
                  <p className="text-sm text-gray-500">Marketing Director, Acme Inc</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  "MailCraft has revolutionized our email marketing. The drag-and-drop builder saves us hours of design time, and the analytics help us optimize our campaigns like never before."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">AS</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Alice Smith</h3>
                  <p className="text-sm text-gray-500">CEO, Globex Corp</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  "The AI-powered email replies feature alone is worth the subscription. It handles 80% of our customer service emails with perfect tone and accuracy."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">RJ</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Robert Johnson</h3>
                  <p className="text-sm text-gray-500">Founder, StartupXYZ</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  "As a small business, we needed professional-looking emails without a designer. MailCraft's templates make our newsletters look like they were created by a pro agency."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="p-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose the plan that fits your needs. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900">Starter</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">$19</span>
                  <span className="ml-1 text-lg font-medium text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Perfect for individuals and small teams getting started with email marketing.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to 5,000 contacts</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow overflow-hidden border-2 border-indigo-500">
              <div className="px-6 py-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Pro</h3>
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">$49</span>
                  <span className="ml-1 text-lg font-medium text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Ideal for growing businesses with advanced marketing needs.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to 25,000 contacts</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI content suggestions</span>
                  </li>
                </ul>
                <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Tailored solutions for large organizations with complex needs.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited contacts</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Column */}
            <div>
              <h3 className="text-xl font-bold mb-4">MailCraft</h3>
              <p className="text-gray-400 mb-4">
                Create stunning emails and newsletters with our AI-powered drag-and-drop builder.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#demo" className="text-gray-400 hover:text-white">Live Demo</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            © 2024 MailCraft. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}