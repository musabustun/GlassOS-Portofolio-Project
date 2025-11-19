import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Info Side */}
      <div className="md:w-1/3 bg-gray-50 dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700 flex flex-col gap-6">
        <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
                I'm currently available for freelance projects and full-time roles.
            </p>
        </div>
        
        <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                    <Mail size={14} />
                </div>
                <span>musabyusufustun@outlook.com</span>
            </div>
             <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                    <Phone size={14} />
                </div>
                <span>+90 (555) 123-4567</span>
            </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 bg-white dark:bg-gray-900 p-6 md:p-8">
        {!sent ? (
             <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Name</label>
                    <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</label>
                    <input required type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Hello there..."></textarea>
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30">
                    <Send size={16} />
                    <span>Send Message</span>
                </button>
            </form>
        ) : (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Message Sent!</h3>
                <p className="text-gray-500 mt-2">I'll get back to you as soon as possible.</p>
            </div>
        )}
       
      </div>
    </div>
  );
};

export default Contact;