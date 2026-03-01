import ImageURL from "@/components/ImageUrl";
import React from "react";

const GlobalClients = () => {
    return (
        <>
            <div className=" md:mb-12 mb-6">
                <h2 className=" text-center text-H1 font-bold md:mb-12 mb-6">Clients Beyond Borders</h2>
                <div className="flex items-center justify-center md:h-370 h-300">
                    <ImageURL image={"/assets/images/maps/Group 1000007270.png"} alt={"map"} width={1920} height={600} />
                </div>
            </div>
        </>
    );
};

export default GlobalClients;
