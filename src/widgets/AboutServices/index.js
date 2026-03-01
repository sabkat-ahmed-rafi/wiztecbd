import React from "react";
import Link from "next/link";

import ServiceCard from "../ServiceCard";

const AboutServices = ({ softwer }) => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-4">
      {softwer.map((data, index) => {
        return (
          <Link href="#" key={index}>
            <ServiceCard seeMore title={data.title} icon={data.icon} description={data.description} id={data.id} more={false} />
          </Link>
        );
      })}
    </div>
  );
};

export default AboutServices;
