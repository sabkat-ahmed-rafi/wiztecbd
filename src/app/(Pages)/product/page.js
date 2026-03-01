import React from "react";

import Banner from "@/components/Banner";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import products from "/public/Json/products.json";
import { RootSection, Section } from "@/components/Section";
import SelectFilter from "@/widgets/SelectFilter/index.js";
import { bannerImages } from "@/app/staticData/portfolio";

const Product = () => {
    return (
        <RootSection>
            <Section id={"productBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"Smart Tools, Better Business"} sliderImage={bannerImages} title={"Our Product"} description={" Empowering Businesses with Innovative Solutions"} />
                </div>
            </Section>
            <Section id="filter" bgColor="#EEEEEE">
                <div className=" container mx-auto px-4 max-w-xl py-12">
                    <SelectFilter />
                </div>
            </Section>
            {products.map((product, index) => {
                return (
                    <Section key={index} id={`product-${index}`} bgColor={product.color}>
                        <div className="container mx-auto px-4 text-white max-w-xl md:py-100 py-12">
                            <OurFeatureProjects reverse={product.id % 2 == 0} ourFeatureProjectsData={product} />
                        </div>
                    </Section>
                );
            })}
        </RootSection>
    );
};

export default Product;
