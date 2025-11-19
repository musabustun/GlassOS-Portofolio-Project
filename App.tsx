import React, { useState, useEffect } from 'react';
import { 
  Folder, 
  FileText, 
  Mail, 
  User, 
  Terminal, 
  Sparkles, 
  Settings,
  Layers,
  Briefcase,
  Code
} from 'lucide-react';
import { AppID, AppConfig, WindowState } from './types';
import { WALLPAPER_URL } from './constants';

// Components
import MenuBar from './components/MenuBar';
import Taskbar from './components/Taskbar';
import Window from './components/Window';
import Finder from './components/apps/Finder';
import Resume from './components/apps/Resume';
import Contact from './components/apps/Contact';
import Assistant from './components/apps/Assistant';
import About from './components/apps/About';
import MobileLayout from './components/MobileLayout';

// Placeholder for future apps
const PlaceholderApp = ({ name }: { name: string }) => (
  <div className="p-8 text-center text-gray-500 h-full flex flex-col items-center justify-center">
    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{name}</h2>
    <p className="dark:text-gray-400">This application is currently under construction.</p>
  </div>
);

// Application Configuration with Enhanced Gradients
const APPS: AppConfig[] = [
  {
    id: AppID.FINDER,
    title: 'Finder',
    icon: Folder,
    color: 'bg-gradient-to-b from-sky-400 to-blue-600',
    width: 800,
    height: 500,
    component: Finder
  },
  {
    id: AppID.RESUME,
    title: 'Resume',
    icon: FileText,
    color: 'bg-gradient-to-b from-amber-300 to-orange-500',
    width: 900,
    height: 700,
    component: Resume
  },
  {
    id: AppID.MAIL,
    title: 'Contact',
    icon: Mail,
    color: 'bg-gradient-to-b from-green-400 to-emerald-600',
    width: 700,
    height: 450,
    component: Contact
  },
  {
    id: AppID.ASSISTANT,
    title: 'Gemini AI',
    icon: Sparkles,
    color: 'bg-gradient-to-b from-indigo-400 to-purple-700',
    width: 400,
    height: 600,
    component: Assistant
  },
  {
    id: AppID.PROJECTS,
    title: 'Projects',
    icon: Code,
    color: 'bg-gradient-to-b from-pink-500 to-rose-600',
    width: 800,
    height: 600,
    component: () => <PlaceholderApp name="Projects Gallery" />
  },
  {
    id: AppID.TERMINAL,
    title: 'Terminal',
    icon: Terminal,
    color: 'bg-gradient-to-b from-gray-700 to-black',
    width: 600,
    height: 400,
    component: () => <PlaceholderApp name="Terminal zsh" />
  },
  {
    id: AppID.ABOUT,
    title: 'About',
    icon: User,
    color: 'bg-gradient-to-b from-gray-300 to-gray-500',
    width: 350,
    height: 400,
    component: About
  },
  {
    id: AppID.SETTINGS,
    title: 'Settings',
    icon: Settings,
    color: 'bg-gradient-to-b from-gray-400 to-gray-600',
    width: 600,
    height: 500,
    component: () => <PlaceholderApp name="System Settings" />
  }
];

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<AppID | null>(null);
  const [highestZ, setHighestZ] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Screen Size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize with About window open on Desktop
  useEffect(() => {
    if (!isMobile) {
      handleOpenApp(AppID.ABOUT);
    }
  }, [isMobile]);

  const handleOpenApp = (id: AppID) => {
    const existingWindow = windows.find(w => w.id === id);
    
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false } : w));
      }
      handleFocusWindow(id);
    } else {
      const appConfig = APPS.find(a => a.id === id);
      if (!appConfig) return;

      const newZ = highestZ + 1;
      setHighestZ(newZ);
      
      const startX = 100 + (windows.length * 30);
      const startY = 50 + (windows.length * 30);

      const newWindow: WindowState = {
        id,
        x: appConfig.defaultX || startX,
        y: appConfig.defaultY || startY,
        width: appConfig.width || 600,
        height: appConfig.height || 400,
        isMinimized: false,
        isMaximized: false,
        zIndex: newZ
      };

      setWindows(prev => [...prev, newWindow]);
      setActiveWindowId(id);
    }
  };

  const handleCloseWindow = (id: AppID) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const handleMinimizeWindow = (id: AppID) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    setActiveWindowId(null);
  };

  const handleFocusWindow = (id: AppID) => {
    const newZ = highestZ + 1;
    setHighestZ(newZ);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: newZ } : w));
    setActiveWindowId(id);
  };

  const handleUpdateWindow = (id: AppID, updates: Partial<WindowState>) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, ...updates } : w));
  };

  // Render Mobile Layout
  if (isMobile) {
    return <MobileLayout apps={APPS} onOpenApp={handleOpenApp} />;
  }

  // Render Desktop Layout
  return (
    <div 
        className="w-screen h-screen overflow-hidden bg-cover bg-center relative font-sans text-gray-900 selection:bg-blue-500/30"
        style={{ backgroundImage: `url(${WALLPAPER_URL})` }}
    >
      {/* Desktop Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

      <MenuBar />

      {/* Desktop Area */}
      <div className="relative w-full h-full pt-8 pb-24 px-4 overflow-hidden">
          
          {/* Desktop Icons Grid (Left Side) */}
          <div className="absolute top-12 left-6 grid grid-cols-1 gap-8 w-24 z-0">
              {APPS.filter(a => [AppID.FINDER, AppID.TERMINAL, AppID.PROJECTS].includes(a.id)).map(app => (
                  <div 
                    key={app.id} 
                    className="group flex flex-col items-center gap-1.5 cursor-pointer p-2 rounded-xl hover:bg-white/10 hover:backdrop-blur-md transition-all border border-transparent hover:border-white/20"
                    onClick={() => handleOpenApp(app.id as AppID)}
                  >
                      <div className={`w-[60px] h-[60px] rounded-[18px] ${app.color} flex items-center justify-center text-white shadow-lg shadow-black/20 relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
                          <app.icon size={32} strokeWidth={1.5} className="drop-shadow-md" />
                      </div>
                      <span className="text-white text-xs font-semibold shadow-black drop-shadow-lg px-2 py-0.5 rounded-full">
                        {app.title}
                      </span>
                  </div>
              ))}
          </div>

          {/* Windows Layer */}
          {windows.map((windowState) => {
            const app = APPS.find(a => a.id === windowState.id);
            if (!app) return null;
            const Component = app.component;

            return (
              <Window
                key={windowState.id}
                windowState={windowState}
                title={app.title}
                onClose={handleCloseWindow}
                onMinimize={handleMinimizeWindow}
                onFocus={handleFocusWindow}
                onUpdate={handleUpdateWindow}
              >
                <Component />
              </Window>
            );
          })}
      </div>

      <Taskbar 
        apps={APPS} 
        onAppClick={(id) => handleOpenApp(id as AppID)}
        openApps={windows.filter(w => !w.isMinimized).map(w => w.id)}
      />
    </div>
  );
};

export default App;