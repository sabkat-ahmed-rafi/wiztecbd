"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import ScrollAnimatedSection from "../ScrollAnimationSection";
import Button from "../Button";

const ContactButton = ({ title = "Have a project for us?", contact }) => {
    return (
        <div className="md:py-100 p-6 bg-success_light border border-divider flex  flex-col">
            <ScrollAnimatedSection>
                <h3 className="  text-H3  text-center font-bold mb-6">{title}</h3>
            </ScrollAnimatedSection>
            <div className=" flex items-center justify-center gap-4">
                {contact && (
                    <ScrollAnimatedSection delay={200}>
                        <Link href="/contact">
                            <Button>
                                Contact Us
                                <FaArrowRightLong size={19} />
                            </Button>
                        </Link>
                    </ScrollAnimatedSection>
                )}
                {!contact && (
                    <div className=" flex flex-col sm:flex-row gap-4">
                        <ScrollAnimatedSection delay={200}>
                            <Link href="https://wa.me/+8801600299169">
                                <Button>
                                    Contact Via Whatsapp
                                    <FaArrowRightLong size={19} />
                                </Button>
                            </Link>
                        </ScrollAnimatedSection>
                        <ScrollAnimatedSection delay={400}>
                            <Link href="/contact">
                                <Button>
                                    Book a Meeting
                                    <FaArrowRightLong size={19} />
                                </Button>
                            </Link>
                        </ScrollAnimatedSection>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactButton;
