import { LucideIcon } from 'lucide-react';

export enum AppID {
  FINDER = 'finder',
  RESUME = 'resume',
  MAIL = 'mail',
  ABOUT = 'about',
  TERMINAL = 'terminal',
  ASSISTANT = 'assistant',
  SETTINGS = 'settings',
  PROJECTS = 'projects'
}

export interface AppConfig {
  id: AppID;
  title: string;
  icon: LucideIcon;
  color: string; // Tailwind color class for icon background
  width?: number;
  height?: number;
  defaultX?: number;
  defaultY?: number;
  component: React.FC<any>;
}

export interface WindowState {
  id: AppID;
  x: number;
  y: number;
  width: number;
  height: number;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface FileNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  content?: string; // For text files
  children?: FileNode[];
  icon?: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}