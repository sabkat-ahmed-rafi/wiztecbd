import React from "react";

import ContactForm from "@/widgets/ContactForm";
import Benefits from "@/widgets/Benefits";
import ServedClients from "@/widgets/ServedClients";
import { choose, lists, services, softwer } from "@/app/staticData/about";
import { RootSection, Section } from "@/components/Section";
import MiniBanner from "@/components/MiniBanner";
import ExtendTeam from "@/widgets/ExtendTeam";
import CompaniOverview from "@/widgets/CompaniOverview";
import AboutServices from "@/widgets/AboutServices";
import Resource from "@/widgets/Resource";
import Services from "@/widgets/Services";
import List from "@/components/List";
import { benifits } from "@/app/staticData/course";

const About = () => {
    return (
        <RootSection>
            <Section>
                <MiniBanner title={"About Us"} description={"Innovation, Excellence, and Collaboration: Who We Are"} BannerImage="/assets/images/miniBanner/About.webp" />
            </Section>
            <Section id="aboutChoose" bgColor="rgba(139, 196, 63, .1)">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"Why Choose Us?"} />
                </div>
            </Section>

            <Section bgColor="#ff8b22" id={"extentTeam"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <ExtendTeam />
                </div>
            </Section>
            <Section bgColor="#007aff" id={"extentTeam"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <CompaniOverview />
                </div>
            </Section>
            <Section bgColor="#63a077" id={"aboutService"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 ">
                    <AboutServices softwer={softwer} />
                </div>
            </Section>
            <Section id={"resorce"} bgColor="#000">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <Resource />
                </div>
            </Section>
            <Section bgColor="#c53d3d" id={"problem"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <Services title={services.title} description={services.description} service={services.service} />
                </div>
            </Section>
            <Section bgColor="rgba(139, 196, 63, .1)" id={"engment"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"Our Engagement models"} />
                </div>
            </Section>
            <Section bgColor="#8BC43F" id={"serveclient"}>
                <div className=" py-12">
                    <ServedClients title={"Awards & Recognition"} />
                </div>
            </Section>
            <Section id={"contact"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-6">
                    <ContactForm />
                    <div className="md:mt-100">
                        <List lists={lists} />
                    </div>
                </div>
            </Section>
        </RootSection>
    );
};

export default About;
