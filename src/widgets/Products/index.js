import React from "react";

import OurFeatureProjects from "../OurFeatureProjects";
import products from "/public/Json/products.json";
import { Section } from "@/components/Section";

const Products = () => {
    return (
        <>
            {products.map((product, index) => {
                return (
                    <Section key={index} id={`product-${index}`} bgColor={product.color}>
                        <div className="container mx-auto px-4 text-white max-w-xl md:py-100 py-12">
                            <OurFeatureProjects reverse={product.id % 2 == 0} ourFeatureProjectsData={product} />
                        </div>
                    </Section>
                );
            })}
        </>
    );
};

export default Products;
