"use client";

import React, { useState } from 'react';
import { Button } from './button';
import { Send, X, MessageCircle } from 'lucide-react';
import LoadingSpinner from './loading-spinner';
import { useAsync } from '@/hooks/use-async';
import ErrorMessage from './error-message';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const { execute: sendMessage, loading: isSending, error } = useAsync(async (message: string) => {
    // TODO: Implement actual message sending
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
  });

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isSending) return;
    await sendMessage(inputMessage);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 z-40 bg-[#22c55e] hover:bg-[#1e40af] text-white rounded-full w-12 h-12 p-0"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-4 z-40 bg-white rounded-lg shadow-lg w-80 max-h-[80vh] flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Live Chat</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 min-h-[300px] max-h-[400px]">
            {messages.map(message => (
              <div
                key={message.id}
                className={`mb-2 p-2 rounded-lg max-w-[80%] ${
                  message.sender === 'user'
                    ? 'ml-auto bg-blue-500 text-white'
                    : 'bg-gray-100'
                }`}
              >
                {message.text}
              </div>
            ))}
            {isSending && (
              <div className="flex justify-center py-2">
                <LoadingSpinner size="sm" />
              </div>
            )}
            {error && (
              <ErrorMessage 
                message="Failed to send message. Please try again."
                className="my-2"
              />
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-md border px-3 py-2 text-sm"
                disabled={isSending}
              />
              <Button 
                type="submit"
                size="icon"
                className="bg-[#22c55e] hover:bg-[#1e40af] text-white"
                disabled={isSending || !inputMessage.trim()}
              >
                {isSending ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}