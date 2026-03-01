import React from "react";

import SoftwerSection from "@/widgets/SoftwerSection";
import DesignSection from "@/widgets/DesignSection";
import RelatedCases from "@/widgets/RelatedCases";
import EcommercePlatform from "@/widgets/EcommercePlatform";
import SupportMaintanence from "@/widgets/SupportMaintanence";
import ItTraining from "@/widgets/ItTraining";
import ItConsultncy from "@/widgets/ItConsultncy";
import Banner from "@/components/Banner";
import ServedClients from "@/widgets/ServedClients";
import ContactButton from "@/components/contactbutton";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import { RootSection, Section } from "@/components/Section";
import WebDevelopment from "@/widgets/WebDevelopment";
import MobileAppDevelopment from "@/widgets/MobileAppDevelopment";
import { servicesMetaData } from "@/app/staticData/data";
import portfolio from "/public/Json/portfolio.json";

export const metadata = servicesMetaData;

const Services = () => {
    const images = ["/assets/images/banners/Service Banner.webp", "/assets/images/banners/Business Auto Banner.webp", "/assets/images/banners/Web Dev Banner.webp", "/assets/images/banners/Digital.webp", "/assets/images/banners/ecomers.webp", "/assets/images/banners/ERP bannar.webp", "/assets/images/banners/Mobile App Banner.webp", "/assets/images/banners/Support.webp"];

    return (
        <RootSection>
            <Section id={"serviceBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner title="Our Services In WiztecBd" sliderImage={images} subTitle="Show all services our company" description="Brief sentence about your unique service offerings." />
                </div>
            </Section>
            <Section id={"serviceWebDevelopment"} bgColor="#ff8b22">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <WebDevelopment />
                </div>
            </Section>

            <Section id={"serviceMobileAppDevelopment"} bgColor="#007aff">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <MobileAppDevelopment />
                </div>
            </Section>
            <Section id={"serviceSoftwerSection"} bgColor="#5201ff">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <SoftwerSection />
                </div>
            </Section>
            <Section id={"serviceServedClients"} bgColor="rgba(69, 144, 214, 0.253)">
                <div className=" md:py-100 py-12 ">
                    <ServedClients title={"Delightly Served Clients"} />
                </div>
            </Section>
            <Section id={"serviceEcommercePlatform"} bgColor="#5201ff">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <EcommercePlatform />
                </div>
            </Section>
            <Section id={"serviceRelatedCases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 ">
                    <RelatedCases relatedCaseStudies={portfolio.slice(0, 3)} />
                </div>
            </Section>
            <Section id={"serviceSupportMaintanence"} bgColor="#17afb0">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <SupportMaintanence />
                </div>
            </Section>
            <Section id={"serviceDesignSection"} bgColor="#63a077">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <DesignSection />
                </div>
            </Section>
            <Section id={"serviceItTraining"} bgColor="#8BC43F">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <ItTraining />
                </div>
            </Section>
            <Section id={"serviceItConsultncy"} bgColor="bg-success_dark">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 text-white">
                    <ItConsultncy />
                </div>
            </Section>
            <Section id={"serviceClientsTestMonials"} bgColor="#007aff">
                <div className="py-12">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id={"serviceContactButton"}>
                <div className=" container mx-auto px-4 max-w-xl py-12 md:py-100">
                    <ContactButton contact />
                </div>
            </Section>
        </RootSection>
    );
};

export default Services;
