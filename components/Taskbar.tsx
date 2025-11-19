import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { AppConfig } from '../types';

interface TaskbarProps {
  apps: AppConfig[];
  onAppClick: (id: string) => void;
  openApps: string[];
}

// Improved Dock Icon with physics-based magnification
const DockIcon = ({ 
  app, 
  mouseX, 
  onClick, 
  isOpen 
}: { 
  app: AppConfig; 
  mouseX: MotionValue; 
  onClick: () => void; 
  isOpen: boolean 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [50, 85, 50]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square relative flex flex-col items-center justify-center mb-2"
      onClick={onClick}
    >
      <motion.div
        className={`w-full h-full rounded-2xl shadow-lg shadow-black/30 cursor-pointer relative overflow-hidden group border border-white/10 ${app.color}`}
      >
         {/* Glossy overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none opacity-60"></div>
         <div className="w-full h-full flex items-center justify-center text-white drop-shadow-md">
             <app.icon size="50%" strokeWidth={1.5} />
         </div>
      </motion.div>

      {/* Active Dot */}
      <div className={`absolute -bottom-3 w-1 h-1 bg-white/80 rounded-full shadow-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {/* Tooltip */}
      <span className="absolute -top-10 bg-gray-900/80 backdrop-blur-md text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {app.title}
      </span>
    </motion.div>
  );
};

const Taskbar: React.FC<TaskbarProps> = ({ apps, onAppClick, openApps }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-2 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="glass-dock px-4 pb-2 pt-2 rounded-2xl flex items-end gap-3 pointer-events-auto mx-4 border border-white/20 shadow-2xl bg-white/10 backdrop-blur-2xl h-[80px]"
      >
        {apps.map((app) => (
          <DockIcon
            key={app.id}
            app={app}
            mouseX={mouseX}
            onClick={() => onAppClick(app.id)}
            isOpen={openApps.includes(app.id)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Taskbar;