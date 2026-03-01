import portfolio from "/public/Json/portfolio.json";

// export const portfolioData = [
//     { id: 1, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 2, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 3, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 4, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 5, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 6, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 7, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 8, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 9, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 10, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 11, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 12, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 13, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 14, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 15, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 16, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 17, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
//     { id: 18, title: "AI-based Learning Platform", img: "/assets/images/blog.jpeg", artical: "Software Development", description: "Learn how we developed MyCurrency, the first and the only mobile app that allows creating own micro currency and sharing it with local partners" },
// ];

export const bannerImages = portfolio.map((banner) => banner.img);

export const allServices = [
    { label: "Software Development", value: "Software Development" },
    { label: "E-commerce Platform", value: "E-commerce Platform" },
    { label: "Support & Maintenance", value: "Support & Maintenance" },
    { label: "Graphics Design", value: "Graphics Design" },
    { label: "IT/Technical Training", value: "IT/Technical Training" },
    { label: "IT Consultancy", value: "IT Consultancy" },
    { label: "Other", value: "Other" },
];

export const allTechnologies = [
    { label: "Angular JS", value: "Angular JS" },
    { label: "react js", value: "react js" },
    { label: "vue js", value: "vue js" },
    { label: "Typescript", value: "Typescript" },
    { label: "Django", value: "Django" },
    { label: "JAVA", value: "JAVA" },
    { label: "node js", value: "node js" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "MySQL", value: "MySQL" },
    { label: "Laravel", value: "Laravel" },
];
export const allIndustries = [
    { label: "Government", value: "Government" },
    { label: "E-commerce", value: "E-commerce" },
    { label: "Industry", value: "Industry" },
    { label: " Education & eLearning", value: "Education & eLearning" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Travel and Hospitality", value: "Travel and Hospitality" },
    { label: "Marketing & Branding", value: "Marketing & Branding" },
    { label: "LegalTech", value: "LegalTech" },
    { label: "Fintech", value: "Fintech" },
    { label: "Manufacturing", value: "Manufacturing" },
];

export const cases = {
    id: "1",
    title: "Online Insurance System for an Insurance Company",
    description: "Enhancing Insurance Service Efficiency with Digital Solutions",
    img: "/assets/images/Case Study Insurance Image/Case Study Banner.webp",
    alt: "banner",
    intro: {
        industry: "Insurance Service",
        country: "Bangladesh",
        team: 18,
        technologies: "HTML, CSS, Boostrap, PHP, Laravel",
        duration: 12,
    },
    companyBack: {
        id: 1,
        title: "Company Background",
        description: "The client has a distinguished reputation for providing tailored insurance solutions, addressing a wide range of client needs with a strong commitment to dependability. The company serves many prominent national and multinational conglomerates, building a solid reputation as a trustworthy insurer over the years.",
        img: "/assets/images/Case Study Insurance Image/Case Study Image-1 Insurance.webp",
        alt: "company background",
    },
    problems: {
        id: 1,
        title: "The Problem",
        description: "“This project allowed us to leverage our expertise in developing scalable, secure, and user-centric systems. We focused on building a solution that not only met the current needs of our client but also provided the flexibility to adapt to future changes in the insurance industry.”",
        img: "/assets/images/Case Study Insurance Image/Case Study Image-1 Insurance.webp",
        alt: "problem",
    },
    projectTargets: {
        description:
            "The goal was to automate and unify insurance operations into a single digital platform. Key objectives included reducing paperwork, improving data accuracy, and enhancing user engagement with intuitive customer dashboards. Moreover, it was essential to integrate a dynamic website, a mobile app for Android and iOS, and an advanced admin dashboard to streamline overall operations and empower data-driven decision-making.",
        img: "/assets/images/Case Study Insurance Image/Case Study Image-2.webp",
        alt: "Project Tergets",
    },
    managerStatement: {
        id: 1,
        title: "Product Development Manager’s Statement-",
        description: "This project allowed us to leverage our expertise in developing scalable, secure, and user-centric systems. We focused on building a solution that not only met the current needs of our client but also provided the flexibility to adapt to future changes in the insurance industry.",
    },
    projectStatement: {
        id: 1,
        title: "Product Development Project’s Statement-",
        description: "Completing this project with our talented team was a rewarding experience. We created a solution that genuinely improved the client’s operations, providing measurable benefits in efficiency, accuracy, and client satisfaction. Their team was instrumental in guiding our design to match industry expectations, and I’m proud of the results we achieved together.",
    },

    challenges: {
        title: "Challenges Encountered",
        list: [
            {
                id: 1,
                content: "Legacy Data Migration: Transferring data from the existing system into a modern, digital framework presented challenges, particularly in ensuring data accuracy and consistency..",
            },
            {
                id: 2,
                content: "Complex Policy Management: Designing an intuitive, user-friendly interface for complex insurance policies and schemes required a deep understanding of industry regulations.",
            },
            {
                id: 3,
                content: "Claims Processing Efficiency: Streamlining claims processing and documentation to minimize processing time without compromising accuracy was a critical technical hurdle.",
            },
            {
                id: 4,
                content: "Regulatory Compliance: Meeting compliance standards for insurance data security, while integrating digital communication channels, demanded careful attention to secure data handling protocols.",
            },
        ],
    },
    resolutionOffered: {
        id: 1,
        title: "Resolutions Offered",
        description: "To address these challenges, we developed a robust and dynamic system with the following key components:",
        offers: [
            {
                id: 1,
                title: "Integrated Dynamic Website",
                description: "Built a responsive website that allows users to access insurance services and information easily.",
            },
            {
                id: 2,
                title: "Integrated Dynamic Admin Panel",
                description: "Enabled admins to manage policies, claims, user data, and promotions through a centralized panel.",
            },

            {
                id: 3,
                title: "Mobile App (Android & iOS)",
                description: "Created an intuitive app for policyholders to manage their accounts, file claims, and access insurance details on the go.",
            },
            {
                id: 4,
                title: "Integrated Insurance Premium Calculator",
                description: "Provided an in-app calculator to estimate premium costs based on different policy factors.",
            },

            {
                id: 5,
                title: "Online Insurance Purchase System",
                description: "Mindfulness ensures a smooth, clear, and secure experience for users selecting and purchasing insurance plans, boosting confidence and satisfaction.",
            },
            {
                id: 6,
                title: "Client's Personal Dashboard",
                description: "Equipped policyholders with a personalized dashboard to view and manage their policies.",
            },
            {
                id: 7,
                title: "Administration Dashboards",
                description: "Developed dashboards for administrators to monitor real-time metrics, customer data, and policy performance.",
            },
            {
                id: 8,
                title: "Policy Schemes Details",
                description: "Designed a system to present detailed insurance policy schemes, ensuring clients understand their options.",
            },
            {
                id: 9,
                title: "Administration Dashboards",
                description: "Developed dashboards for administrators to monitor real-time metrics, customer data, and policy performance.",
            },
            {
                id: 10,
                title: "Policy Schemes Details",
                description: "Designed a system to present detailed insurance policy schemes, ensuring clients understand their options.",
            },
            {
                id: 11,
                title: "Digital Policy Management System",
                description: "Transitioned physical policies to digital versions, simplifying access and retrieval.",
            },
            {
                id: 12,
                title: "Financial Report & Analysis Generation",
                description: "Integrated a reporting module to generate and analyze financial reports, enabling data-driven decisions.",
            },
            {
                id: 13,
                title: "Promotion Management System",
                description: "Implemented a system to manage and track promotions, allowing for targeted marketing efforts.",
            },
            {
                id: 14,
                title: "Automated Notifications, Email & Messages to Customers",
                description: "Established automated communication channels for updates, renewal reminders, and notifications.",
            },
            {
                id: 15,
                title: "Payment Gateway Integration",
                description: "Added secure payment gateways for seamless online transactions.",
            },
            {
                id: 16,
                title: "Invoice Generation & Management",
                description: "Built an invoicing module to handle payment tracking and manage client invoices.",
            },
        ],
    },
    products: [
        {
            id: 1,
            title: "Integrated Dynamic Website",
            description:
                "A Dynamic Website in an online insurance management system provides an interactive, customizable interface where users can explore various insurance products, get updated policy information, and access personalized content. It adapts to user preferences and behavior, enhancing engagement and helping users find relevant information quickly. Dynamic content ensures that policy options, promotions, and FAQs remain current, providing a more seamless and informative experience. This feature is essential for keeping users engaged and helping them make informed insurance decisions.",
            img: "/assets/images/Case Study Insurance Image/Case Study Image-4 .webp",
            alt: "website",
            revers: false,
        },
        {
            id: 2,
            title: "Integrated Dynamic Admin Panel",
            description:
                "The Integrated Dynamic Admin Panel allows administrators to manage all aspects of the insurance platform efficiently, from policy updates and user management to claims processing and customer support. It provides real-time data and analytics, enabling quick decision-making and responsive customer service. With permissions-based access, different team members can perform their roles effectively. The panel also automates routine tasks, streamlining processes and reducing errors. A dynamic admin panel enhances system scalability and operational efficiency.",
            img: "/assets/images/Case Study Insurance Image/Case Study Image-5 .webp",
            alt: "admin panel",
            revers: true,
        },
        {
            id: 3,
            title: "Mobile App (Android & iOS)",
            description:
                "Change delivery frequency, shipping date, switch razor types, track orders. Anytime you want, you can add & remove products.The Mobile App offers users convenient access to the insurance platform on Android and iOS devices, enabling them to browse policies, manage accounts, and file claims on the go. It provides push notifications for payment reminders, policy updates, and claim statuses, keeping users informed and engaged. With a user-friendly interface and seamless navigation, the app enhances accessibility for users who prefer mobile devices. The app’s availability offline ensures usability even with limited internet, making it highly practical. Overall, a mobile app increases user convenience and engagement.",
            img: "/assets/images/Case Study Insurance Image/Case Study Image-6 .webp",
            alt: "mobile app",
            revers: false,
        },
        {
            id: 4,
            title: "Integrated Insurance Premium Calculator",
            description:
                "An Integrated Insurance Premium Calculator enables users to estimate their premium costs by entering details like age, policy type, and coverage amount. It provides transparency and helps users make informed choices by seeing how different options impact premiums. By simplifying cost estimation, this tool reduces the time spent on consultations and supports self-service. The calculator can be updated with real-time rates and offers, reflecting the latest pricing and discounts. This feature enhances user experience and fosters informed decision-making.",
            img: "/assets/images/Case Study Insurance Image/Case Study Image-7 .webp",
            alt: "Calculator",
            revers: true,
        },
    ],
    results: {
        houre: 18,
        savings: 40, // k
        uses: 90,
        list: [
            {
                id: 1,
                content: "Enhanced Efficiency and Productivity: Automation significantly reduced manual tasks, allowing the team to focus on customer service and strategic initiatives.",
            },
            {
                id: 2,
                content: "Superior Client Service: Policyholders could now easily access, update, and manage their policies through the app, improving overall customer satisfaction.",
            },
            {
                id: 3,
                content: "Data-Driven Decision Making: Financial reports and real-time analytics enabled more informed decisions for business growth.",
            },
            {
                id: 4,
                content: "Reduced Administrative Expenses: Reduced dependency on physical documents and streamlined processes led to notable cost savings.",
            },
            {
                id: 5,
                content: "Improved Accuracy and Reduced Errors: Digital workflows minimized data entry errors and streamlined operations.",
            },
        ],
    },
    faq: [
        { id: 1, title: "Can we customize the Project as per our requirement?", description: "We have a team of professionals whose high performance brings forth growth and success." },
        { id: 2, title: "How can we get a quotation?", description: "We have a team of professionals whose high performance brings forth growth and success." },
    ],
};
