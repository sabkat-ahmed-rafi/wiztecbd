"use client";
import { useState, useEffect } from "react";
import { FaMessage } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ChatBubble = ({ isOpen, onClick, unreadCount }) => {
  const [isDismissed, setIsDismissed] = useState(true); // Initialized to true to avoid flash before effect

  useEffect(() => {
    // Check if user has dismissed it in current session
    const dismissed = sessionStorage.getItem("wiztec_chat_welcome_dismissed");
    setIsDismissed(dismissed === "true");
  }, []);

  const handleDismiss = (e) => {
    e.stopPropagation(); // Prevent opening the chat when clicking the X
    setIsDismissed(true);
    sessionStorage.setItem("wiztec_chat_welcome_dismissed", "true");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Welcome Message Popup (Optional, shows when closed and not dismissed) */}
      {!isOpen && !isDismissed && (
        <div 
          className="relative bg-white px-4 py-2 pr-8 rounded-2xl shadow-xl border border-gray-100 animate-bounce cursor-pointer group" 
          onClick={onClick}
        >
          <p className="text-sm font-medium text-gray-800">How can we help? 👋</p>
          <button 
            onClick={handleDismiss}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            title="Dismiss"
          >
            <IoClose className="text-sm" />
          </button>
        </div>
      )}

      {/* Main Bubble */}
      <button
        onClick={onClick}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? "bg-gray-100 text-gray-800" : "bg-[#8BC43F] text-white"
        }`}
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaMessage className="text-xl" />
        )}

        {/* Unread Badge */}
        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatBubble;
