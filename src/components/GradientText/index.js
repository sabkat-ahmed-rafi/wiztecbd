import React from "react";

const GradientText = ({ text, className }) => {
    return <span className={`${className} bg-gradient-text bg-clip-text text-transparent bg-200-auto animate-textanim`}>{text}</span>;
};

export default GradientText;
