"use client";
import { useState } from "react";

import Reply from "../../components/Reply";
import CommentCard from "@/components/CommentCard";

export const AllComments = ({ userImg, alt, user, date, comment, id, reply }) => {
    return (
        <>
            <CommentCard img={userImg} alt={alt} name={user} time={date} comment={comment} id={id} />
            {reply &&
                reply.map((r) => (
                    <div key={r.id} className=" md:ml-32 ml-8 ">
                        <CommentCard
                            img={"/assets/images/recentblog.webp"}
                            alt={r.name}
                            name={r.name}
                            time={new Date(r.createdAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            }) + " AT " + new Date(r.createdAt).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                            comment={r.comment}
                            id={id}
                        />
                    </div>
                ))}
        </>
    );
};
