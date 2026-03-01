"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { overViewData as staticOverViewData } from "@/app/staticData/home";
import GradientText from "@/components/GradientText";
import OverViewCard from "../OverViewCard";
import ImageURL from "@/components/ImageUrl";
import api from "@/config/api";

const HerroBanner = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [homeData, setHomeData] = useState(null);
    const [overViewData, setOverViewData] = useState(staticOverViewData);

    const videoId = "UeDf2noMfOk"; // Updated video ID

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const response = await api.get("/api/get-home");
                if (response.data && response.data.home) {
                    const data = response.data.home;
                    setHomeData(data);

                    // Update overview data with API values
                    const updatedOverView = staticOverViewData.map(item => {
                        if (item.label.toLowerCase().includes("client")) {
                            return { ...item, target: parseInt(data.totalClients) || item.target };
                        }
                        if (item.label.toLowerCase().includes("website")) {
                            return { ...item, target: parseInt(data.totalWebsites) || item.target };
                        }
                        if (item.label.toLowerCase().includes("erp")) {
                            return { ...item, target: parseInt(data.totalERPs) || item.target };
                        }
                        if (item.label.toLowerCase().includes("mobile")) {
                            return { ...item, target: parseInt(data.totalMobileApps) || item.target };
                        }
                        return item;
                    });
                    setOverViewData(updatedOverView);
                }
            } catch (error) {
                console.error("Error fetching home data:", error);
            }
        };
        fetchHomeData();
    }, []);

    useEffect(() => {
        // Check if it's a mobile device
        // ... (rest of the component logic for particles remains unchanged)
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Mobile breakpoint
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initialize on load

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        let raf;
        const particleground = (element, customOptions) => {
            let canvasSupport = !!document.createElement("canvas").getContext;
            if (!canvasSupport) return;

            const canvas = document.createElement("canvas");
            canvas.className = "pg-canvas";
            canvas.style.display = "block";
            element.insertBefore(canvas, element.firstChild);
            const ctx = canvas.getContext("2d");
            let particles = [];

            const extend = (out, ...args) => {
                args.forEach((obj) => {
                    for (let key in obj) {
                        if (obj.hasOwnProperty(key)) out[key] = obj[key];
                    }
                });
                return out;
            };

            const options = extend(
                {
                    dotColor: "#ff6347",
                    lineColor: "#00ff00",
                    particleRadius: 3,
                    density: 1500,
                    curvedLines: true,
                    proximity: isMobile ? 60 : 110, // Change proximity on mobile
                    parallax: true,
                    motionDirection: "random",
                    particleSpeed: 0.6,
                    lineWidth: 0.3,
                    onInit: () => { },
                },
                customOptions
            );

            const resizeCanvas = () => {
                canvas.width = isMobile ? window.innerWidth * 1.5 : window.innerWidth;
                canvas.height = isMobile ? window.innerHeight * 1.5 : window.innerHeight;
            };

            const createParticles = () => {
                const numberOfParticles = options.density / 10;
                for (let i = 0; i < numberOfParticles; i++) {
                    particles.push(createParticle());
                }
            };

            const createParticle = () => {
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: options.particleRadius,
                    density: Math.random() * options.density,
                    speedX: (Math.random() - 0.5) * options.particleSpeed,
                    speedY: (Math.random() - 0.5) * options.particleSpeed,
                };
            };

            const moveParticles = () => {
                particles.forEach((particle) => {
                    if (options.motionDirection === "random") {
                        particle.x += particle.speedX;
                        particle.y += particle.speedY;
                    } else if (options.motionDirection === "horizontal") {
                        particle.x += particle.speedX;
                    } else if (options.motionDirection === "vertical") {
                        particle.y += particle.speedY;
                    }

                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.y > canvas.height) particle.y = 0;
                    if (particle.y < 0) particle.y = canvas.height;
                });
            };

            const drawParticles = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle) => {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
                    ctx.fillStyle = options.dotColor;
                    ctx.fill();

                    if (options.curvedLines) {
                        particles.forEach((otherParticle) => {
                            const dist = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y);
                            if (dist < options.proximity) {
                                ctx.beginPath();
                                ctx.moveTo(particle.x, particle.y);
                                ctx.lineTo(otherParticle.x, otherParticle.y);
                                ctx.strokeStyle = options.lineColor;
                                ctx.lineWidth = options.lineWidth;
                                ctx.stroke();
                            }
                        });
                    }
                });
            };

            const animateParticles = () => {
                raf = requestAnimationFrame(animateParticles);
                moveParticles();
                drawParticles();
            };

            const init = () => {
                resizeCanvas();
                window.addEventListener("resize", resizeCanvas);
                createParticles();
                animateParticles();
                options.onInit();
            };

            init();
        };

        if (containerRef.current) {
            particleground(containerRef.current, {
                dotColor: "#8BC43F",
                lineColor: "#8BC43F",
                particleRadius: 3,
                density: 1500,
                curvedLines: true,
                motionDirection: "random",
                particleSpeed: 0.6,
                lineWidth: 0.3,
            });
        }

        return () => {
            if (raf) cancelAnimationFrame(raf);
        };
    }, [isMobile]); // Re-run when isMobile changes

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <>
            <div className="relative h-screen w-full overflow-hidden">
                <div ref={containerRef} style={{ width: "100%", height: "100%", position: "relative" }}></div>
                <div className="absolute left-0 top-0 right-0 flex  justify-center flex-col h-full z-0 px-4 container max-w-xl mx-auto">
                    <div className="grid grid-cols-12 w-full gap-8 ">
                        <div className=" max-w-xl md:col-span-8 col-span-12">
                            <ScrollAnimatedSection delay={0}>
                                <h1 className=" text-H1 mb-2 font-bold text-center md:text-start">
                                    <GradientText className={"text-H1 font-bold  text-center md:text-start"} text={homeData?.title || "Wizard Software & Technology"} /> {homeData ? "" : "Bangladesh Ltd."}
                                </h1>
                            </ScrollAnimatedSection>
                            <ScrollAnimatedSection delay={200}>
                                <p className="font-semibold text-subtitle1 mb-4 text-center md:text-start ">
                                    – Not Just Software, But Digital Experiences, A <GradientText className={"text-center md:text-start"} text={"Celestial Software House"} /> <br /> Where Innovation Meets Infinite Possibilities
                                </p>
                            </ScrollAnimatedSection>
                            <ScrollAnimatedSection delay={400}>
                                <p className=" text-subtitle2 text-center md:text-justify">{homeData?.description || "Unlock limitless possibilities with our comprehensive IT solutions designed to address all your digital challenges under one roof. From advanced software development to seamless system integration, we empower businesses to thrive in an ever-evolving technological landscape."}</p>
                            </ScrollAnimatedSection>

                            <div className="flex space-x-4 mt-4">
                                <div className="button group flex items-center justify-start md:h-12 h-8 w-150 md:w-12 bg-white text-success_main rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-out md:hover:w-[200px] overflow-hidden">
                                    <Link href={"/contact"} className="flex items-center space-x-2">
                                        <div className="flex items-center md:h-12 h-8 w-8 md:w-12 justify-center rounded-full transition-all duration-300 ease-out md:group-hover:bg-success_main bg-success_main md:bg-transparent">
                                            <FaAngleDoubleRight className=" text-H6  transition-all duration-300 ease-out md:group-hover:text-white text-white md:text-success_main" />
                                        </div>
                                        <span className="text-subtitle1 font-medium text-success_main ml-2 transition-all duration-300 ease-out whitespace-nowrap">Get Started</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
                            <div className="flex flex-shrink-0 relative w-full justify-center items-center md:h-223 h-150 rounded-lg overflow-hidden shadow-social">
                                <ImageURL height={300} width={450} alt="project" image="/assets/images/miniBanner/OurTeam.webp" className="w-auto max-w-full max-h-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                                <button onClick={() => setIsOpen(true)} className="play-btn absolute md:h-16 md:w-16 h-12 w-12 shadow-playBtn  bg-success_main rounded-full mx-auto my-5 block 2xl:border-4 border-white "></button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden 2xl:mt-16 mt-8 md:grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-6">
                        {overViewData.map((data) => (
                            <ScrollAnimatedSection key={data.id} delay={data.id * 200}>
                                <OverViewCard year={data.year} target={data.target} initialCount={data.initialCount} label={data.label} duration={data.duration} />
                            </ScrollAnimatedSection>
                        ))}
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className=" rel">
                    <div
                        className="fixed inset-0 bg-primary bg-opacity-50 z-50 transition-opacity"
                        onClick={() => setIsOpen(false)} // Close modal when clicking on overlay
                    ></div>

                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div
                            className="bg-white rounded-lg shadow-lg w-11/12 max-w-[900px] relative transition-transform transform scale-95 sm:scale-100"
                            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                        >
                            <div className="relative w-full h-0 pb-[56.20%]">
                                <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onError={() => setIsError(true)}></iframe>
                            </div>
                            <div onClick={() => setIsOpen(false)} className="absolute left-1/2 -top-8 transform -translate-x-1/2  z-50  text-success_main border border-success_main rounded-sm hover:cursor-pointer">
                                <IoMdClose size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HerroBanner;
