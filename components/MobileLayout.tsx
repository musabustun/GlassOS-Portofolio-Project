import React, { useState, useEffect } from 'react';
import { AppConfig, AppID } from '../types';
import { Wifi, Battery, Signal, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOBILE_WALLPAPER_URL } from '../constants';

interface MobileLayoutProps {
  apps: AppConfig[];
  onOpenApp: (id: AppID) => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ apps }) => {
  const [time, setTime] = useState(new Date());
  const [activeAppId, setActiveAppId] = useState<AppID | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const mainApps = apps.slice(0, 4); // Bottom dock apps
  const gridApps = apps.slice(4); // Home screen grid apps

  const activeApp = apps.find(a => a.id === activeAppId);
  const ActiveComponent = activeApp?.component;

  return (
    <div 
      className="w-full h-[100dvh] bg-cover bg-center overflow-hidden relative text-white select-none font-sans"
      style={{ backgroundImage: `url(${MOBILE_WALLPAPER_URL})` }}
    >
      {/* iOS Status Bar */}
      <div className="h-12 w-full flex justify-between items-end px-6 pb-2 text-sm font-semibold z-50 relative pointer-events-none">
        <span className="pointer-events-auto">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50 pointer-events-auto"></div> {/* Dynamic Island / Notch */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <Signal size={16} />
          <Wifi size={16} />
          <Battery size={20} />
        </div>
      </div>

      {/* Home Screen Grid */}
      <div className="p-6 pt-10 grid grid-cols-4 gap-6">
        {gridApps.map(app => (
           <div key={app.id} className="flex flex-col items-center gap-1" onClick={() => setActiveAppId(app.id as AppID)}>
              <div className={`w-[60px] h-[60px] rounded-xl ${app.color} flex items-center justify-center shadow-lg relative overflow-hidden group`}>
                   <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                   <app.icon size={28} className="text-white relative z-10" />
              </div>
              <span className="text-[11px] font-medium text-white drop-shadow-md text-center leading-tight">{app.title}</span>
           </div>
        ))}
      </div>

      {/* Bottom Dock */}
      <div className="absolute bottom-6 left-4 right-4 h-24 bg-white/20 backdrop-blur-xl rounded-[32px] flex items-center justify-around px-4">
        {mainApps.map(app => (
           <div key={app.id} className="flex flex-col items-center" onClick={() => setActiveAppId(app.id as AppID)}>
             <div className={`w-[60px] h-[60px] rounded-xl ${app.color} flex items-center justify-center shadow-lg relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                 <app.icon size={28} className="text-white relative z-10" />
             </div>
           </div>
        ))}
      </div>
      
      {/* Page Dots */}
      <div className="absolute bottom-32 w-full flex justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>

      {/* Opened App Modal (Full Screen) */}
      <AnimatePresence>
        {activeAppId && ActiveComponent && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-40 bg-white dark:bg-black flex flex-col"
          >
            {/* App Header / Grabber - Padded for Status Bar Safe Area */}
            <div className="pt-14 pb-3 flex items-center justify-between px-4 bg-gray-100 dark:bg-[#1c1c1c] border-b border-gray-200 dark:border-gray-800">
                 <div className="w-8"></div> {/* Spacer */}
                 <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div> {/* Pull bar */}
                 <button 
                    onClick={() => setActiveAppId(null)} 
                    className="w-8 h-8 bg-gray-200 dark:bg-gray-700 active:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                 >
                    <X size={16} className="text-gray-600 dark:text-gray-300" />
                 </button>
            </div>
            
            {/* App Content */}
            <div className="flex-1 overflow-auto relative">
               <ActiveComponent />
            </div>

            {/* Home Bar Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 dark:bg-white/20 rounded-full z-50 pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileLayout;