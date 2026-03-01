"use client";
import { useState } from "react";
import Image from "next/image";
import { MdPhoto, MdSend } from "react-icons/md";
import { BsCamera, BsGiftFill } from "react-icons/bs";
import { HiGif } from "react-icons/hi2";
import { TbSticker } from "react-icons/tb";
import { PiSmileyStickerFill, PiStickerBold } from "react-icons/pi";
import Button from "../Button";
import { useFormik } from "formik";
import CommentCard from "../CommentCard";

const Reply = ({ handleReply, onReply, img, alt, name, id }) => {
    const formik = useFormik({
        initialValues: {
            comment: "",
        },

        onSubmit: (values, { resetForm }) => {
            const replyValue = {
                ...values,
                id: id,
            };
            handleReply(replyValue);
            onReply(false);
            resetForm();
        },
    });
    return (
        <div className=" bg-secondary_bg p-4 flex md:gap-6 gap-4">
            <div className="md:w-20 md:h-20 h-6 w-6">
                <Image src={img} alt={alt} className=" h-full w-full object-cover" width={80} height={80} />
            </div>
            <form onSubmit={formik.handleSubmit} className=" w-11/12 border rounded-xl border-divider">
                <div className=" py-2">
                    <input name="comment" type="text" placeholder={`Reply to ${name}`} onChange={formik.handleChange} value={formik.values.comment} className={`focus:ring-1 md:h-20 h-8 w-full focus:ring-transparent bg-transparent hover:ring-transparent px-4 py-2 rounded-lg focus:outline-none ring-1 ring-transparent   focus:border-transparent`} />
                </div>
                <div className=" flex items-center justify-between md:px-4 px-2 py-2 border-t-2 border-divider">
                    <div className=" flex items-center  gap-2">
                        <PiSmileyStickerFill className="  text-body1 cursor-pointer  text-gray700" />
                        <BsCamera className=" text-body1 cursor-pointer  text-gray700" />
                        <MdPhoto className=" text-body1 cursor-pointer  text-gray700" />
                        <HiGif className="  text-body1 cursor-pointer text-gray700" />
                        <TbSticker className=" text-body1 cursor-pointer  text-gray700" />
                        <PiStickerBold className=" text-body1 cursor-pointer  text-gray700" />
                    </div>
                    <button type="submit" disabled={formik.values.comment ? false : true}>
                        <MdSend className={`text-H6 ${formik.values.comment ? "text-success_main" : " text-gray700"}`} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Reply;
