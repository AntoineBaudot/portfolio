export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    role: string;
    period: string;
    image: string;
    challenge: string;
    solution: string;
    outcome: {
        value: string;
        label: string;
    }[];
    stack: string[];
    content: string; // Markdown or rich text
};

export const projects: Project[] = [
    {
        slug: "capgemini",
        title: "Capgemini",
        subtitle: "Enterprise Product Management",
        category: "Product Management",
        role: "Product Manager",
        period: "April 2024 - Present",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
        challenge: "Managing complex product lifecycles in a large-scale enterprise environment with multiple stakeholders and legacy constraints.",
        solution: "Implemented agile methodologies and streamlined communication channels to bridge the gap between technical teams and business requirements.",
        outcome: [
            { value: "40%", label: "Need identification efficiency" },
            { value: "100+", label: "Stakeholders managed" },
            { value: "Agile", label: "Transformation" }
        ],
        stack: ["Jira", "Confluence", "Figma", "Enterprise Architecture"],
        content: "Detailed case study content regarding specific internal tools and optimization processes..."
    },
    {
        slug: "retreeb",
        title: "Retreeb",
        subtitle: "Fintech & Impact Payment",
        category: "Fintech",
        role: "Product Manager",
        period: "Nov 2022 - Dec 2023",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000",
        challenge: "Launching a sustainable payment solution in a competitive fintech market while ensuring regulatory compliance and user adoption.",
        solution: " designed and launched the mobile payment app, integrating carbon footprint tracking and charitable donation features directly into the transaction flow.",
        outcome: [
            { value: "15k+", label: "Active Users" },
            { value: "4.8/5", label: "App Store Rating" },
            { value: "B-Corp", label: "Certification Support" }
        ],
        stack: ["React Native", "Node.js", "Blockchain", "Stripe"],
        content: "Deep dive into the payment flow UX and the gamification of the impact metrics..."
    },
    {
        slug: "skaleet",
        title: "Skaleet",
        subtitle: "Core Banking System",
        category: "Banking",
        role: "Product Owner",
        period: "May 2022 - Nov 2022",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=1000",
        challenge: "Modernizing a Core Banking System to support next-gen fintechs with a continuously evolving API.",
        solution: "Defined specifications for new API endpoints and managed the roadmap for the lending module.",
        outcome: [
            { value: "99.9%", label: "Uptime" },
            { value: "2x", label: "Faster Integration" },
            { value: "API", label: "First Approach" }
        ],
        stack: ["REST API", "Microservices", "Postman", "SQL"],
        content: "Exploration of the API design process and documentation strategy..."
    },
    {
        slug: "algoan",
        title: "Algoan",
        subtitle: "Credit Scoring API",
        category: "Fintech",
        role: "Product Owner",
        period: "May 2021 - Oct 2021",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        challenge: "Democratizing access to credit through open banking data analysis and fairer scoring algorithms.",
        solution: "Worked on the dashboard for lenders to visualize risk profiles and automate decision making.",
        outcome: [
            { value: "User", label: "Centric Dashboard" },
            { value: "Data", label: "Visualization" },
            { value: "SaaS", label: "B2B Product" }
        ],
        stack: ["Dashboard", "Data Viz", "Figma", "SaaS"],
        content: "Focus on B2B dashboard UX and clarity of complex financial data..."
    }
];
