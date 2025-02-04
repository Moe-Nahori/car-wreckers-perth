'use client';

import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { companyInfo } from '@/config/company-info';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission here
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-8">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 mb-4">
          <div className="bg-[#0D47A1] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-xl">
              ×
            </button>
          </div>
          <div className="p-4 h-[calc(100%-4rem)] flex flex-col">
            <div className="flex-grow overflow-y-auto">
              <p className="text-gray-500 text-center mt-4">
                Start a conversation with us!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow border rounded-lg px-3 py-2"
              />
              <button
                type="submit"
                className="bg-[#0D47A1] text-white p-2 rounded-lg hover:bg-[#0D47A1]/90 transition-colors"
                disabled={!message.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center bg-white text-[#0D47A1] w-14 h-14 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Open Live Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default LiveChat;