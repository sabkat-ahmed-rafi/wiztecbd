import React from "react";

import Information from "@/components/Information";

const Informations = () => {
    return (
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 md:gap-6 gap-4">
            <Information country="Bangladesh Office" parentClassName="bg-custom-gradient" address={"Level 9(West Side), 107 F Haque Tower, Bir Uttam C R Datta Road, Sonargaon Road, Dhaka-1205"} phone={"01600-299169"} email={"wiztecbd@gmail.com"} />
            <Information parentClassName="bg-custom-gradient" country="UK Office" address={"71-75, Shelton Street, Covent Garden, London, United Kingdom."} phone={"+447462312013"} email={"wiztecuk@gmail.com"} />
            <Information parentClassName="bg-custom-gradient" country="Careers." address={"Recruiting"} addReume="wiztecuk@gmail.com" />
        </div>
    );
};

export default Informations;
