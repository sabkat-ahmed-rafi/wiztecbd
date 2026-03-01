import React from "react";

import EmplCard from "@/components/EmpCard";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { teamData } from "@/app/staticData/teams";

const Employer = () => {
    return (
        <div>
            <ScrollAnimatedSection>
                <h1 className="text-H1 text-center text-primary font-bold mb-12">Meet The Team</h1>
            </ScrollAnimatedSection>
            <div className=" grid lg:grid-cols-3 grid-cols-2 sm:grid-cols-2 md:gap-4 gap-2">
                {teamData.map((team) => (
                    <EmplCard key={team.id} social={team.social} name={team.name} department={team.department} img={team.img} alt={team.alt} description={team.description} />
                ))}
            </div>
        </div>
    );
};

export default Employer;
