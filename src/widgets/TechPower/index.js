import React from "react";
import Image from "next/image";

import AutoSwiper from "@/components/AutoSwipper";
import { techPower } from "@/app/staticData/home";

const TechPower = () => {
    return (
        <AutoSwiper speed={100} title={"Tech That Powers Us"}>
            {techPower.map((image) => (
                <div key={image.id} className="flex items-center  justify-center flex-shrink-0 h-12 mx-6">
                    <Image src={image.image} alt={image.alt} height={65} width={128} className=" max-h-full max-w-full h-auto w-auto" />
                </div>
            ))}
        </AutoSwiper>
    );
};

export default TechPower;
