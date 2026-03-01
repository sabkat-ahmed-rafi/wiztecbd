import ImageURL from "@/components/ImageUrl";
import React from "react";

const OfficeMaps = () => {
    return (
        <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6">
            <div>
                <h3 className="text-H3 font-bold text-center md:mb-12 mb-6">Bangladesh Office</h3>
                <div className="flex items-center justify-center md:h-256 h-170">
                    <ImageURL image={"/assets/images/maps/bd.webp"} alt={"map"} width={512} height={256} />
                </div>
            </div>
            <div>
                <h3 className="text-H3 font-bold text-center md:mb-12 mb-6">UK Office</h3>
                <div className="flex items-center justify-center md:h-256 h-170">
                    <ImageURL image={"/assets/images/maps/uk.webp"} alt={"map"} width={512} height={256} />
                </div>
            </div>
        </div>
    );
};

export default OfficeMaps;
