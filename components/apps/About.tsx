import React from 'react';
import { Cpu, Monitor, HardDrive, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="h-full bg-gray-100 dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 flex flex-col items-center p-8 text-center relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-inner flex items-center justify-center mb-6 relative z-10">
             <Monitor size={48} className="text-gray-600" />
        </div>
        
        <h1 className="text-2xl font-bold mb-1">GlassOS</h1>
        <p className="text-sm text-gray-500 mb-8">Version 14.0 (Sonoma-ish)</p>

        <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 space-y-3 text-left text-sm">
            <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-gray-500">Processor</span>
                <span className="font-medium">React 18 + TypeScript Neural Engine</span>
            </div>
             <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-gray-500">Memory</span>
                <span className="font-medium">Infinite Context Window</span>
            </div>
             <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-gray-500">Graphics</span>
                <span className="font-medium">Tailwind CSS Metal GPU</span>
            </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Startup Disk</span>
                <span className="font-medium">Vercel Edge</span>
            </div>
        </div>
        
        <div className="mt-auto text-xs text-gray-400">
            &copy; 2025 Musab Yusuf Üstün. All rights reserved.
        </div>
    </div>
  );
};

export default About;