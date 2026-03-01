import { useState } from "react";
import Link from "next/link";

import portfolio from "/public/Json/portfolio.json";
import Button from "@/components/Button";
import Blog from "../blog";

const Cases = () => {
    const [visibleItems, setVisibleItems] = useState(6);

    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 6);
    };

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
