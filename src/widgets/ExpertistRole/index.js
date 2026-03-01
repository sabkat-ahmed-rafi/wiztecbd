"use client";
import { useState, useEffect } from "react";
import { expartist, languages, options, timeLine } from "@/app/staticData/hire-developer";
import ExpertiseTable from "@/components/ExpertiseTable";
import RoleSelect from "@/components/RoleSelect";
import Expertists from "@/components/Expertists";
import { useContextApi } from "@/app/utilities/contextApi";

const ExpertistRole = () => {
    const [counts, setCounts] = useState({});
    const { setIsLocation, duplicatedSelect, setDuplicatedSelect, selected, setSelected, selectRole, setSelectRole } = useContextApi();

    const handleExpertists = (value) => {
        setSelectRole((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
    };

    const [tempCounts, setTempCounts] = useState({});

    const handleCount = (value, count) => {
        if (count === "") {
            setTempCounts((prev) => ({ ...prev, [value]: "" }));
            return;
        }

        const parsedCount = parseInt(count, 10);
        if (!isNaN(parsedCount) && parsedCount >= 1) {
            setCounts((prev) => ({ ...prev, [value]: parsedCount }));
            setTempCounts((prev) => ({ ...prev, [value]: parsedCount }));
        }
    };

    useEffect(() => {
        const newDuplicatedSelect = selectRole.flatMap((value) => {
            const count = counts[value] || 1;
            return Array(count).fill(value);
        });
        setDuplicatedSelect(newDuplicatedSelect);
    }, [selectRole, counts]);

    // Handle location selection
    const handleSelect = (key, value) => {
        setSelected({
            remote: "",
            onsite: "",
            hybrid: "",
            [key]: value,
        });
    };

    const location = selected.remote || selected.onsite || selected.hybrid;
    useEffect(() => {
        setIsLocation(location);
    }, [location, setIsLocation]);

    return (
        <div>
            <h1 className="text-H1 text-center font-bold mb-8 mt-6 md:mt-12">Select Job Environment Type</h1>
            <div className="flex md:items-center justify-center gap-4 flex-wrap mb-20">
                <RoleSelect title="Remote" options={["Option 1", "Option 2", "Option 3"]} selectedValue={selected.remote} onSelect={(value) => handleSelect("remote", value)} />
                <RoleSelect title="On-Site" options={["Option A", "Option B", "Option C"]} selectedValue={selected.onsite} onSelect={(value) => handleSelect("onsite", value)} />
                <RoleSelect title="Hybrid" options={["Choice X", "Choice Y", "Choice Z"]} selectedValue={selected.hybrid} onSelect={(value) => handleSelect("hybrid", value)} />
            </div>
            <h1 className="text-H1 text-center font-bold mb-8 mt-12">Select Your Expertises Language, Expertise Level & Timeline</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {options.map((option) => (
                    <Expertists key={option.value} option={option} select={selectRole} onSelect={handleExpertists} count={tempCounts[option.value] ?? 1} onCount={(count) => handleCount(option.value, count)} />
                ))}
            </div>

            <ExpertiseTable header={["Role", "Language", "Expertise", "Timeline"]} fieldValue={duplicatedSelect} languages={languages} expartist={expartist} timeLine={timeLine} />
        </div>
    );
};

export default ExpertistRole;
