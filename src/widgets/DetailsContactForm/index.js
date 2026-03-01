"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";

const DetailsContactForm = ({ tags }) => {
    const { isOpen: isSuccess, openModal: openSuccess, closeModal: closeSuccess } = useModal();
    const { isOpen, openModal, closeModal } = useModal();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            descrition: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4, "Must be 4 characters or more").required("The field is required."),
            email: Yup.string().email("Invalid email address").required("The field is required."),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            openModal();
            setTimeout(() => {
                openSuccess();
            }, 200);
            resetForm();
        },
    });

    const handleClose = () => {
        closeModal();
        closeSuccess();
    };
    return (
        <>
            <div className={` p-5 bg-secondary_bg`}>
                <h5 className="text-H5 font-bold py-4">Build Software Application to 3X Your Biz Growth</h5>
                <form onSubmit={formik.handleSubmit} className="mt-4">
                    <div className=" flex flex-col my-4">
                        <label htmlFor="name" className="font-semibold mb-2">
                            Name*
                        </label>
                        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} className={`focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                        <div className={`${formik.touched.name && formik.errors.name ? "opacity-100" : "opacity-0"} text-subtitle2 mt-1 text-error_main`}>{formik.errors.name}</div>
                    </div>
                    <div className=" flex flex-col my-4">
                        <label htmlFor="name" className="font-semibold mb-2">
                            Email*
                        </label>
                        <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className={`focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                        <div className={`${formik.touched.email && formik.errors.email ? "opacity-100" : "opacity-0"} text-subtitle2 mt-1 text-error_main`}>{formik.errors.email}</div>
                    </div>
                    <div className=" flex flex-col my-4">
                        <label htmlFor="name" className="font-semibold mb-2">
                            Message
                        </label>
                        <textarea name="descrition" type="text" onChange={formik.handleChange} value={formik.values.descrition} className={`focus:ring-1 h-100 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                    </div>
                    <div className=" mb-4 flex justify-end">
                        <Button size="small" type="submit">
                            send
                        </Button>
                    </div>
                    <p className=" text-subtitle2">
                        By submitting this form, you agree to our
                        <Link href="#" target="blank" className=" text-success_main underline font-bold">
                            Privacy Policy
                        </Link>
                    </p>
                </form>
            </div>

            <div className=" p-5 bg-secondary_bg mt-8">
                <h5 className="text-H5 font-bold py-4">Popular Tags</h5>
                <div className=" flex flex-wrap gap-4">
                    {tags.map((tag, index) => (
                        <Link key={index} href="#" className="px-4 py-2 bg-success_light">
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
            <Modal width={500} isOpen={isOpen} onClose={handleClose}>
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50" className="mx-auto">
                        <circle cx="50" cy="50" r="45" className={`circle ${isSuccess ? "filled" : ""}`} stroke={isSuccess ? "#8BC43F" : "transparent"}></circle>
                        <path d="M 30 50 L 45 65 L 70 35" className={`checkmark ${isSuccess ? "show" : ""}`} stroke={isSuccess ? "#8BC43F" : "transparent"} fill="none" strokeWidth="5" strokeLinecap="round"></path>
                    </svg>
                    <div className="my-4 space-y-4">
                        <h5 className="  text-H5 font-semibold text-center">Successfully Submitted</h5>
                        <p className="text-center text-subtitle2">Your requirement has been submitted successfully. Thank you for considering WiztecBD with service.</p>
                        <p className="text-center text-subtitle2 font-semibold">We will email you a quotation.</p>
                    </div>
                    <div className=" flex items-center justify-center">
                        <Button size="small" onClick={handleClose}>
                            Ok !
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DetailsContactForm;
