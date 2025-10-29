import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, Sender } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PaperPlaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show the welcome message if the chat is open and empty.
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Hi there! 👋 I'm the virtual assistant for Anaheim Body Sculpting. I can help you with questions about our non-invasive treatments. How can I help you get started?",
            sender: 'bot',
            options: ["Tell me about 'Sculpt'", "What is 'Tone'?", "Explain 'Tighten'", "Book a Consultation"]
          },
        ]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen]);
  
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text,
      sender: 'user',
    };

    setMessages(prev => [...prev.map(m => ({...m, options: undefined})), userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
        const botResponseText = await sendMessageToGemini(text);
        const botMessage: ChatMessage = {
            id: Date.now() + 1,
            text: botResponseText,
            sender: 'bot',
        };
        setMessages(prev => [...prev, botMessage]);
    } catch (error) {
        const errorMessage: ChatMessage = {
            id: Date.now() + 1,
            text: "I'm sorry, something went wrong. Please try again.",
            sender: 'bot',
        };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {isOpen && (
        <div className="chatbot-window active: flex flex-col w-[350px] h-[550px] sm:w-[380px] sm:h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out">
          <header className="bg-primary text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">How Can We Help?</h3>
              <div className="text-sm flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div>Online</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-75"><CloseIcon /></button>
          </header>
          <div ref={chatBoxRef} className="flex-1 p-4 overflow-y-auto bg-neutral-light space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-secondary-DEFAULT text-white' : 'bg-gray-200 text-neutral-dark'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  {msg.options && (
                    <div className="mt-3 space-y-2">
                      {msg.options.map((option, index) => (
                        <button key={index} onClick={() => handleOptionClick(option)} className="w-full text-left p-2 bg-white/80 hover:bg-white rounded-md border border-primary text-primary text-sm font-medium transition-colors">
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="p-3 rounded-lg bg-gray-200">
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                    </div>
                  </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t bg-white">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button type="submit" disabled={isLoading} className="p-3 bg-primary text-white rounded-md hover:bg-primary-dark disabled:bg-primary/50 transition-colors">
                <PaperPlaneIcon />
              </button>
            </form>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-button w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-[pulse_2s_infinite]"
        >
          <ChatIcon />
        </button>
      )}
    </div>
  );
};

export default Chatbot;