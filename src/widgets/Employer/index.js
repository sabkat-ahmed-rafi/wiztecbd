'use client'

import React, { useEffect, useState } from "react";

import EmplCard from "@/components/EmpCard";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import api from "@/config/api";

const Employer = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await api.get("/api/get-employees");
                console.log(response)
                if (response.data.status === 200 || response.data.status === 201) {
                    setEmployees(response.data.employees);
                }
            } catch (error) {
                console.error("Failed to fetch employees:", error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <ScrollAnimatedSection>
                <h1 className="text-center text-primary font-bold mb-12 md:text-H1 text-H2 leading-tight">Meet The Team</h1>
            </ScrollAnimatedSection>
            <div className=" grid lg:grid-cols-3 grid-cols-2 sm:grid-cols-2 md:gap-4 gap-2">
                {employees.map((team) => (
                    <EmplCard
                        key={team.id}
                        social={{
                            facebook: team.facebook || "#",
                            instagram: team.instagram || "#",
                            twitter: team.twitter || "#",
                            linkedin: team.linkedin || "#",
                        }}
                        name={team.name}
                        department={team.designation}
                        img={team.image}
                        alt={team.name}
                        description={team.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default Employer;
