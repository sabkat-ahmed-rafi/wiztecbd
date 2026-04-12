"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ImageURL from "@/components/ImageUrl";

const MessageList = ({ messages, isAdminTyping }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isAdminTyping]);

  const formatTime = (isoString) => {
    if (!isoString) return "";
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar"
      style={{ scrollBehavior: "smooth" }}
    >
      {messages.map((msg, index) => {
        const isUser = !msg.isAdmin;
        return (
          <div key={msg.id || index} className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
            {/* File Attachment */}
            {msg.file && (
              <div className={`mb-1 p-1 rounded-lg bg-gray-100/50 backdrop-blur-sm border border-white/20 shadow-sm max-w-[70%]`}>
                <ImageURL 
                  image={msg.file} 
                  alt="attachment" 
                  height={150} 
                  width={200} 
                  className="rounded-lg object-cover max-h-40 w-full" 
                />
              </div>
            )}

            {/* Message Bubble */}
            {msg.message && (
              <div 
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                  isUser 
                    ? "bg-[#8BC43F] text-white rounded-tr-none" 
                    : "bg-white/80 backdrop-blur-md text-gray-800 border border-white/40 rounded-tl-none"
                }`}
              >
                <p className="whitespace-pre-wrap break-words">{msg.message}</p>
              </div>
            )}

            {/* Footer: Time & Status */}
            <div className="mt-1 flex items-center gap-1 px-1">
              <span className="text-[10px] text-gray-400">
                {formatTime(msg.createdAt)}
              </span>
              {isUser && (
                <span className={`text-[10px] ${msg.adminRead ? "text-blue-500" : "text-gray-400"}`}>
                  {msg.adminRead ? "● Seen" : "✓ Sent"}
                </span>
              )}
            </div>
          </div>
        );
      })}

      {/* Typing Indicator */}
      {isAdminTyping && (
        <div className="flex items-center gap-2 text-gray-500 text-xs italic ml-1">
          <div className="flex gap-0.5">
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
          Admin is typing...
        </div>
      )}
    </div>
  );
};

export default MessageList;
