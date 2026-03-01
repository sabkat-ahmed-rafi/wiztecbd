import React from "react";

const Menu = ({ onMouseEnter, onMouseLeave, children }) => {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="absolute top-100  inset-x-0 z-50 w-full">
            <div className=" bg-white shadow-mega ">{children}</div>
        </div>
    );
};

export default Menu;
