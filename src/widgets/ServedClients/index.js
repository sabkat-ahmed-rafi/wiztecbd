import React from "react";
import Image from "next/image";

import AutoSwiper from "@/components/AutoSwipper";
import { servedClient } from "@/app/staticData/home";

const ServedClients = ({ title }) => {
    return (
        <AutoSwiper speed={100} title={title}>
            {servedClient.map((image) => (
                <div key={image.id} className="flex items-center justify-center  h-12 mx-6">
                    <Image src={image.image} alt={image.alt} height={48} width={150} className=" max-h-full max-w-full h-auto w-auto" />
                </div>
            ))}
        </AutoSwiper>
    );
};

export default ServedClients;
