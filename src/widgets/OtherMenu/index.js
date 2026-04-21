import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import Button from "@/components/Button";
import Menu from "@/components/Menu";
import useModal from "@/hooks/useModal";

const OtherMenu = ({ onMouseEnter, onMouseLeave, onClose, courses = [], careers = [], coursesLoading, careersLoading }) => {
    const coursesList = courses.length > 4 ? courses.slice(0, 4) : courses;
    const job_posts = careers.length > 4 ? careers.slice(0, 4) : careers;

    return (
        <Menu onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className=" container mx-auto px-4 max-w-xl">
                {/* Main Services Section */}
                <div className=" grid grid-cols-3 gap-12">
                    <div className="py-8 flex flex-col justify-between">
                        <div>
                            <p className="text-subtitle1 font-semibold capitalize mb-6">Career</p>
                            {careersLoading ? (
                                <div className="space-y-4 mb-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-4 bg-gray-100 rounded w-full animate-pulse" />
                                    ))}
                                </div>
                            ) : careers.length > 0 ? (
                                <ul className=" mb-4">
                                    {job_posts.map((post) => (
                                        <li key={post.id}>
                                            <Link onClick={onClose} href={`/career/${post.id}`} className=" font-medium flex items-center justify-between mb-1 capitalize hover:text-success_main">
                                                <span className=" line-clamp-1">{post.title}</span>
                                                <span>
                                                    <BsArrowRight />
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className=" mb-4">Be Part of a Team That Builds Tomorrow. Join a Culture That Values Innovation, Teamwork, and Success</p>
                            )}
                        </div>
                        <Link onClick={onClose} href="/career">
                            <Button size="small">
                                see all
                                <BsArrowRight />
                            </Button>
                        </Link>
                    </div>
                    <div className=" py-8 flex flex-col justify-between ">
                        <div>
                            <p className="text-subtitle1 font-semibold capitalize mb-6">Our courses</p>
                            {coursesLoading ? (
                                <div className="space-y-4 mb-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-4 bg-gray-100 rounded w-full animate-pulse" />
                                    ))}
                                </div>
                            ) : coursesList.length > 0 ? (
                                <ul className=" mb-4">
                                    {coursesList.map((course) => (
                                        <li key={course.id}>
                                            <Link onClick={onClose} href={`/courses/${course.id}`} className=" font-medium flex items-center justify-between mb-1 capitalize hover:text-success_main">
                                                <span className="line-clamp-1">{course.title}</span>
                                                <BsArrowRight />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className=" mb-4">We&apos;re preparing exciting new courses! Stay tuned for updates.</p>
                            )}
                        </div>
                        <Link onClick={onClose} href="/courses">
                            <Button size="small">
                                see all
                                <BsArrowRight />
                            </Button>
                        </Link>
                    </div>
                    <div className=" bg-white py-8 flex flex-col justify-between">
                        <div>
                            <p className="text-subtitle1 font-semibold capitalize mb-6">Hire developers</p>
                            <p className=" mb-4 text-body1">Hiring developers involves sourcing talent, assessing skills, ensuring cultural fit, and onboarding effectively to build a strong, productive tech team.</p>
                        </div>
                        <Link onClick={onClose} href="/developers">
                            <Button size="small">
                                see all
                                <BsArrowRight />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Menu>
    );
};

export default OtherMenu;
