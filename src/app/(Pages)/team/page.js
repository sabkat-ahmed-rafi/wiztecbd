import React from "react";

import { RootSection, Section } from "@/components/Section";
import LeaderShip from "@/widgets/LeaderShip";
import Employer from "@/widgets/Employer";
import ContactButton from "@/components/contactbutton";
import MiniBanner from "@/components/MiniBanner";
import FamillyGroup from "@/widgets/FamillyGroup";

const Team = () => {
    return (
        <RootSection>
            <Section id="teamBanner">
                <MiniBanner title="WiztecBD Family" subtitle="Meet the Minds Behind the Magic" BannerImage="/assets/images/miniBanner/OurTeam.webp" />
            </Section>
            <Section id={"leasership"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <h1 className=" text-H1 font-bold md:mb-12 mb-6 text-center">Battle Tested Leadership</h1>
                    <div className=" md:pb-100 pb-12">
                        <LeaderShip
                            name={"Md. Mostafijur Rahaman Sujan"}
                            designation="Chairman"
                            description="He is the founder and chairman of the company. With his exceptional technical background, he oversees all stages of the technical development of projects. His vision and leadership have allowed the company to grow into a team of over 50 members."
                            img={"/assets/images/jueal.png"}
                            alt="sujon"
                            education={"Mostafijur earned a Master’s degree in Computer Science & Engineering prior to founding the company."}
                            experience={"Mostafijur has more than 5 years of experience in software development. He has successfully completed a multitude of projects, contributing to the growth of his company. He has led the completion of more than 100 projects around the world."}
                        />
                    </div>
                    <div>
                        <LeaderShip
                            reverse
                            name={"Md. Banozir Ahamed"}
                            designation="Managing Director"
                            description="Banozir works primarily with the business development section of the company, where he ensures the financial vision, mission, and long-term goals are met. He continuously monitors and maintains quality while overseeing all legal and administrative operations. His strong leadership and business development expertise have been key in completing operations both at home and abroad."
                            img={"/assets/images/jueal.png"}
                            alt="Banozir"
                            education={"Banozir earned a Master’s degree in Computer Science & Engineering prior to founding the company."}
                            experience={"Banozir is an entrepreneur and businessman by birth with extensive experience in business development. He is adroit in managing stakeholders, achieving company missions and objectives, and bringing new initiatives. His years of experience have been pivotal in driving the company to new levels of success, both locally and internationally."}
                        />
                    </div>
                </div>
            </Section>
            <Section id={"employer"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <FamillyGroup />
                </div>
            </Section>
            <Section id={"employer"}>
                <div className=" container mx-auto px-4 max-w-xl md:pb-100 pb-12">
                    <Employer />
                </div>
            </Section>
            <Section id={"contact"}>
                <div className=" container mx-auto px-4 max-w-xl py-12 md:py-100">
                    <ContactButton contact />
                </div>
            </Section>
        </RootSection>
    );
};

export default Team;
