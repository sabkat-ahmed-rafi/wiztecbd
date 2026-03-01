"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdAttachFile } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaBold, FaItalic, FaStrikethrough, FaListUl, FaPaperPlane, FaComment, FaEdit, FaChevronDown, FaEllipsisV } from "react-icons/fa";

import ImageURL from "@/components/ImageUrl";
import useModal from "@/hooks/useModal";

const LiveChat = () => {
    const [enter, setEnter] = useState(false);
    const [anchorElAvat, setAnchorElAvat] = useState(null);
    const [images, setImages] = useState([]);
    const [inputData, setInputData] = useState("");
    const chatContainerRef = useRef(null);
    const [email, setEmail] = useState("");
    const [chatData, setChatData] = useState([
        { id: 1, name: "author", msg: "Welcome to our software house!" },
        { id: 2, name: "author", msg: "How can we help you?" },
    ]);
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        const showPopupTimeout = setTimeout(() => {
            openModal(true);
        }, 8000);

        return () => clearTimeout(showPopupTimeout);
    }, []);

    // Remove a selected image from the preview
    const handleImageRemove = (index) => {
        const updatedImages = images.filter((_, idx) => idx !== index);
        setImages(updatedImages);
    };

    // Handle scroll to bottom for new chat data and initial load
    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            // Ensure scrolling to bottom when the component loads and when chatData changes
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [chatData]); // Dependency on chatData so it triggers every time the data changes

    const handleOpenNavAvatar = (event) => {
        setAnchorElAvat(event.currentTarget);
        closeModal();
    };

    const handleCloseNavAvatar = () => {
        setAnchorElAvat(null);
    };

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputData.trim() !== "" || images.length > 0) {
            const newId = chatData.length + 1;
            setChatData((prevChatData) => [...prevChatData, { id: newId, name: "user", msg: inputData, images }]);
            setInputData("");
            setImages([]);
        }
    };

    // Prevent form submission during image selection
    const handleImageChange = (e) => {
        e.preventDefault();
        const files = e.target.files;

        if (files && files.length > 0) {
            const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
            setImages((prevImages) => [...prevImages, ...fileArray]);
        }
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const icon = !enter ? <FaMessage className=" text-white" /> : <FaEdit className=" text-white" />;

    return (
        <div className="relative">
            <div className={`${anchorElAvat && " hidden"} flex cursor-pointer items-center gap-2 mr-4 md:mr-10`} onClick={handleOpenNavAvatar}>
                {isOpen && (
                    <div className=" rounded-full bg-white px-6 py-1.5 shadow-2xl shadow-playBtn">
                        <p className=" text-subtitle2 font-semibold">How can we help you?</p>
                    </div>
                )}
                <button onMouseEnter={() => setEnter((prev) => !prev)} onMouseLeave={() => setEnter((prev) => !prev)} className="rounded-full relative bg-success_main md:p-4 p-2 shadow-2xl">
                    {icon}
                    <span className=" p-1 rounded-full bg-warning_main text-white absolute h-4 -top-px -right-px w-4 flex items-center justify-center text-xxs">{chatData.length}</span>
                </button>
            </div>

            {anchorElAvat && (
                <>
                    <div className="fixed inset-0 z-30 bg-transparent" onClick={handleCloseNavAvatar} />
                    <div className="fixed bottom-0 right-0 z-40  sm:w-96 w-full rounded-lg bg-white backdrop-blur-md shadow-playBtn">
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <h6 className=" text-H6 font-semibold">Good to see you! 👋</h6>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <FaEllipsisV className="h-4 w-4" />
                                    <FaChevronDown className="h-5 w-5" onClick={handleCloseNavAvatar} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between gap-4">
                                <div>
                                    <p className=" text-body2 text-secondary">Explore our company.</p>
                                    <p className=" text-body2 text-secondary">Feel free to ask any questions. 🎉</p>
                                </div>
                                <Image height={40} width={40} src={"/assets/icons/questions.svg"} alt="Avatar" className="h-10 w-10" />
                            </div>
                            <p className="mt-2 text-subtitle2 mb-2">We respond promptly.</p>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => handleEmail(e)}
                                placeholder="Enter your email"
                                autoFocus={!email}
                                className=" focus:outline-none px-2 text-body2 py-1.5 rounded-lg w-full focus:ring-1 focus:border-[#8BC43F] border border-transparent focus:border focus:ring-success_main appearance-none input-no-arrows focus:ring-transparent hover:ring-transparent bg-secondary_bg ring-1 ring-success_main focus:border-transparent"
                            />
                        </div>
                        <div className="rounded-lg bg-secondary_bg p-4">
                            <div
                                ref={chatContainerRef}
                                className="px-1 pt-3 pb-1 no-scrollbar"
                                style={{
                                    height: "230px",
                                    overflowY: "scroll",
                                    scrollBehavior: "smooth",
                                    scrollbarWidth: 2,
                                }}
                            >
                                {chatData.map((data) => (
                                    <div key={data.id} className={`my-2 flex flex-col ${data.name === "author" ? "items-start" : "items-end"}`}>
                                        {data.images && data.images.length > 0 && (
                                            <div className="flex space-x-1 mb-1">
                                                {data.images.slice(0, 3).map((image, idx) => (
                                                    <div key={idx} className="flex items-center gap-1">
                                                        <div className={`relative w-20 bg-black/20 flex items-center justify-center rounded-md ${data.images.length === 1 ? " h-32" : " h-20"}`}>
                                                            <ImageURL image={image} alt="uploaded" height={40} width={40} />
                                                            {idx === 2 && data.images.length > 3 && (
                                                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                                    <span className="text-white text-body2 font-semibold">More</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {data.msg && (
                                            <div className={`rounded-lg px-2 py-1 ${data.name === "author" ? "bg-white/40" : "bg-success_main text-white"}`}>
                                                <p className="text-xs">{data.msg}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={handleFormSubmit} className="mt-4 rounded-lg border-2 border-divider">
                                {/* Display selected images */}
                                {images.length > 0 && (
                                    <div className="flex space-x-2 p-2">
                                        {images.map((image, idx) => (
                                            <div key={idx} className="relative">
                                                <Image src={image} alt="selected" height={48} width={48} className="w-12 h-12 object-cover rounded-md" />
                                                <button
                                                    onClick={() => handleImageRemove(idx)}
                                                    className="absolute -top-1 -right-1 bg-gray700 text-white text-xxs h-4 w-4 rounded-full" // Red color for delete button
                                                >
                                                    X
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <textarea className="w-full resize-none rounded-lg bg-transparent p-2 text-sm focus:outline-none" placeholder="Type something here…" value={inputData} onChange={handleInputChange} />
                                <div className="flex items-center justify-between border-t-2 border-divider p-2">
                                    <div className="flex gap-1 text-secondary cursor-pointer">
                                        <button type="button" className="p-1">
                                            <label htmlFor="file-upload" className="px-2 cursor-pointer  z-50">
                                                <span className=" relative">
                                                    <MdAttachFile className="h-4 w-4 -left-1 top-0.5 rotate-12 absolute " />
                                                </span>
                                            </label>
                                            <input type="file" id="file-upload" onChange={handleImageChange} accept="image/*" className="hidden" />
                                        </button>
                                        <button className="p-1">
                                            <FaBold className="h-4 w-4" />
                                        </button>
                                        <button className="p-1">
                                            <FaItalic className="h-4 w-4" />
                                        </button>
                                        <button className="p-1">
                                            <FaStrikethrough className="h-4 w-4" />
                                        </button>
                                        <button className="p-1">
                                            <FaListUl className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <button disabled={!email} type="submit" className="flex items-center gap-1 rounded-lg bg-success_main disabled:bg-gray600 px-2 py-1 text-xs text-white">
                                        Send <FaPaperPlane className="h-4 w-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LiveChat;
