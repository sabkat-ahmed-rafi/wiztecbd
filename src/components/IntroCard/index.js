import React from "react";

import useCountOnScroll from "@/hooks/useCountOnScroll";

const IntroCard = ({ name, number, type, by }) => {
    const { count, elementRef } = useCountOnScroll(number, 1000);
    return (
        <div ref={elementRef}>
            <h3 className="text-H3  text-center font-bold mt-4 mb-2 border-b border-divider capitalize">
                {count}
                {type == "parsentage" ? "%" : type == "plus" ? "+" : type == "month" ? ` ${type}` : type == "hours" ? " hours" : ""}
                {by && (
                    <>
                        {"/"} {by}
                    </>
                )}
            </h3>
            <p className="text-center">{name}</p>
        </div>
    );
};

export default IntroCard;
