import React from "react";
import { DtPicker } from "react-calendar-datetime-picker";

import "react-calendar-datetime-picker/dist/style.css";

const DatePicker = ({ inputClass, isDisabled, label, onChange, value, currentWork, placeholder, onChangeCheckBox, checked, checkName, checkId }) => {
    return (
        <div>
            <div className=" flex items-center">
                {label && (
                    <label htmlFor="website" className="font-semibold mb-2">
                        {label}
                    </label>
                )}
                {currentWork && (
                    <div className=" flex items-center gap-1 ml-2 mb-2">
                        <input
                            type="checkbox"
                            id={checkId}
                            name={checkName}
                            checked={checked} // Controlled component
                            onChange={onChangeCheckBox} // Handle state changes
                            className={`w-3 h-3 ${checked ? "bg-primary border-black" : "bg-gray-100"} !text-subtitle1`}
                        />
                        <p className=" text-subtitle2">Currently worke here</p>
                    </div>
                )}
            </div>
            <DtPicker
                onChange={onChange}
                value={value}
                withTime // Enables time input
                showTimeInput // Shows time picker alongside date
                isDisabled={isDisabled} // Disables based on tab value
                daysClass="custom-days"
                headerClass="custom-header"
                calendarType="US"
                inputClass={inputClass}
                placeholder={placeholder}
            />
        </div>
    );
};

export default DatePicker;
