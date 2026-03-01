"use client";
import { useState } from "react";
import Link from "next/link";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import blogs from "/public/Json/blogs.json";
import Button from "@/components/Button";
import Blog from "../blog";

const Blogs = () => {
    const [visibleItems, setVisibleItems] = useState(6);

    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 6);
    };
    return (
        <div className="md:py-100 py-12">
            <ScrollAnimatedSection>
                <h1 className="text-H1  text-center md:text-start font-bold mb-4">Our Recent Articals</h1>
                <p className=" text-secondary md:mb-6 mb-4  text-center md:text-start">Stay informed with Our Ineight</p>
            </ScrollAnimatedSection>
            <div className=" grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-12">
                {blogs.slice(0, visibleItems).map((card) => (
                    <Link href={`/blog/${card.id}`} key={card.id}>
                        <Blog img={card.img} artical={card.artical} date={card.date} title={card.title} />
                    </Link>
                ))}
            </div>
            <div className=" flex justify-end">{visibleItems < blogs.length && <Button onClick={loadMoreItems}>Load More</Button>}</div>
        </div>
    );
};

export default Blogs;
