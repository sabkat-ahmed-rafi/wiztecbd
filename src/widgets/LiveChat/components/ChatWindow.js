"use client";
import { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import Image from "next/image";

const ChatWindow = ({ isOpen, messages, isAdminTyping, onSend, onTyping, email, onEmailSubmit }) => {
  const [emailInput, setEmailInput] = useState("");

  if (!isOpen) return null;

  return (
    <div 
      className="fixed bottom-24 right-6 z-[9999] w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-4 fade-in"
      style={{ 
        boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.3), 0 10px 30px -15px rgba(0, 0, 0, 0.2), 0 0 50px -10px rgba(139, 196, 63, 0.4)' 
      }}
    >
      {/* Header */}
      <div className="p-4 bg-[#8BC43F] text-white flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border border-white/30">
          <Image src="/assets/icons/questions.svg" alt="Support" width={24} height={24} />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="font-semibold text-sm">WiztecBD Support</h3>
          <p className="text-[10px] opacity-80">We typically reply in a few minutes</p>
        </div>
      </div>

      {/* Content */}
      {!email ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white/50">
          <div className="mb-6 w-16 h-16 bg-[#8BC43F]/10 rounded-full flex items-center justify-center">
            <h1 className="text-2xl">👋</h1>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome!</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your email to start chatting with our team.</p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (emailInput.includes("@")) onEmailSubmit(emailInput);
            }}
            className="w-full space-y-3"
          >
            <input 
              type="email" 
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8BC43F] focus:ring-1 focus:ring-[#8BC43F] outline-none text-sm transition-all bg-white"
            />
            <button 
              type="submit"
              className="w-full bg-[#8BC43F] text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-[#8BC43F]/30 transition-all text-sm"
            >
              Start Conversation
            </button>
          </form>
        </div>
      ) : (
        <>
          <MessageList messages={messages} isAdminTyping={isAdminTyping} />
          <ChatInput onSend={onSend} onTyping={onTyping} />
        </>
      )}
    </div>
  );
};

export default ChatWindow;
