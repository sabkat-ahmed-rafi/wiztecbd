"use client";
import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

export function ContextProvider({ children }) {
    const [isLocation, setIsLocation] = useState("");
    const [duplicatedSelect, setDuplicatedSelect] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [selectRole, setSelectRole] = useState([]);
    const [selected, setSelected] = useState({
        remote: "",
        onsite: "",
        hybrid: "",
    });

    return (
        <ContextApi.Provider
            value={{
                isLocation,
                setIsLocation,
                duplicatedSelect,
                setDuplicatedSelect,
                selectedData,
                setSelectedData,
                selected,
                setSelected,
                selectRole,
                setSelectRole,
            }}
        >
            {children}
        </ContextApi.Provider>
    );
}

export function useContextApi() {
    return useContext(ContextApi);
}
