"use client";
import { useState, useEffect } from "react";
import api from "@/config/api";

const useServices = (index) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!index) return;
        
        setLoading(true);
        api.get(`/api/get-services?index=${index}`)
            .then((res) => {
                setServices(res.data.services || []);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [index]);

    return { services, loading, error };
};

export default useServices;
