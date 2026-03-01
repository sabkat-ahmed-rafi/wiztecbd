"use client";
import { useState } from "react";

import Reply from "../../components/Reply";
import CommentCard from "@/components/CommentCard";

export const AllComments = ({ userImg, alt, user, date, comment, handleReply, id, reply }) => {
    const [isReply, setIsReply] = useState(false);

    return (
        <>
            <CommentCard img={userImg} alt={alt} name={user} time={date} onReply={setIsReply} comment={comment} id={id} />
            {reply &&
                reply.map(({ img, alt, name, comment, id }, index) => (
                    <div key={id} className=" md:ml-32 ml-8 ">
                        <CommentCard img={img} alt={alt} name={name} time={date} onReply={setIsReply} comment={comment} id={id} />
                    </div>
                ))}
            {isReply && (
                <div className=" md:ml-32 ml-8 ">
                    <Reply handleReply={handleReply} onReply={setIsReply} name={user} img={userImg} alt={alt} id={id} />
                </div>
            )}
        </>
    );
};
