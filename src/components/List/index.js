import React from "react";

import ScrollAnimatedSection from "../ScrollAnimationSection";

const List = ({ lists, bgBlack }) => {
    console.log("lists--", lists);
    return (
        <div className="  flex flex-col gap-5">
            {lists.length > 0 &&
                lists.map((list) => (
                    <ScrollAnimatedSection key={list.id} delay={Number(list.id + "00")}>
                        <div className=" flex gap-6">
                            <h3 className={`${bgBlack && "text-white"} text-H3 font-bold opacity-60 w-10 -mt-2`}>
                                {list.id > 9 ? "" : "0"}
                                {list.id}
                            </h3>
                            <p className=" text-subtitle2">{list.content}</p>
                        </div>
                    </ScrollAnimatedSection>
                ))}
        </div>
    );
};

export default List;
