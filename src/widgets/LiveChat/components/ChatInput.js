"use client";
import { useState, useRef } from "react";
import { MdAttachFile } from "react-icons/md";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import Image from "next/image";

const ChatInput = ({ onSend, onTyping }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    onTyping(true);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (selectedFile.type.startsWith("image/")) {
        setFilePreview(URL.createObjectURL(selectedFile));
      } else {
        setFilePreview("doc"); // Placeholder for non-image files
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() || file) {
      onSend(text, file);
      setText("");
      removeFile();
    }
  };

  return (
    <div className="p-4 bg-white/50 backdrop-blur-sm border-t border-white/20">
      {/* File Preview Area */}
      {filePreview && (
        <div className="mb-2 relative inline-block">
          {filePreview === "doc" ? (
            <div className="bg-gray-100 p-2 rounded-lg flex items-center gap-2 border border-gray-200">
              <span className="text-xs font-medium text-gray-600 truncate max-w-[150px]">{file?.name}</span>
            </div>
          ) : (
            <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
              <Image src={filePreview} alt="upload preview" layout="fill" objectFit="cover" />
            </div>
          )}
          <button 
            onClick={removeFile}
            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow-md hover:bg-red-600"
          >
            <FaTimes className="text-[10px]" />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <div className="flex-1 relative bg-white/80 rounded-2xl border border-gray-200 focus-within:border-[#8BC43F] transition-colors overflow-hidden">
          <textarea
            rows="1"
            value={text}
            onChange={handleTextChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Type a message..."
            className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none resize-none max-h-32"
          />
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-3 text-gray-500 hover:text-[#8BC43F] transition-colors rounded-full hover:bg-white"
          >
            <MdAttachFile className="text-xl rotate-12" />
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*,application/pdf,.doc,.docx" 
            />
          </button>

          <button
            type="submit"
            disabled={!text.trim() && !file}
            className="p-3 bg-[#8BC43F] text-white rounded-full shadow-lg hover:shadow-[#8BC43F]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
