"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import Button from "@/components/Button";
import Blog from "../blog";
import { fetchCaseStudies } from "@/utilities/api";
import { transformCaseStudiesToPortfolio } from "@/utilities/dataTransform";

const Cases = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleItems, setVisibleItems] = useState(6);

    useEffect(() => {
        const loadPortfolio = async () => {
            try {
                const data = await fetchCaseStudies();
                if (data.status === 200 && data.caseStudies) {
                    const transformedPortfolio = transformCaseStudiesToPortfolio(data.caseStudies);
                    setPortfolio(transformedPortfolio);
                }
            } catch (error) {
                console.error('Error loading portfolio:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPortfolio();
    }, []);

    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 6);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <div className="text-center">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <div className=" grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-12">
                {portfolio.slice(0, visibleItems).map((card) => (
                    <Link key={card.id} href={`/portfolio/${card.id}`}>
                        <Blog img={card.img} button={"Case studies"} title={card.title} description={card.description} />
                    </Link>
                ))}
            </div>
            <div className=" flex justify-end">{visibleItems < portfolio.length && <Button onClick={loadMoreItems}>Load More</Button>}</div>
        </>
    );
};

export default Cases;
