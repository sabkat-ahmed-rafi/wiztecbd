"use client";
import { useState } from "react";
import { FaFortAwesome, FaRegCalendarPlus } from "react-icons/fa6";
import { TbVaccineBottle } from "react-icons/tb";
import { RiMapPinRangeFill } from "react-icons/ri";
import { MdLocationOn, MdRemove, MdTypeSpecimen } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import PhoneNumberInput from "@/components/PhoneNumber";
import DatePicker from "@/components/DatePicker";
import useModal from "@/hooks/useModal";

const JobSummary = ({ location, vacancies, jobType, workingday, deadline, salary }) => {
    const { isOpen: isSuccess, openModal: openSuccess, closeModal: closeSuccess } = useModal();
    const { isOpen: isSubmit, openModal: openSubmitModal, closeModal: closeSubmitModal } = useModal();
    const { isOpen, openModal, closeModal } = useModal();

    // sweet modal
    const handleClose = () => {
        closeSubmitModal();
        closeSuccess();
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
            email: "",
            experience: "",
            educational: "",
            linkedin: "",
            github: "",
            portfolio: "",
            sections: [
                {
                    id: 1,
                    company: "",
                    post: "",
                    dateStart: null,
                    dateEnd: null,
                    currentlyWorking: false,
                },
            ],
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            number: Yup.string()
                .matches(/^[0-9]{13}$/, "Phone number must be exactly 10 digits")
                .required("Phone number is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
            experience: Yup.string().required("Experience is required"),
            educational: Yup.string().required("Educational background is required"),
            linkedin: Yup.string().url("Invalid URL format"),
            github: Yup.string().url("Invalid URL format"),
            portfolio: Yup.string().url("Invalid URL format"),
            sections: Yup.array()
                .of(
                    Yup.object({
                        company: Yup.string().required("Company is required"),
                        post: Yup.string().required("Post is required"),
                        // dateStart: Yup.date().nullable().required("Start date is required"),
                        // dateEnd: Yup.date()
                        //     .nullable()
                        //     .when("currentlyWorking", {
                        //         is: false,
                        //         then: (schema) => schema.required("End date is required").min(Yup.ref("dateStart"), "End date must be after start date"),
                        //     }),
                        currentlyWorking: Yup.boolean(),
                    })
                )
                .required("At least one section is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm();
            closeModal();
            openSubmitModal();
            setTimeout(() => {
                openSuccess();
            }, 200);
            console.log("Form Data:", values); // Includes dynamic sections
        },
    });

    // Add More Section
    const handleAddSection = () => {
        const newSection = {
            id: formik.values.sections.length + 1,
            company: "",
            post: "",
            dateStart: "",
            dateEnd: "",
            currentlyWorking: false,
        };
        formik.setFieldValue("sections", [...formik.values.sections, newSection]);
    };

    // Remove Section
    const handleRemoveSection = (id) => {
        const updatedSections = formik.values.sections.filter((section) => section.id !== id);
        formik.setFieldValue("sections", updatedSections);
    };
    return (
        <>
            <div className="md:p-8 p-4 bg-white md:sticky md:top-24 ">
                <p className=" font-bold text-subtitle1 mb-8 py-2">Job Summary</p>
                <div className=" flex flex-col md:gap-6 gap-3 mb-8">
                    {location && (
                        <div className=" flex md:gap-6 gap-4">
                            <span className="rounded-full border mb-auto border-divider p-1 ">
                                <MdLocationOn size={18} className=" text-success_main" />
                            </span>
                            <p className="text-subtitle2  font-medium">{location}</p>
                        </div>
                    )}
                    {jobType && (
                        <div className=" flex md:gap-6 gap-4">
                            <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                <MdTypeSpecimen size={18} className=" text-success_main" />
                            </span>
                            <div>
                                <p className="text-subtitle2 mb-1 font-medium">Job Type</p>
                                <p className="text-subtitle2  font-medium">{jobType}</p>
                            </div>
                        </div>
                    )}

                    {deadline && (
                        <div className=" flex md:gap-6 gap-4">
                            <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                <FaRegCalendarPlus size={18} className=" text-success_main" />
                            </span>
                            <div>
                                <p className="text-subtitle2 mb-1 font-medium">Deadline</p>
                                <p className="text-subtitle2  font-medium">{deadline}</p>
                            </div>
                        </div>
                    )}

                    {workingday && (
                        <div className=" flex md:gap-6 gap-4">
                            <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                <FaFortAwesome size={18} className=" text-success_main" />
                            </span>
                            <p className="text-subtitle2  font-medium">Weekly {workingday} Working days</p>
                        </div>
                    )}
                    <div className=" flex md:gap-6 gap-4">
                        <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                            <TbVaccineBottle size={18} className=" text-success_main" />
                        </span>
                        <div>
                            <p className="text-subtitle2 mb-1 font-medium">No. of Vacancies</p>
                            <p className="text-subtitle2  font-medium">{vacancies}</p>
                        </div>
                    </div>
                    {salary && (
                        <div className=" flex md:gap-6 gap-4">
                            <span className="rounded-full border mb-auto border-divider p-1 h-auto">
                                <RiMapPinRangeFill size={18} className=" text-success_main" />
                            </span>
                            <div>
                                <p className="text-subtitle2 mb-1 font-medium">Salary Range</p>
                                <p className="text-subtitle2  font-medium">{salary}</p>
                            </div>
                        </div>
                    )}
                </div>
                <Button onClick={openModal} size="small">
                    Apply now
                </Button>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal} width={1126} title="Submit Your Application">
                <form onSubmit={formik.handleSubmit}>
                    <div className=" grid grid-cols-2 gap-4 mb-6 md:mb-6">
                        <div className=" col-span-2 flex flex-col ">
                            <label htmlFor="name" className=" font-semibold mb-2">
                                Your name*
                            </label>
                            <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Enter your Full name" className={` focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent`} />
                            {formik.touched.name && formik.errors.name && <div className="text-subtitle2 mt-1 text-error_main">{formik.errors.name}</div>}
                        </div>
                        <div className=" md:col-span-1 col-span-2 flex flex-col ">
                            <label htmlFor="email" className=" font-semibold mb-2">
                                Email*
                            </label>
                            <input type="text" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter your email" className={` focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent`} />
                            {formik.touched.email && formik.errors.email && <div className="text-subtitle2 mt-1 text-error_main">{formik.errors.email}</div>}
                        </div>
                        <div className=" md:col-span-1 col-span-2 flex flex-col justify-between ">
                            <PhoneNumberInput name="number" label={" Mobile phone*"} value={formik.values.number} onChange={(val) => formik.setFieldValue("number", val)} inputClass={"focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-1 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent"} />
                            {formik.touched.number && formik.errors.name ? <div className=" text-subtitle2 mt-1 text-error_main">{formik.errors.number}</div> : null}
                        </div>
                        <div className=" col-span-2 flex flex-col ">
                            <label htmlFor="experience" className=" font-semibold mb-2">
                                Year Of Experience *
                            </label>
                            <input
                                type="number"
                                name="experience"
                                id="experience"
                                onChange={formik.handleChange}
                                value={formik.values.experience}
                                placeholder="Enter year of experience"
                                className={` focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent`}
                            />
                            {formik.touched.experience && formik.errors.experience && <div className="text-subtitle2 mt-1 text-error_main">{formik.errors.experience}</div>}
                        </div>
                        {/* Dynamic Sections */}
                        {formik.values.sections.map((section, index) => (
                            <div key={section.id} className={`col-span-2 ${section.id != 1 ? "flex flex-col md:flex-row gap-2 justify-between p-2 md:p-0 border md:border-none border-divider" : "grid md:grid-cols-4 grid-cols-1 p-2 md:p-0 border md:border-none border-divider md:gap-4 gap-2"}`}>
                                {/* Company Name Field */}
                                <div className="flex flex-col">
                                    <label htmlFor={`sections.${index}.company`} className="font-semibold mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id={`sections.${index}.company`}
                                        name={`sections.${index}.company`}
                                        placeholder="Enter company name"
                                        className="focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main"
                                        value={formik.values.sections[index].company}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.sections?.[index]?.company && formik.errors.sections?.[index]?.company && <div className="text-subtitle2 mt-2 text-error_main">{formik.errors.sections[index].company}</div>}
                                </div>

                                {/* Post Name Field */}
                                <div className="flex flex-col">
                                    <label htmlFor={`sections.${index}.post`} className="font-semibold mb-2">
                                        Post Name *
                                    </label>
                                    <input
                                        type="text"
                                        id={`sections.${index}.post`}
                                        name={`sections.${index}.post`}
                                        placeholder="Enter post name"
                                        className="focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main"
                                        value={formik.values.sections[index].post}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.sections?.[index]?.post && formik.errors.sections?.[index]?.post && <div className="text-subtitle2 mt-2 text-error_main">{formik.errors.sections[index].post}</div>}
                                </div>

                                <div>
                                    <DatePicker
                                        label="Start Date *"
                                        placeholder="mm/dd/yyyy"
                                        value={formik.values.sections[index].dateStart}
                                        onChange={(value) => {
                                            const updatedSections = [...formik.values.sections];
                                            updatedSections[index].dateStart = value;
                                            formik.setFieldValue("sections", updatedSections);
                                        }}
                                        inputClass="focus:ring-1 w-full custom-input !px-4 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input py-2 !bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main"
                                    />
                                    {formik.touched.sections?.[index]?.dateStart && formik.errors.sections?.[index]?.dateStart && <div className="text-subtitle2 mt-2 text-error_main">{"Start date is required"}</div>}
                                </div>
                                <div>
                                    {/* End Date */}
                                    <DatePicker
                                        label="End Date"
                                        placeholder="mm/dd/yyyy"
                                        currentWork
                                        checkId={`sections.${index}.currentlyWorking`}
                                        checkName={`sections.${index}.currentlyWorking`}
                                        isDisabled={formik.values.sections[index].currentlyWorking}
                                        onChangeCheckBox={(e) => {
                                            const updatedSections = [...formik.values.sections];
                                            updatedSections[index].currentlyWorking = e.target.checked;
                                            formik.setFieldValue("sections", updatedSections);
                                        }}
                                        checked={formik.values.sections[index].currentlyWorking}
                                        value={formik.values.sections[index].dateEnd}
                                        onChange={(value) => {
                                            const updatedSections = [...formik.values.sections];
                                            updatedSections[index].dateEnd = value;
                                            formik.setFieldValue("sections", updatedSections);
                                        }}
                                        inputClass="focus:ring-1 w-full custom-input !px-4 focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input py-2 !bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main"
                                    />
                                    {formik.errors.sections?.[index]?.dateEnd && <div className="text-subtitle2 mt-2 text-error_main">{"End date or current work requored"}</div>}
                                </div>
                                {/* Remove Button */}
                                <div className={`justify-end items-end ${section.id === 1 ? "hidden" : "flex"}`}>
                                    <button type="button" onClick={() => handleRemoveSection(section.id)} className="bg-error_main text-white text-subtitle2 capitalize p-3 gap-1 leading-4 flex items-center justify-center">
                                        <MdRemove size={16} />
                                        remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Add More Section Button */}
                        <div className=" col-span-2 flex justify-end">
                            <button type="button" onClick={handleAddSection} className="bg-primary transition-all duration-500 ease-in-out text-white capitalize md:px-6 md:py-10px px-6 py-2  hover-bg-left-to-right hover:text-primary cursor-pointer">
                                <span> Add Section</span>
                            </button>
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <label htmlFor="educational" className="font-semibold mb-2">
                                Last Educational Background *
                            </label>
                            <input
                                type="text"
                                name="educational"
                                id="educational"
                                onChange={formik.handleChange}
                                value={formik.values.educational}
                                placeholder="Enter Educational Background"
                                className={`focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent`}
                            />
                            {/* Add proper margin to the error message */}
                            {formik.touched.educational && formik.errors.educational && <div className="text-subtitle2 mt-2 text-error_main">{formik.errors.educational}</div>}
                        </div>

                        <div className=" col-span-2 flex flex-col ">
                            <label htmlFor="linkedin" className=" font-semibold mb-2">
                                Linkedin Link *
                            </label>
                            <input
                                type="text"
                                name="linkedin"
                                id="linkedin"
                                onChange={formik.handleChange}
                                value={formik.values.linkedin}
                                placeholder="Enter linkedin link"
                                className={` focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent`}
                            />
                            {formik.touched.linkedin && formik.errors.linkedin && <div className="text-subtitle2 mt-1 text-error_main">{formik.errors.linkedin}</div>}
                        </div>
                        <div className=" col-span-2 flex flex-col ">
                            <label htmlFor="github " className=" font-semibold mb-2">
                                Github Link *
                            </label>
                            <input type="text" name="github" id="github" onChange={formik.handleChange} value={formik.values.github} placeholder="Enter github link" className={` focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent`} />
                            {formik.touched.github && formik.errors.github && <div className="text-subtitle2 mt-1 text-error_main">{formik.errors.github}</div>}
                        </div>
                        <div className=" col-span-2 flex flex-col ">
                            <label htmlFor="portfolio" id="portfolio" className=" font-semibold mb-2">
                                Portfolio Link
                            </label>
                            <input type="text" name="portfolio" onChange={formik.handleChange} value={formik.values.portfolio} placeholder="Enter portfolio link" className={` focus:ring-1 focus:ring-success_main hover:ring-success_main hover:shadow-input w-full focus:shadow-input px-4 py-2 bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-transparent`} />
                            {formik.touched.portfolio && formik.errors.portfolio && <div className="text-subtitle2 mt-1 text-error_main">{formik.errors.portfolio}</div>}
                        </div>
                    </div>
                    {/* Submit Button */}
                    <Button size="small" type="submit">
                        Submit
                    </Button>
                </form>
            </Modal>
            <Modal width={500} isOpen={isSubmit} onClose={handleClose}>
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

export default JobSummary;
