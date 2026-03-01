"use client";
import { useState } from "react";
import Image from "next/image";

const Expertists = ({ option, onSelect = () => {}, select, handleCount = () => {}, count }) => {
    const { label, value, icon } = option;
    const isSelected = select.includes(value);

    return (
        <div>
            <div onClick={() => onSelect(value)} className={`flex flex-col items-center justify-center border border-success_main p-4 rounded cursor-pointer ${isSelected ? "bg-black text-white" : "bg-white"}`}>
                <Image src={icon} alt="front" height={100} width={100} className="h-14 w-14 mb-2" />
                <p className="font-semibold text-center line-clamp-1">{label}</p>
            </div>
            {isSelected && <input value={count} onChange={(e) => handleCount(e.target.value)} autoFocus placeholder="count" type="number" className="px-2 py-px w-full bg-transparent input-no-arrows outline-none border font-light border-gray500 rounded-md" />}
        </div>
    );
};

const ExpertistRole = ({ handleTableData, handleLocationData }) => {
    const [fieldValue, setFieldValue] = useState([]);
    const [select, setSelect] = useState([]);
    const [count, setCount] = useState(0);

    const handleExpertists = (value) => {
        setSelect((prev) => [...prev, value]); // Allow duplicates
    };

    const handleCount = (count) => {
        console.log("count", count);
    };

    const [selected, setSelected] = useState({
        remote: "",
        onsite: "",
        hybrid: "",
    });

    const handleSelect = (key, value) => {
        setSelected({
            remote: "",
            onsite: "",
            hybrid: "",
            [key]: value,
        });
    };

    const location = selected.remote || selected.onsite || selected.hybrid;
    // handleLocationData(location);

    const options = [
        { label: "Frontend", value: "frontend", icon: "/path/to/icon1.png" },
        { label: "Backend", value: "backend", icon: "/path/to/icon2.png" },
        { label: "Fullstack", value: "fullstack", icon: "/path/to/icon3.png" },
    ];

    return (
        <div>
            <h1 className="text-H1 text-center font-bold mb-8 mt-6 md:mt-12">Select Job Environment Type</h1>
            <div className="flex md:items-center justify-center gap-4 flex-wrap mb-20">
                <div onClick={() => handleSelect("remote", "Remote")} className="cursor-pointer p-4">
                    Remote
                </div>
                <div onClick={() => handleSelect("onsite", "On-Site")} className="cursor-pointer p-4">
                    On-Site
                </div>
                <div onClick={() => handleSelect("hybrid", "Hybrid")} className="cursor-pointer p-4">
                    Hybrid
                </div>
            </div>

            <h1 className="text-H1 text-center font-bold mb-8 mt-12">Select Your Expertise Language, Expertise Level & Timeline</h1>
            <div className="grid grid-cols-6 gap-4 mb-12">
                {options.map((option) => (
                    <Expertists key={option.value} option={option} select={select} onSelect={handleExpertists} count={count} handleCount={handleCount} />
                ))}
            </div>

            <div className="mb-12">
                <div>
                    <label className="block mb-2">Select Languages</label>
                    <select multiple value={fieldValue} onChange={(e) => setFieldValue([...e.target.selectedOptions].map((opt) => opt.value))} className="focus:ring-1 w-full focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 h-10 flex items-center bg-transparent rounded-lg focus:outline-none ring-1 ring-success_main focus:border-success_main">
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="Ruby">Ruby</option>
                    </select>
                </div>
            </div>

            <div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Language</th>
                            <th>Expertise</th>
                            <th>Timeline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fieldValue.map((value) => (
                            <tr key={value}>
                                <td>{value}</td>
                                <td>{languages ? languages[value] : "Unknown"}</td>
                                <td>{expartist ? expartist[value] : "Unknown"}</td>
                                <td>{timeLine ? timeLine[value] : "Unknown"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpertistRole;
