"use client";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import Button from "@/components/Button";
import { AllComments } from "@/widgets/AllComments";

const CommentsSection = ({ comments, handleComments, handleReply }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            comment: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("The field is required."),
            comment: Yup.string().min(10, "Must be 10 characters or more").required("Comment is required."),
        }),
        onSubmit: (values, { resetForm }) => {
            handleComments(values);
            resetForm();
        },
    });
    return (
        <>
            <div className=" bg-paper_bg md:p-10 p-4 md:mb-10 mb-4">
                <div className=" flex items-center gap-4 mb-6">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M31.5086 0H13.5037C6.0579 0 0 6.0579 0 13.5037V24.0065C0 31.201 5.65504 37.0991 12.7535 37.49V43.7497C12.7535 44.4526 13.3266 45.0243 14.0311 45.0243C14.3679 45.0243 14.6868 44.8907 14.9276 44.6499L16.3349 43.2425C20.0305 39.5453 24.945 37.5102 30.1725 37.5102H31.5086C38.9544 37.5102 45.0123 31.4523 45.0123 24.0065V13.5037C45.0123 6.0579 38.9544 0 31.5086 0ZM12.7535 21.7559C11.0985 21.7559 9.75266 20.4101 9.75266 18.7551C9.75266 17.1002 11.0985 15.7543 12.7535 15.7543C14.4084 15.7543 15.7543 17.1002 15.7543 18.7551C15.7543 20.4101 14.4077 21.7559 12.7535 21.7559ZM22.5061 21.7559C20.8512 21.7559 19.5053 20.4101 19.5053 18.7551C19.5053 17.1002 20.8512 15.7543 22.5061 15.7543C24.1611 15.7543 25.5069 17.1002 25.5069 18.7551C25.5069 20.4101 24.1603 21.7559 22.5061 21.7559ZM32.2588 21.7559C30.6038 21.7559 29.258 20.4101 29.258 18.7551C29.258 17.1002 30.6038 15.7543 32.2588 15.7543C33.9137 15.7543 35.2596 17.1002 35.2596 18.7551C35.2596 20.4101 33.913 21.7559 32.2588 21.7559Z"
                            fill="url(#paint0_linear_162_2956)"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_162_2956" x1="3" y1="5.5" x2="56.5" y2="61" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#97D445" />
                                <stop offset="1" stopColor="#69A805" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h5 className=" text-H5 font-semibold">Comments (03)</h5>
                </div>

                <div className=" flex flex-col gap-6 md:12">
                    {comments &&
                        comments.map(({ id, name, img, alt, time, comment, reply }, index) => (
                            <div key={id} className=" gap-4 flex flex-col">
                                <AllComments id={index} userImg={img} alt={alt} user={name} date={time} comment={comment} handleReply={handleReply} reply={reply} />
                            </div>
                        ))}
                </div>
            </div>
            <div className=" bg-paper_bg md:p-10 p-4">
                <div className=" flex items-center gap-4 mb-9">
                    <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M43.0425 11.3418L32.955 1.25437C32.1227 0.42204 31.2784 0 30.4458 0C29.3026 0 27.9677 0.869495 27.9677 3.3201V6.7543C20.6389 7.07373 13.7948 10.0794 8.57467 15.2992C3.04576 20.8278 0.00052222 28.1785 0 35.9973C0 36.559 0.359287 37.0579 0.892125 37.2357C1.02816 37.2811 1.16742 37.3029 1.30538 37.3029C1.70809 37.3029 2.09793 37.1161 2.34929 36.7815C8.51314 28.5769 17.793 23.7282 27.9677 23.3454V26.7268C27.9677 29.1772 29.3026 30.0469 30.4458 30.0469H30.446C31.2785 30.0469 32.1228 29.6248 32.955 28.7926L43.0424 18.705C44.0229 17.7248 44.5627 16.4174 44.5627 15.0234C44.5627 13.6297 44.0229 12.3221 43.0425 11.3418Z"
                            fill="url(#paint0_linear_162_3021)"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_162_3021" x1="41.7959" y1="0.617674" x2="-2.88248" y2="42.8254" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#97D446" />
                                <stop offset="1" stopColor="#69A805" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h5 className=" text-H5 font-semibold">Leave A Comment</h5>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className=" flex items-start gap-4">
                        <div className=" flex flex-col my-4 w-1/2">
                            <label htmlFor="name" className="font-semibold mb-2">
                                Name*
                            </label>
                            <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} className={`focus:ring-1 focus:ring-success_main  hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                        </div>
                        <div className=" flex flex-col my-4 w-1/2">
                            <label htmlFor="name" className="font-semibold mb-2">
                                Email*
                            </label>

                            <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className={`focus:ring-1 focus:ring-success_main  hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                            {formik.touched.email && formik.errors.email ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.email}</div> : null}
                        </div>
                    </div>
                    <div className=" flex flex-col my-4">
                        <label htmlFor="comment" className="font-semibold mb-2">
                            Message*
                        </label>
                        <textarea name="comment" type="text" onChange={formik.handleChange} value={formik.values.comment} className={`focus:ring-1 h-100 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                        {formik.touched.comment && formik.errors.comment ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.comment}</div> : null}
                    </div>
                    <div className=" flex justify-end">
                        <Button type="submit">Send</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CommentsSection;
