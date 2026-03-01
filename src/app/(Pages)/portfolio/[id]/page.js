import React from "react";

import CaseStudiesBanner from "@/widgets/CaseStudiesBanner";
import RelatedCases from "@/widgets/RelatedCases";
import ContactButton from "@/components/contactbutton";
import FaqHome from "@/widgets/FaqHome/indesx";
import { RootSection, Section } from "@/components/Section";
import CompanyBackground from "@/widgets/CompanyBackground";

import Problems from "@/widgets/Problem";
import Statement from "@/components/Statement";
import Encountered from "@/widgets/Encountered";
import ProjectTarget from "@/widgets/ProjectTarget";
import Result from "@/widgets/FinalResult";
import ResolutionOffered from "@/widgets/ResolutionOffered";
import portfolio from "/public/Json/portfolio.json";
import { DetailsFilter } from "@/utilities/detailsFilter";
import Product from "@/widgets/Product";
import List from "@/components/List";

const CaseStudies = ({ params }) => {
    const cases = DetailsFilter(portfolio, params.id);

    if (!cases) {
        return <p>Blog not found!</p>;
    }

    const relatedCaseStudies = portfolio.filter((related) => related.id !== params.id);

    return (
        <RootSection>
            <Section id={"casebanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CaseStudiesBanner title={cases.title} description={cases.description} img={cases.img} alt={cases.alt} intro={cases.intro} />
                </div>
            </Section>
            <Section id={"companiBackground"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CompanyBackground description={cases.companyBack.description} />
                </div>
            </Section>
            <Section id={"problem"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 ">
                    <Problems description={cases.problems.description} img={cases.problems.img} alt={cases.problems.alt} />
                </div>
            </Section>
            <Section id={"projectTerget"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ProjectTarget description={cases.projectTargets.description} img={cases.projectTargets.img} alt={cases.projectTargets.alt} />
                </div>
            </Section>
            <Section>
                <Statement description={cases.managerStatement.description} />
            </Section>
            <Section id={"encountered"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Encountered title={cases.challenges.title} image={cases.challenges.image} list={cases.challenges.list} />
                </div>
            </Section>
            <Section id={"resolution"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ResolutionOffered offers={cases.resolutionOffered.offers} description={cases.resolutionOffered.description} />
                </div>
            </Section>
            {cases.products.map((product, index) => {
                console.log("product.id / 2 == 0", product.id / 2 == 0);
                return (
                    <Section key={index} id={`product-${index}`} bgColor={product.color}>
                        <div className="container mx-auto px-4 text-white max-w-xl md:py-100 py-12">
                            <Product revers={product.id % 2 == 0} title={product.title} description={product.description} img={product.img} alt={product.alt} />
                        </div>
                    </Section>
                );
            })}
            <Section id={"findResult"}>
                <div className=" container mx-auto px-4 max-w-xl md:p-100 py-12">
                    <div className=" mb-6 md:mb-12">
                        <h1 className="text-H1  font-bold mb-6 text-center">Final Results</h1>
                        <div className=" grid md:grid-cols-3 grid-cols-1 gap-8 mb-6 md:mb-12">{cases.results.result.length > 0 && cases.results.result.map((resu, index) => <Result key={index} type={resu.type} content={resu.content} value={resu.value} />)}</div>
                        <List lists={cases?.results?.list} />
                    </div>
                </div>
            </Section>
            <Section>
                <Section>
                    <Statement title={cases.projectStatement.title} description={cases.projectStatement.description} />
                </Section>
            </Section>
            <Section id={"portfolioContact"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
            <Section id={"portfolioFaq"}>
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={cases.faq} />
                </div>
            </Section>
            <Section id={"portfolioRelatedCases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases relatedCaseStudies={relatedCaseStudies} />
                </div>
            </Section>
        </RootSection>
    );
};

export default CaseStudies;
