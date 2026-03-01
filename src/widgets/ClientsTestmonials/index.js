import React from "react";

import AutoSwiper from "@/components/AutoSwipper";
import Testmonial from "../Testmonial";
import { feetBacks } from "@/app/staticData/data";

const ClientsTestMonials = () => {
    return (
        <AutoSwiper pauseOnClick title={"Words from Our Clients"}>
            <div className=" flex">
                {feetBacks.map((feet) => (
                    <div key={feet.id} className=" mx-4">
                        <Testmonial name={feet.name} platform={feet.platform} degenation={feet.degenation} rating={feet.rating} img={feet.img} coment={feet.coment} />
                    </div>
                ))}
            </div>
        </AutoSwiper>
    );
};

export default ClientsTestMonials;
