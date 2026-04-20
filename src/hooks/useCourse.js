"use client";
import { useState, useEffect } from "react";

import api from "@/config/api";

const useCourse = (id) => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        api.get(`/api/get-course/${id}`)
            .then((res) => {
                // handle both { course: {} } and { courses: [...] } shapes
                const data = res.data.course || res.data.courses?.[0] || null;
                setCourse(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return { course, loading, error };
};

export default useCourse;
