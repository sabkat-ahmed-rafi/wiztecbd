"use client";
import React, { useEffect, useState } from "react";
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
import api from "@/config/api";

const BlogDetails = ({ params }) => {
    const [blogDetails, setBlogDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await api.get("/api/get-blogs");
                if (response.data && response.data.blogs) {
                    const found = response.data.blogs.find((b) => b.id == params.id);
                    if (found) {
                        // Split content by h1, h2, or h3 tags
                        // Using a more robust regex that keeps the tag in the split parts
                        const parts = found.content ? found.content.split(/(?=<h[1-3][^>]*>)/gi) : [];

                        // If the first part doesn't start with a header tag, it's intro text
                        // We'll still give it an ID but it might not show in TOC if HyperlinkTable filters for headers
                        const richText = parts.map((part, index) => ({
                            id: (index + 1).toString(),
                            content: part,
                        })).filter(item => item.content.trim() !== "");

                        setBlogDetails({
                            id: found.id,
                            title: found.title,
                            img: found.image,
                            alt: found.title,
                            catagory: found.expertises?.[0]?.name || "Software Development",
                            publish: new Date(found.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            }),
                            expertist: found.expertises?.map((e) => e.name) || [],
                            richText: richText,
                            tags: found.expertises?.map((e) => e.name) || [],
                            comments: [], // Dynamic comments can be added here if available in API
                            topic: [
                                { id: 1, text: "Software Development", url: "/services/custom-software-development" },
                                { id: 2, text: "Website Development", url: "/services/website-development" },
                                { id: 3, text: "Mobile Games & App Development", url: "/services/mobile-app-development" },
                                { id: 4, text: "Custom Software Development", url: "/services/custom-software-development" },
                                { id: 5, text: "ERP Software Development", url: "/services/erp-software-development" },
                                { id: 6, text: "E-commerce Solution", url: "/services/ecommerce-platform" },
                            ],
                        });
                    } else {
                        // Fallback to static data if not found in API
                        const staticBlog = DetailsFilter(blogs, params.id);
                        setBlogDetails(staticBlog);
                    }
                } else {
                    const staticBlog = DetailsFilter(blogs, params.id);
                    setBlogDetails(staticBlog);
                }
            } catch (error) {
                console.error("Error fetching blog details:", error);
                const staticBlog = DetailsFilter(blogs, params.id);
                setBlogDetails(staticBlog);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogDetails();
    }, [params.id]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!blogDetails) {
        return <p>Blog not found!</p>;
    }

    const handleComments = (comments) => {
        const modifcomm = {
            id: blogDetails.comments.length + 1,
            name: comments.name,
            img: "/assets/images/recentblog.webp",
            alt: "user",
            time: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }) + " AT " + new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }),
            comment: comments.comment,
            reply: [],
        };
        setBlogDetails(prev => ({
            ...prev,
            comments: [...prev.comments, modifcomm]
        }));
    };

    const handleReply = (reply) => {
        const modifcomm = {
            id: Date.now(),
            name: "User",
            img: "/assets/images/recentblog.webp",
            alt: "user",
            time: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            }) + " AT " + new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            }),
            comment: reply.comment,
        };

        const updatedComments = [...blogDetails.comments];
        const commentIndex = updatedComments.findIndex(c => c.id === reply.id);
        if (commentIndex !== -1) {
            updatedComments[commentIndex].reply.push(modifcomm);
            setBlogDetails(prev => ({
                ...prev,
                comments: updatedComments
            }));
        }
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
                        {blogs.slice(0, 3).map((card) => (
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
