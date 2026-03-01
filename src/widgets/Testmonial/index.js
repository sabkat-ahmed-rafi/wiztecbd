import React from "react";
import Image from "next/image";
import ImageURL from "@/components/ImageUrl";

const Testmonial = ({ coment, rating = 5, name, degenation, img, platform }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const stars = [];

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={`full-${i}`} className="w-4 h-4 mr-0.5 text-success_main stroke-gray700 stroke-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
        }

        // Half star, if applicable
        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-4 h-4 mr-0.5 text-success_main stroke-gray700 stroke-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <defs>
                        <linearGradient id="halfStarGradient">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#halfStarGradient)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
        }

        // Empty stars
        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
            stars.push(
                <svg key={`empty-${i}`} className="w-4 h-4 mr-0.5 text-transparent stroke-gray700 stroke-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
        }

        return stars;
    };

    return (
        <div className="bg-white text-primary md:p-8 p-4 md:max-w-370 max-w-300 w-full flex flex-col h-full">
            <div className=" flex gap-4 mb-6">
                <div className=" flex">
                    {/* <div className="rounded-full flex border mb-auto border-divider overflow-hidden p-1 h-10 w-10 ">
                        <Image src={img || "/assets/icons/default.png"} alt={"client logo"} width={48} height={48} className="object-cover " />
                    </div> */}
                    <div className="flex items-center md:h-12 h-6 max-w-16 w-full">
                        <Image src={img} alt="client logo" height={48} width={150} className=" max-h-full max-w-full h-auto w-auto" />
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 mb-.5">
                        <h6 className=" text-H6 font-semibold mb-auto">{platform}</h6>
                    </div>
                    <div className="flex items-center">
                        {renderStars(rating)}
                        <span className=" text-subtitle2 ml-2">({rating}/5)</span>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col flex-1">
                <p className="text-subtitle2 mb-auto">
                    {coment.length > 165 ? coment.slice(0, 165) : coment}
                    {coment.length > 165 ? "...see more" : ""}
                </p>
                <div className="mt-6 flex gap-2 items-center">
                    <div className=" w-4 h-0.5 bg-divider mb-5"></div>
                    {/* <div>
                        <div className="rounded-full border mb-auto border-divider overflow-hidden p-1 h-10 w-10 ">
                            <Image src={img || "/assets/icons/default.png"} alt={"client logo"} width={48} height={48} className="object-cover h-full w-full" />
                        </div>
                    </div> */}
                    <div>
                        <p className="text-subtitle1 font-semibold rounded-b-xl">{name}</p>
                        <p className=" text-body2">{degenation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;
