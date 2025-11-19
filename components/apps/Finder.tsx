import React, { useState } from 'react';
import { FileNode } from '../../types';
import { Folder, FileText, ChevronRight, Home, HardDrive, Clock, Cloud } from 'lucide-react';
import { FILE_SYSTEM } from '../../constants';

const Finder: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<FileNode[]>([]);
  const [currentFolder, setCurrentFolder] = useState<FileNode>(FILE_SYSTEM[0]);

  const handleNavigate = (folder: FileNode) => {
    if (folder.type === 'folder') {
      setCurrentPath([...currentPath, currentFolder]);
      setCurrentFolder(folder);
    }
  };

  const handleBack = () => {
    if (currentPath.length > 0) {
      const prev = currentPath[currentPath.length - 1];
      setCurrentPath(currentPath.slice(0, -1));
      setCurrentFolder(prev);
    }
  };

  return (
    <div className="flex h-full text-gray-800 dark:text-gray-200">
      {/* Sidebar */}
      <div className="w-48 bg-white/30 backdrop-blur-md border-r border-white/20 p-3 flex flex-col gap-4 text-sm">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-gray-500 pl-2 mb-1">Favorites</div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-black/5 cursor-pointer">
            <Cloud size={16} className="text-blue-500" />
            <span>AirDrop</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5 cursor-pointer">
            <Clock size={16} />
            <span>Recents</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5 cursor-pointer">
            <FileText size={16} />
            <span>Applications</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="text-xs font-semibold text-gray-500 pl-2 mb-1">Locations</div>
           <div 
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${currentFolder.id === 'root' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/5'}`}
            onClick={() => {
              setCurrentFolder(FILE_SYSTEM[0]);
              setCurrentPath([]);
            }}
           >
            <HardDrive size={16} />
            <span>Macintosh HD</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col bg-white/50 dark:bg-[#1e1e1e]/80">
        {/* Breadcrumb/Toolbar */}
        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
           <button 
            disabled={currentPath.length === 0}
            onClick={handleBack}
            className="p-1 hover:bg-black/10 rounded disabled:opacity-30"
           >
             <ChevronRight className="rotate-180" size={18} />
           </button>
           <span className="font-medium ml-2">{currentFolder.name}</span>
        </div>

        {/* Grid View */}
        <div className="flex-1 p-4 grid grid-cols-4 md:grid-cols-5 gap-4 content-start overflow-auto">
          {currentFolder.children?.map((node) => (
            <div 
              key={node.id}
              className="flex flex-col items-center gap-2 group p-2 rounded-lg hover:bg-blue-500/20 cursor-pointer transition-colors"
              onClick={() => handleNavigate(node)}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                {node.type === 'folder' ? (
                  <Folder size={48} className="text-blue-400 fill-blue-400/20 drop-shadow-lg" strokeWidth={1.5} />
                ) : (
                  <div className="relative">
                     <FileText size={40} className="text-gray-500 fill-white/80" strokeWidth={1} />
                     <div className="absolute bottom-1 left-0 w-full text-center text-[6px] font-mono text-gray-600">TXT</div>
                  </div>
                )}
              </div>
              <span className="text-xs text-center px-1 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-300">
                {node.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Finder;