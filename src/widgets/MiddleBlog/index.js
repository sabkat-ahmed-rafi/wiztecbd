"use client";
import React from "react";

const MiddleBlog = ({ richText }) => {
    return <div className=" flex flex-col gap-8">{richText && richText.length > 0 ? richText.map((item, index) => <div id={`section${index}`} key={index} dangerouslySetInnerHTML={{ __html: item.content }} />) : <p>No content available</p>}</div>;
};

export default MiddleBlog;
