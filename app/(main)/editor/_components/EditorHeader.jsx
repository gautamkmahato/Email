'use client'

import { useScreen } from '@/app/context/ScreenSizeContext';
import { Menu, Search, Bell, MonitorCheck, RectangleVertical, Code, Save, Airplay } from 'lucide-react';

const EditorHeader = () => {
  const {screenSize, setScreenSize} = useScreen();

  return (
    <header className="w-full border-b-gray-800 p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap space-y-4 sm:space-y-0 sm:flex-row">
        {/* Left Column: Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with your logo */}
        </div>

        {/* Middle Column: Two Buttons with Icons and Text */}
        <div className="flex space-x-4">
          <button className={`flex cursor-pointer items-center justify-center text-neutral-950 p-2 rounded-md hover:bg-amber-100 ${screenSize === 'desktop' && 'bg-amber-100'}`}
            onClick={() => setScreenSize('desktop')}
          >
            <MonitorCheck className="w-5 h-5 mr-2" />
            <span className='text-sm'>Desktop</span>
          </button>
          <button className={`flex cursor-pointer items-center justify-center text-neutral-950 p-2 rounded-md hover:bg-amber-100 ${screenSize === 'mobile' && 'bg-amber-100'}`}
            onClick={() => setScreenSize('mobile')}
          >
            <RectangleVertical className="w-5 h-5 mr-2" />
            <span className='text-sm'>Mobile</span>
          </button>
        </div>

        {/* Right Column: Three Buttons with Icons and Text */}
        <div className="flex space-x-4">
          <button className="flex cursor-pointer text-sm items-center text-neutral-950 p-2 rounded-md">
            <Code className="w-5 h-5 mr-2 hover:text-amber-400" />
          </button>
          <button className="flex text-sm cursor-pointer items-center text-neutral-950 p-2 rounded-md hover:bg-amber-100">
            <span>Send Test Email</span>
          </button>
          <button className="flex text-sm cursor-pointer items-center text-neutral-950 p-2 rounded-md hover:bg-amber-100">
            <Save className="w-5 h-5 mr-2" />
            <span>Save Email Template</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default EditorHeader;
