// Transform API case studies data to component-compatible format
export const transformCaseStudyToProduct = (caseStudy) => {
  return {
    id: caseStudy.id,
    title: caseStudy.title,
    description: caseStudy.short_desc,
    img: caseStudy.image, // Use API image
    alt: caseStudy.title,
    buttonText: "read more",
    color: caseStudy.id % 2 === 0 ? "#c53d3d" : "#20804F", // Alternate colors
    tags: caseStudy.expertises?.map(exp => exp.name) || []
  };
};

export const transformCaseStudyToPortfolio = (caseStudy) => {
  return {
    id: caseStudy.id.toString(),
    title: caseStudy.title,
    description: caseStudy.short_desc,
    img: caseStudy.image, // Use API image
    alt: caseStudy.title,
    intro: {
      industry: caseStudy.industry,
      country: caseStudy.country,
      team: caseStudy.team_composition,
      technologies: caseStudy.expertises?.map(exp => exp.name).join(', ') || '',
      duration: parseInt(caseStudy.project_duration) || 6
    },
    companyBack: {
      id: 1,
      title: "Company Background",
      description: caseStudy.company_background,
      img: caseStudy.image, // Use API image
      alt: "company background"
    },
    problems: {
      id: 1,
      title: "The Problem",
      description: caseStudy.problem_statement,
      img: caseStudy.image, // Use API image
      alt: "problem"
    },
    projectTargets: {
      description: caseStudy.project_target || caseStudy.short_desc,
      img: caseStudy.image, // Use API image
      alt: "Project Targets"
    },
    managerStatement: {
      id: 1,
      description: caseStudy.managers_statement
    },
    projectStatement: {
      id: 1,
      title: "Product Development Project's Statement",
      description: caseStudy.managers_statement
    },
    challenges: {
      title: "Challenges Encountered",
      image: caseStudy.image, // Use API image
      list: caseStudy.challenges?.filter(challenge => challenge !== "nothing").map((challenge, index) => ({
        id: index + 1,
        content: challenge
      })) || []
    },
    resolutionOffered: {
      id: 1,
      title: "Resolutions Offered",
      description: "To address these challenges, we developed a robust and dynamic system with the following key components:",
      offers: caseStudy.resolutions?.map(resolution => ({
        id: resolution.id,
        title: resolution.title,
        description: resolution.description
      })) || []
    },
    products: caseStudy.resolutions?.slice(0, 4).map((resolution, index) => ({
      id: index + 1,
      title: resolution.title,
      description: resolution.description,
      img: caseStudy.image, // Use API image
      alt: resolution.title,
      color: index % 2 === 0 ? "#479d52" : index % 3 === 0 ? "#cd89e8" : "#20804F"
    })) || [],
    results: {
      result: [
        {
          id: "1",
          content: "Hours of Work Saved Weekly",
          value: caseStudy.hours_save || "18",
          type: "number"
        },
        {
          id: "2",
          content: "in Annual Savings",
          value: caseStudy.annual_savings || "40",
          type: "$"
        },
        {
          id: "3",
          content: "of Users Reported High Usability",
          value: caseStudy.usability_percentage || "90",
          type: "%"
        }
      ],
      list: caseStudy.results?.filter(result => result !== "nothing").map((result, index) => ({
        id: index + 1,
        content: result
      })) || []
    },
    faq: [
      {
        id: 1,
        title: "Can we customize the Project as per our requirement?",
        description: "We have a team of professionals whose high performance brings forth growth and success."
      },
      {
        id: 2,
        title: "How can we get a quotation?",
        description: "We have a team of professionals whose high performance brings forth growth and success."
      }
    ]
  };
};

export const transformCaseStudiesToProducts = (caseStudies) => {
  return caseStudies.map(transformCaseStudyToProduct);
};

export const transformCaseStudiesToPortfolio = (caseStudies) => {
  return caseStudies.map(transformCaseStudyToPortfolio);
};
