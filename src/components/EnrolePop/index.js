"use client";
import { useState } from "react";
import Link from "next/link";
import { MdAirlineSeatReclineNormal, MdClass, MdTimer } from "react-icons/md";
import { IoHourglassOutline } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";

import PhoneNumberInput from "../PhoneNumber";
import Button from "../Button";
import Modal from "../Modal";
import Select from "../Select";

//enroll pop

const EnrollPop = ({ modalData, title, isOpen, onClose }) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectValue, setSelectValue] = useState("");
    // sumit modal
    const handleClose = () => {
        setIsSubmit(false);
        setIsSuccess(false);
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
            setIsSubmit(true);
            onClose();
            setTimeout(() => {
                setIsSuccess(true);
            }, 200);
            console.log("Form Values:", values); // Logging values to the console
            resetForm();
        },
    });
    return (
        <>
            <Modal width={650} isOpen={isOpen} onClose={onClose} title={title}>
                <div className="md:p-6 p-4 bg-white text-black w-full md:sticky md:top-8">
                    <div className=" mb-4 py-2 flex justify-between items-center">
                        <p className=" font-bold text-subtitle1">Details</p>
                        <div className={`flex items-center gap-2 px-2 py-1 border ${modalData.status == "online" ? "border-success_main" : " border-divider"}`}>
                            <div className={`${modalData.status == "online" ? "bg-success_main" : " bg-divider"} h-2 w-2  rounded-full`}></div>
                            <p className=" font-medium text-subtitle2 capitalize">{modalData.status}</p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <div className=" flex flex-col gap-8">
                            <div className=" flex gap-12">
                                <div className=" flex gap-2">
                                    <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                        <IoHourglassOutline size={18} className=" text-success_main" />
                                    </span>
                                    <div className=" flex flex-col">
                                        <p className="text-subtitle2 mb-1 font-medium"> Hour</p>
                                        <p className="text-subtitle2  font-medium">{modalData.houre}</p>
                                    </div>
                                </div>
                                <div className=" flex gap-2">
                                    <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                        <MdClass size={18} className=" text-success_main" />
                                    </span>
                                    <div className=" flex flex-col">
                                        <p className="text-subtitle2 mb-1 font-medium">Classes</p>
                                        <p className="text-subtitle2  font-medium">{modalData.classes}</p>
                                    </div>
                                </div>
                                <div className=" flex gap-2">
                                    <span className="rounded-full border mb-auto border-divider p-1 ">
                                        <MdAirlineSeatReclineNormal size={18} className=" text-success_main" />
                                    </span>
                                    <div className=" flex flex-col">
                                        <p className="text-subtitle2  font-medium">Seats</p>
                                        <p className="text-subtitle2  font-medium">{modalData.seats}</p>
                                    </div>
                                </div>
                                <div className=" flex gap-2">
                                    <span className="rounded-full border mb-auto border-divider p-1 ">
                                        <MdTimer size={18} className=" text-success_main" />
                                    </span>
                                    <div className=" flex flex-col">
                                        <p className="text-subtitle2  font-medium">Time</p>
                                        <p className="text-subtitle2  font-medium">{modalData.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Your Email Address" className={`focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-2  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent`} />
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
                                <PhoneNumberInput
                                    name="number"
                                    label={" Mobile phone*"}
                                    value={formik.values.number}
                                    onChange={(number) => formik.setFieldValue("number", number)}
                                    inputClass={"focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 h-10 flex items-center justify-center  bg-white rounded-lg focus:outline-none ring-1 ring-success_main   focus:border-transparent"}
                                />
                                {formik.touched.number && formik.errors.number ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.number}</div> : null}
                            </div>
                            <div className=" mb-4 flex">
                                <Button size="small" type="submit">
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
                    </div>
                </div>
            </Modal>
            <Modal width={500} isOpen={isSubmit} onClose={handleClose}>
                <div className=" text-black">
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

export default EnrollPop;
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
