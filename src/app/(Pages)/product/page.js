"use client";
import React, { useState, useEffect } from "react";

import Banner from "@/components/Banner";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import { RootSection, Section } from "@/components/Section";
import SelectFilter from "@/widgets/SelectFilter/index.js";
import { bannerImages } from "@/app/staticData/portfolio";
import { fetchCaseStudies } from "@/utilities/api";
import { transformCaseStudiesToProducts } from "@/utilities/dataTransform";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchCaseStudies();
                if (data.status === 200 && data.caseStudies) {
                    const transformedProducts = transformCaseStudiesToProducts(data.caseStudies);
                    setProducts(transformedProducts);
                }
            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return (
            <RootSection>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-center">Loading...</div>
                </div>
            </RootSection>
        );
    }

    return (
        <RootSection>
            <Section id={"productBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"Smart Tools, Better Business"} sliderImage={bannerImages} title={"Our Product"} description={" Empowering Businesses with Innovative Solutions"} />
                </div>
            </Section>
            <Section id="filter" bgColor="#EEEEEE">
                <div className=" container mx-auto px-4 max-w-xl py-12">
                    {/* <SelectFilter /> */}
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
