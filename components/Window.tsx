import React, { useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
import { AppID, WindowState } from '../types';

interface WindowProps {
  windowState: WindowState;
  title: string;
  onClose: (id: AppID) => void;
  onMinimize: (id: AppID) => void;
  onFocus: (id: AppID) => void;
  onUpdate: (id: AppID, updates: Partial<WindowState>) => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  windowState,
  title,
  onClose,
  onMinimize,
  onFocus,
  onUpdate,
  children
}) => {
  const dragControls = useDragControls();
  const resizeRef = useRef<HTMLDivElement>(null);

  // Handle Resizing
  useEffect(() => {
    const resizeable = resizeRef.current;
    if (!resizeable) return;

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      const startX = e.clientX;
      const startY = e.clientY;
      const startWidth = windowState.width;
      const startHeight = windowState.height;

      const handlePointerMove = (moveEvent: PointerEvent) => {
        // Min width 300, min height 200
        const newWidth = Math.max(300, startWidth + (moveEvent.clientX - startX));
        const newHeight = Math.max(200, startHeight + (moveEvent.clientY - startY));
        
        onUpdate(windowState.id, { width: newWidth, height: newHeight });
      };

      const handlePointerUp = () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };

      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    };

    resizeable.addEventListener('pointerdown', handlePointerDown);
    return () => {
      resizeable.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [windowState.width, windowState.height, windowState.id, onUpdate]);

  if (windowState.isMinimized) return null;

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragListener={false}
      initial={{ opacity: 0, scale: 0.95, x: windowState.x, y: windowState.y }}
      animate={{ opacity: 1, scale: 1, x: windowState.x, y: windowState.y }}
      exit={{ opacity: 0, scale: 0.95 }}
      onDragEnd={(_, info) => {
        // Sync position state on drag end to avoid jumps on re-render/resize
        onUpdate(windowState.id, { 
          x: windowState.x + info.offset.x, 
          y: windowState.y + info.offset.y 
        });
      }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'absolute',
        width: windowState.width,
        height: windowState.height,
        zIndex: windowState.zIndex,
      }}
      className="flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-2xl bg-white/60 dark:bg-black/40 dark:border-white/10 transition-shadow duration-200"
      onPointerDown={() => onFocus(windowState.id)}
    >
      {/* Window Title Bar */}
      <div 
        className="h-10 flex-shrink-0 flex items-center justify-between px-4 bg-white/30 border-b border-white/10 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          dragControls.start(e);
          onFocus(windowState.id);
        }}
      >
        <div className="flex items-center gap-2 group">
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(windowState.id); }}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-black/50 border border-black/10"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(windowState.id); }}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-black/50 border border-black/10"
          >
            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
          <button 
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-black/50 border border-black/10"
          >
            <Maximize2 size={6} className="opacity-0 group-hover:opacity-100 text-black" />
          </button>
        </div>
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 select-none">{title}</span>
        <div className="w-14"></div> {/* Spacer for balance */}
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto relative bg-white/40 dark:bg-black/20">
        {children}
        
        {/* Resize Handle */}
        <div 
            ref={resizeRef}
            className="absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize z-50 group flex items-end justify-end p-1"
        >
             {/* Visual indicator for resize corner */}
             <div className="w-3 h-3 rounded-br-[2px] border-b-2 border-r-2 border-gray-400/30 group-hover:border-gray-500/60"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Window;