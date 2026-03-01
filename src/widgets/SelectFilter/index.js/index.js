"use client";
import React from "react";

import { Formik, Form, Field } from "formik";

import { allIndustries, allServices, allTechnologies } from "@/app/staticData/portfolio";
import Button from "@/components/Button";
import Select from "@/components/Select";

const SelectFilter = () => {
    return (
        <div>
            <Formik
                initialValues={{ service: "", technology: "", industry: "" }}
                onSubmit={(values) => {
                    console.log("Form values:", values);
                }}
            >
                {({ setFieldValue }) => (
                    <Form className="flex flex-col md:flex-row  justify-between md:items-end gap-4 md:gap-0">
                        {/* Service Field */}
                        <Field name="service">
                            {({ field }) => (
                                <Select
                                    value={field.value}
                                    multipleValu={false}
                                    placeholder={"service"}
                                    onChange={(value) => setFieldValue("service", value)}
                                    options={allServices}
                                    inputClass={"focus:ring-1 w-full md:w-56  lg:w-72 focus:ring-transparent hover:transparent hover:shadow-none focus:shadow-input px-4 h-9 flex items-center bg-transparent focus:outline-none ring-1 ring-transparent border-b focus:border-transparent"}
                                />
                            )}
                        </Field>

                        {/* Technology Field */}
                        <Field name="technology">
                            {({ field }) => (
                                <Select
                                    value={field.value}
                                    multipleValu={false}
                                    placeholder={"technology"}
                                    onChange={(value) => setFieldValue("technology", value)}
                                    options={allTechnologies}
                                    inputClass={"focus:ring-1 w-full md:w-56  lg:w-72 focus:ring-transparent hover:transparent hover:shadow-none focus:shadow-input px-4 h-9 flex items-center bg-transparent focus:outline-none ring-1 ring-transparent border-b focus:border-transparent"}
                                />
                            )}
                        </Field>

                        {/* Industry Field */}
                        <Field name="industry">
                            {({ field }) => (
                                <Select
                                    value={field.value}
                                    multipleValu={false}
                                    placeholder={"industry"}
                                    onChange={(value) => setFieldValue("industry", value)}
                                    options={allIndustries}
                                    inputClass={"focus:ring-1 w-full md:w-56  lg:w-72 focus:ring-transparent hover:transparent hover:shadow-none focus:shadow-input px-4 h-9 flex items-center bg-transparent focus:outline-none ring-1 ring-transparent border-b focus:border-transparent"}
                                />
                            )}
                        </Field>

                        <Button size="small" type="submite">
                            Apply
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SelectFilter;
