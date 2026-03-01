"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MiddleBlog = dynamic(() => import("@/widgets/MiddleBlog"), {
    ssr: false,
});
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import DetailsContactForm from "@/widgets/DetailsContactForm";
import { RootSection, Section } from "@/components/Section";
import { DetailsFilter } from "@/utilities/detailsFilter";
import CommentsSection from "@/widgets/CommentsSection";
import HyperlinkTable from "@/widgets/HyperlinkTable";
import BlogBanner from "@/widgets/blogBanner";
import blogs from "/public/Json/blogs.json";
import Blog from "@/widgets/blog";

const BlogDetails = ({ params }) => {
    const blogDetails = DetailsFilter(blogs, params.id);

    if (!blogDetails) {
        return <p>Blog not found!</p>;
    }

    const handleComments = (comments) => {
        const modifcomm = {
            id: blogDetails.comments.length + 1,
            name: comments.name,
            img: "/assets/images/recentblog.webp",
            alt: "user",
            time: "September 15, 2022 AT 07:12 PM",
            comment: comments.comment,
            reply: [],
        };
        blogDetails.comments.push(modifcomm);
    };

    const handleReply = (reply) => {
        const modifcomm = {
            id: reply.id + 1,
            name: "user name",
            img: "/assets/images/recentblog.webp",
            alt: "user",
            time: "September 15, 2022 AT 07:12 PM",
            comment: reply.comment,
        };
        blogDetails.comments[reply.id].reply.push(modifcomm);
    };

    return (
        <RootSection>
            <Section id="blogbanner">
                <div className="container mx-auto px-4 max-w-2xl w-full">
                    <BlogBanner title={blogDetails.title} expertist={blogDetails.expertist} img={blogDetails.img} alt={blogDetails.alt} catagory={blogDetails.catagory} publish={blogDetails.publish} />
                </div>
            </Section>
            <Section id="allDetails" bgColor="bg-white">
                <div className="flex container flex-col md:flex-row mx-auto px-4 max-w-2xl md:py-100 py-12 w-full gap-6">
                    <div className="md:w-1/4 w-full h-full md:sticky md:top-28">
                        <HyperlinkTable richText={blogDetails.richText} />
                    </div>

                    <div className="md:w-1/2 w-full ">
                        <MiddleBlog richText={blogDetails.richText} />
                    </div>
                    <div className="md:w-1/4 w-full h-full md:sticky md:top-8 hidden md:inline">
                        <DetailsContactForm tags={blogDetails.tags} />
                    </div>
                </div>
            </Section>
            <Section id="comments" bgColor="bg-secondary_bg">
                <div className="container mx-auto md:px-4 max-w-xl w-full md:py-100 py-12">
                    <CommentsSection handleComments={handleComments} handleReply={handleReply} comments={blogDetails.comments} />
                </div>
            </Section>
            <Section id="articals">
                <div className="container mx-auto px-4 max-w-xl md:py-0 py-12 w-full">
                    <ScrollAnimatedSection>
                        <h2 className="text-H2  md:text-start font-bold mb-6 text-center">Related Articles</h2>
                    </ScrollAnimatedSection>
                    <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
                        {blogs.map((card) => (
                            <Link href={`/blog/${card.id}`} key={card.id}>
                                <Blog img={card.img} artical={card.artical} date={card.date} title={card.title} />
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
            <Section id="topics" bgColor="bg-white">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12 w-full">
                    <ScrollAnimatedSection>
                        <h2 className="text-H2 font-bold mb-6 text-center">Explore More Topics</h2>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={100}>
                        <p className="text-secondary md:mb-12 mb-6 text-center">Ready to brush up on something new? We have got more to read right this way.</p>
                    </ScrollAnimatedSection>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {blogDetails.topic.map((topi) => (
                            <Link key={topi.id} href={topi.url} className="px-30px py-5 bg-secondary_bg hover:bg-left-to-right hover:scale-105 transition-transform duration-300">
                                <p className=" font-medium hover-content">{topi.text}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </RootSection>
    );
};

export default BlogDetails;
