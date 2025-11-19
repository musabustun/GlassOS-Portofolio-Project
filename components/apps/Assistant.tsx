import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User as UserIcon } from 'lucide-react';
import { generateAssistantResponse } from '../../services/geminiService';
import { RESUME_DATA } from '../../constants';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'assistant', text: "Hi! I'm the GlassOS AI Assistant. I can tell you about Musab's skills, projects, or just chat about tech. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Construct context from static data
    const context = `
      Resume Data: ${JSON.stringify(RESUME_DATA)}
      Current OS Environment: React based web OS called GlassOS.
      Creator: Musab Yusuf Üstün.
    `;

    const responseText = await generateAssistantResponse(input, context);
    
    const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', text: responseText };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20 dark:from-black/80 dark:to-gray-900/80 text-gray-800 dark:text-white">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-500' : 'bg-purple-500'}`}>
              {msg.role === 'user' ? <UserIcon size={16} className="text-white" /> : <Sparkles size={16} className="text-white" />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-blue-500 text-white rounded-tr-none' 
                : 'bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-tl-none border border-white/10'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <Bot size={16} className="text-white animate-pulse" />
             </div>
             <div className="bg-white/80 dark:bg-gray-700/80 p-3 rounded-2xl rounded-tl-none border border-white/10 flex items-center gap-1">
               <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
               <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></div>
               <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></div>
             </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/30 dark:bg-black/30 backdrop-blur-md border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Musab's projects..."
            className="w-full pl-4 pr-12 py-3 rounded-full bg-white/50 dark:bg-gray-800/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 dark:text-white shadow-inner"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assistant;