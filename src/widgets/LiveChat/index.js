"use client";
import { useState, useEffect } from "react";
import ChatBubble from "./components/ChatBubble";
import ChatWindow from "./components/ChatWindow";
import useChat from "./hooks/useChat";

/**
 * LiveChat Component
 * 
 * A premium, responsive floating chat widget.
 * Uses useChat hook for backend communication.
 * Persists user email in localStorage for auto-fill.
 */
const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [previews, setPreviews] = useState([]);
  
  // Handle new incoming messages when closed
  const handleNewMessage = (data) => {
    if (!isOpen) {
      const id = Date.now();
      setPreviews((prev) => [...prev, { id, text: data.message }]);
      
      // Auto-remove after 2 seconds
      setTimeout(() => {
        setPreviews((prev) => prev.filter((p) => p.id !== id));
      }, 2000);
    }
  };

  // Use the custom chat hook
  const {
    messages,
    unreadCount,
    isAdminTyping,
    sendMessage,
    markAsRead,
    sendTyping,
  } = useChat(email, { onNewMessage: handleNewMessage });

  // Initialize email from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("wiztec_chat_email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  // Handle email submission
  const handleEmailSubmit = (newEmail) => {
    setEmail(newEmail);
    localStorage.setItem("wiztec_chat_email", newEmail);
  };

  // Handle window toggle
  const toggleChat = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState && email) {
      markAsRead();
    }
  };

  return (
    <div className="relative">
      <ChatBubble 
        isOpen={isOpen} 
        onClick={toggleChat} 
        unreadCount={unreadCount} 
        previews={previews}
      />
      
      <ChatWindow 
        isOpen={isOpen}
        email={email}
        messages={messages}
        isAdminTyping={isAdminTyping}
        onSend={sendMessage}
        onTyping={sendTyping}
        onEmailSubmit={handleEmailSubmit}
      />
    </div>
  );
};

export default LiveChat;
