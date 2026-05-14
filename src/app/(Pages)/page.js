import HerroBanner from "@/widgets/HerroBanner";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { RootSection, Section } from "@/components/Section";
import OurProcess from "@/widgets/OurProcess";
import OverViews from "@/widgets/OverViews";
import ServedClients from "@/widgets/ServedClients";
import OurServices from "@/widgets/OurServices";
import Benefits from "@/widgets/Benefits";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import GlobalClients from "@/widgets/GlobalClients";
import TechPower from "@/widgets/TechPower";
import Industries from "@/widgets/Industries";
import OurCaseStudies from "@/widgets/FeaturedProjects";
import ContactForm from "@/widgets/ContactForm";
import ContactInfo from "@/widgets/ContactForm/ContactInfo";
import { homeMetaData } from "../staticData/data";
const { benifits } = require("../staticData/course");
import products from "/public/Json/products.json";
import Products from "@/widgets/Products";

export const metadata = homeMetaData;

const Home = () => {
    return (
        <RootSection>
            <Section>
                <HerroBanner />
            </Section>
            <Section id="overview" bgColor="rgba(139, 196, 63, .1)" className={"md:hidden"}>
                <div className="md:py-100 py-12 ">
                    <OverViews />
                </div>
            </Section>
            <Section id="serveClient">
                <div className="md:pt-100 md:pb-0 py-12 !-z-50">
                    <ServedClients title={"Delightly Served Clients"} />
                </div>
            </Section>
            <Section id="Services" bgColor="#ff8b22">
                <div className=" container mx-auto px-4 max-w-xl md:pt-100 md:pb-0 py-12">
                    <OurServices />
                </div>
            </Section>
            <Section id="choose" bgColor="#007aff">
                <div className=" container mx-auto px-4 max-w-xl md:pt-100 md:pb-0 py-12 text-white">
                    <Benefits benifits={benifits} title={"Why Choose Us?"} />
                </div>
            </Section>
            <Section id="findBest-home" bgColor={"#17afb0"}>
                <div className=" container mx-auto px-4 max-w-2xl md:pt-100 md:pb-0 py-12">
                    <OurProcess />
                </div>
            </Section>
            <Section id="testmonials" bgColor="#000">
                <div className="md:pt-100 md:pb-0 py-12 text-white">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id="golobalClient">
                <div className=" container mx-auto px-4 max-w-xl md:pt-100 md:pb-0 py-12">
                    <GlobalClients />
                </div>
            </Section>
            <Section id="techPowerhome" bgColor="#8BC43F">
                <div className=" md:pt-100 md:pb-0 py-12">
                    {/* for tech */}
                    <TechPower />
                </div>
            </Section>
            <Section id="industries" bgColor="#cd89e8">
                <div className=" container mx-auto px-4 max-w-xl md:pt-100 md:pb-0 py-12">
                    <Industries />
                </div>
            </Section>
            <ScrollAnimatedSection delay={200}>
                <div className=" md:mb-12 mb-6 md:pt-100">
                    <h2 className=" text-center text-H1  font-bold mb-2 text-white">Our Feature Projects</h2>
                </div>
            </ScrollAnimatedSection>
            <Products />
            <Section id="ourCaseStudies" bgColor="#17a2b8">
                <div className=" text-white container mx-auto px-4 max-w-xl  md:pt-100 md:pb-0 py-12">
                    <OurCaseStudies />
                </div>
            </Section>

            <Section id="contactform">
                <div className=" container mx-auto px-4 max-w-xl md:pt-100 md:pb-50 py-12 grid md:grid-cols-2 grid-cols-1 gap-16">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </Section>
        </RootSection>
    );
};

export default Home;
