"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHourglassOutline } from "react-icons/io5";
import { MdAirlineSeatReclineNormal, MdCalendarToday, MdClass, MdTimer } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/components/Button";
import PhoneNumberInput from "@/components/PhoneNumber";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import Select from "@/components/Select";
import { isValidURL, Popup } from "../IntroDesign";

const CourseForm = ({ status = "offline", facilities, link, linkText }) => {
    const [showPopup, setShowPopup] = useState(false);
    const { isOpen: isSuccess, openModal: openSuccess, closeModal: closeSuccess } = useModal();
    const { isOpen, openModal, closeModal } = useModal();
    const [selectValue, setSelectValue] = useState("");

    // sumit modal
    const handleClose = () => {
        closeModal();
        closeSuccess();
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4, "Must be 4 characters or more").required("The field is required."),
            number: Yup.string()
                .matches(/^[0-9]{13}$/, "Phone number must be exactly 10 digits")
                .required("Phone number is required"),
            email: Yup.string().email("Invalid email address").required("The field is required."),
        }),
        onSubmit: (values, { resetForm }) => {
            openModal();
            setTimeout(() => {
                openSuccess();
            }, 200);
            resetForm();
        },
    });

    const handleClick = (e) => {
        if (!isValidURL(link)) {
            e.preventDefault();
            setShowPopup(true);
        }
    };

    return (
        <>
            {showPopup && <Popup message={link} onClose={() => setShowPopup(false)} />}
            <div className=" p-4 mb-8">
                <div className=" flex items-center justify-between mb-4">
                    <p className="  font-medium">Success Story</p>
                    <Link href={"#"} className="text-subtitle2 hover:text-success_main hover:underline">
                        see more
                    </Link>
                </div>
                <div className={` flex h-130 z-0 justify-center items-center overflow-hidden`}>
                    <Image height={130} width={370} alt="blog" src="/assets/images/download.png" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="md:p-6 p-4 bg-white w-full md:sticky md:top-24">
                <div className=" flex items-center justify-between mb-4 py-1">
                    <p className=" font-bold text-subtitle1 ">Course Summary</p>
                    <div className={`flex items-center gap-2 px-2 py-1 border ${status == "online" ? "border-success_main" : " border-divider"}`}>
                        <div className={`${status == "online" ? "bg-success_main" : " bg-divider"} h-2 w-2  rounded-full`}></div>
                        <p className=" font-medium text-subtitle2 capitalize">{status}</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-4">
                    <div className=" flex gap-12">
                        <div className=" flex flex-col gap-2">
                            <div className=" flex gap-2">
                                <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                    <IoHourglassOutline size={18} className=" text-success_main" />
                                </span>
                                <div className=" flex flex-col">
                                    <p className="text-subtitle2 mb-1 font-medium"> Hour</p>
                                    <p className=" text-body2 font-medium">{facilities.houre}</p>
                                </div>
                            </div>
                            <div className=" flex gap-2">
                                <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                    <MdClass size={18} className=" text-success_main" />
                                </span>

                                {facilities.classes && (
                                    <div className=" flex flex-col">
                                        <p className="text-subtitle2 mb-1 font-medium">Classes</p>

                                        <p className=" text-body2 font-medium">{facilities.classes}</p>
                                    </div>
                                )}
                                {facilities.class && (
                                    <div className=" flex flex-col">
                                        <p className="text-subtitle2 mb-1 font-medium">Class</p>

                                        <p className=" text-body2 font-medium">{facilities.class}</p>
                                    </div>
                                )}
                            </div>
                            <div className=" flex gap-2">
                                <span className="rounded-full border mb-auto border-divider p-1 ">
                                    <MdAirlineSeatReclineNormal size={18} className=" text-success_main" />
                                </span>
                                <div className=" flex flex-col">
                                    <p className="text-subtitle2  font-medium">Seats</p>
                                    <p className=" text-body2 font-medium">{facilities.seats}</p>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <div className=" flex gap-2">
                                <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                    <MdTimer size={18} className=" text-success_main" />
                                </span>
                                <div className=" flex flex-col">
                                    <p className="text-subtitle2 mb-1 font-medium"> Time</p>
                                    <p className=" text-body2 font-medium">{facilities.time}</p>
                                </div>
                            </div>
                            <div className=" flex gap-2">
                                <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                    <MdCalendarToday size={18} className=" text-success_main" />
                                </span>
                                <div className=" flex flex-col">
                                    <p className="text-subtitle2 mb-1 font-medium">Day</p>
                                    <p className="text-subtitle2  font-medium whitespace-normal">{facilities.day}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {link ? (
                        <Link href={isValidURL(link) ? link : "#"} onClick={handleClick} target="_blanck" className=" px-4 py-2 bg-black text-white flex items-center justify-center">
                            {linkText}
                        </Link>
                    ) : (
                        <form onSubmit={formik.handleSubmit}>
                            <div className=" flex flex-col mb-4">
                                <label htmlFor="name" className="font-semibold mb-2">
                                    Name*
                                </label>
                                <input onChange={formik.handleChange} value={formik.values.name} placeholder="Your Full name" type="text" name="name" className={`focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                                <div className={`${formik.touched.name && formik.errors.name ? "opacity-100" : "opacity-0"} text-subtitle2 mt-1 text-error_main`}>{formik.errors.name}</div>
                            </div>
                            <div className=" flex flex-col my-4">
                                <label htmlFor="email" className="font-semibold mb-2">
                                    Email*
                                </label>
                                <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Your Email Address" className={`focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main  focus:border-transparent`} />
                                <div className={`${formik.touched.email && formik.errors.email ? "opacity-100" : "opacity-0"} text-subtitle2 mt-1 text-error_main`}>{formik.errors.email}</div>
                            </div>
                            <div className=" flex flex-col my-4">
                                <label htmlFor="email" className="font-semibold mb-2">
                                    Chosen Course*
                                </label>
                                <Select options={options} multipleValu={false} value={selectValue} onChange={setSelectValue} placeholder="Select course" inputClass={"focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main  focus:border-transparent"} />
                                {/* <div className={`${formik.touched.email && formik.errors.email ? "opacity-100" : "opacity-0"} text-subtitle2 mt-1 text-error_main`}>{formik.errors.email}</div> */}
                            </div>

                            <div className="flex flex-col justify-between mb-8">
                                <PhoneNumberInput name="number" label={"Mobile phone*"} value={formik.values.number} onChange={(val) => formik.setFieldValue("number", val)} inputClass={`focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-[5px]  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
                                {formik.touched.number && formik.errors.number ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.number}</div> : null}
                            </div>
                            <div className=" mb-4 flex justify-end">
                                <Button type="submit" size="small">
                                    submit
                                </Button>
                            </div>
                            <p className=" text-subtitle2">
                                By submitting this form, you agree to our
                                <Link href="#" target="blank" className=" text-success_main underline font-bold">
                                    Privacy Policy
                                </Link>
                            </p>
                        </form>
                    )}
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

export default CourseForm;
const options = [
    { label: "Website Development", value: "Website Development" },
    { label: "Mobile Games & App Development", value: "Mobile Games & App Development" },
    { label: "Software Development", value: "Software Development" },
    { label: "E-commerce Platform", value: "E-commerce Platform" },
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "Support & Maintenance", value: "Support & Maintenance" },
    { label: "Graphics Design", value: "Graphics Design" },
    { label: "IT/Technical Training", value: "IT/Technical Training" },
    { label: "IT Consultancy", value: "IT Consultancy" },
    { label: "Other", value: "Other" },
];
