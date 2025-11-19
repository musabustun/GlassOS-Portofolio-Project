import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Search, Command } from 'lucide-react';

const MenuBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 w-full bg-black/20 backdrop-blur-xl text-white/90 flex justify-between items-center px-4 text-xs font-medium z-50 select-none fixed top-0 left-0 right-0 border-b border-white/5">
      <div className="flex items-center gap-4">
        <div className="font-bold text-sm hover:text-white cursor-pointer"></div>
        <div className="hidden md:flex gap-4">
            <span className="font-bold cursor-pointer hover:text-white">GlassOS</span>
            <span className="cursor-pointer hover:text-white">File</span>
            <span className="cursor-pointer hover:text-white">Edit</span>
            <span className="cursor-pointer hover:text-white">View</span>
            <span className="cursor-pointer hover:text-white">Go</span>
            <span className="cursor-pointer hover:text-white">Window</span>
            <span className="cursor-pointer hover:text-white">Help</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
             <Battery size={16} className="text-white/80" />
             <Wifi size={16} className="text-white/80" />
             <Search size={14} className="text-white/80" />
        </div>
        
        <div className="flex items-center gap-2">
             <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                <Command size={8} />
             </div>
             <span>
                {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                &nbsp;&nbsp;
                {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
             </span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;