"use client";
import { useState, useEffect } from "react";

import api from "@/config/api";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get("/api/get-courses")
            .then((res) => {
                setCourses(res.data.courses || []);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { courses, loading, error };
};

export default useCourses;
