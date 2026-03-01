"use client";
import Image from "next/image";
import React, { useState } from "react";

const CommentCard = ({ img, alt, name, time, comment, onReply }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleComment = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div className=" bg-secondary_bg p-4  flex md:gap-6 gap-2 justify-between">
            <div className="md:w-20 md:h-20 h-6 w-6">
                <Image src={img} alt={alt} className=" h-full w-full object-cover" width={80} height={80} />
            </div>
            <div className=" w-11/12 ">
                <div className="mb-2">
                    <div className=" flex items-center justify-between mb-1">
                        <h5 className="text-H5 font-medium">{name}</h5>
                        <button onClick={() => onReply(true)} className="self-start px-3 py-1 text-white text-subtitle2 md:text-body1 bg-primary rounded hover:bg-gray-700 ">
                            Reply
                        </button>
                    </div>
                    <p className="text-gray600 text-body2">{time}</p>
                </div>

                <p onClick={toggleComment} className={`${isExpanded ? "line-clamp-none" : "line-clamp-2"} text-subtitle2`}>
                    {comment}
                </p>
                {comment.length > 80 && (
                    <span onClick={toggleComment} className={`hover:underline text-subtitle2 cursor-pointer`}>
                        {isExpanded ? "See less" : "Show More"}
                    </span>
                )}
            </div>
        </div>
    );
};

export default CommentCard;
