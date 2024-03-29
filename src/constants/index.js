import { extreme_look, spaceWeb } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

import { 
    autoComfort,
    bmi,
    mek_metal_forming,
    nixie,
    social_media,
    burgers,
    space,
    ai_saas,
    mek_metal,
    handy_man
} from '../assets/projects/index'

import { 
    GuideWebDevelopment,
    GuideDomainAndHosting, 
    GuideAdaptiveDesign, 
    GuideSEO ,
    domainAndHosting,
    domainAndHostingIntrodaction,
    webDevelopment,
    webDevelopmentIntrodaction,
    SEO,
    SEO_Intro,
    AdaptiveDesign,
    AdaptiveDesignContent
} from '../assets/guides/index'


export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front-end Software Engineer",
        company_name: "",
        icon: spaceWeb,
        iconBg: "#b3f8",
        date: "Jan 2022 - Present",
        points: [
            "Transformed user experience, leading to a 43% increase in conversion rates with a user-friendly app interface, enhancing usability, accessibility, and PWA (Progressive Web Apps) implementation.",
            "Streamlined project execution with React and Git, achieving a 15% faster time-to-market for new websites and boosting client retention rates by 30% through improved performance and UX(user experience).",
            "Optimized technical SEO to advance the website from the 4th page to the 1st in Google search results within 19 days.",
            "Achieved conversion rates by 26% through a user-centric layout redesign and integration of key information.",
            "Revolutionized user experience and increased satisfaction by 20% by integrating Clerk into  Next.js 14 for secure authentication and Stripe for smooth transactions, significantly improving user engagement and retention in SaaS app.",
            "Slashed development cycle by 30% with shadcn/ui for UI efficiency and Cloudinary AI, enhancing feature speed and adaptivity."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Extreme Look",
        icon: extreme_look,
        iconBg: "#815efe",
        date: "May 2019 - Dec 2022",
        points: [
            "Reduced coding errors by 13% on our e-commerce platform through rigorous debugging and cross-browser compatibility testing, leading to enhanced user satisfaction and traffic growth.",
            "Drove a 60% sales uplift by applying findings from user experience research and needs analysis to optimize the product discovery and selection process, culminating in a more engaging and efficient purchase pathway.",
            "Enhanced productivity and expedited workflows through team collaboration and task prioritization, resulting in a 20% faster project delivery.",
            "Increased the average retail purchase value x2 by employing innovative approaches and an intuitive interface.",
            "Accelerated page loading time by 27% through the application of best practices and optimization techniques, leading to a 15% increase in page views"
        ],
    },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Magic1vy',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/valeriia-code/',
    }
];

export const projects = [
    {
        // iconUrl: pricewise,
        // theme: 'btn-back-red',
        name: 'AI SaaS App',
        description: 'Developed a user-friendly web application that enables users to magically enhance, restore, and manipulate images with features like object removal, recoloring, and background elimination, all powered by advanced AI technology.',
        link: 'https://ai-app-six-lime.vercel.app/',
        image: ai_saas,
        skillsUsed: [
            {
                imageUrl: nextjs,
                name: "Next.js",
                type: "Frontend",
            },
            {
                imageUrl: typescript,
                name: "TypeScript",
                type: "Frontend",
            },
            {
                imageUrl: mongodb,
                name: "MongoDB",
                type: "Database",
            },
            {
                imageUrl: tailwindcss,
                name: "Tailwind CSS",
                type: "Frontend",
            },
        ]
    },
    {
        // iconUrl: threads,
        // theme: 'btn-back-green',
        name: 'Full Stack Social Media App',
        description: 'Built a Social Media App, allowing users to share photos and connect with friends in a social media environment.',
        link: 'https://social-media-app-mern.netlify.app/',
        image: social_media,
        skillsUsed: [
            {
                imageUrl: react,
                name: "React",
                type: "Frontend",
            },
            {
                imageUrl: nodejs,
                name: "Node.js",
                type: "Backend",
            },
            {
                imageUrl: express,
                name: "Express",
                type: "Backend",
            },
            {
                imageUrl: mui,
                name: "Material-UI",
                type: "Frontend",
            },
            {
                imageUrl: mongodb,
                name: "MongoDB",
                type: "Database",
            },
        ]
    },

    {
        // iconUrl: snapgram,
        // theme: 'btn-back-pink',
        name: 'Space Travel Website',
        description: 'Develop a mobile-responsive website for space travel ticket purchases, featuring destination and technology carousels, team displays, and a shopping cart with options to adjust quantities, remove items, or clear the cart.',
        link: 'https://travel-in-space-react.netlify.app/',
        image: space,
        skillsUsed: [
            {
                imageUrl: react,
                name: "React",
                type: "Frontend",
            },
            {
                imageUrl: redux,
                name: "Redux",
                type: "State Management",
            },
        ]
    },
    {
        // iconUrl: summiz,
        // theme: 'btn-back-yellow',
        name: 'BMI Calculator',
        description: 'Web App which lets users calculate their Body Mass Index using either the Metric or Imperial systems. The application also includes a theme switcher for light and dark modes, providing an adaptable user experience.',
        link: 'https://body-mass-index-calculator-react.netlify.app/',
        image: bmi,
        skillsUsed: [
            {
                imageUrl: react,
                name: "React",
                type: "Frontend",
            }
        ]
    },
];
export const guides = [
    {
        name: "Guide to the World of Web Development",
        price: 'FREE',
        images: [
            // GuideWebDevelopment,
            webDevelopment,
            webDevelopmentIntrodaction
        ],
        languages: [
            "English",
            "Russian",
            "Ukrainian"
        ],
        downloadLinks: {
            English: "https://drive.google.com/file/d/1Q3WeG8oVFJoKcpSr-AePMts-K57qtMS_/view?usp=sharing",
            Russian: "https://drive.google.com/file/d/1rkPAbwMNQfuCBDSpLcMJuLARZk2yda2l/view?usp=sharing",
            Ukrainian: "https://drive.google.com/file/d/14nE_0zuVIW0BF81IdFNYsShmdqidrFC-/view?usp=sharing"
        },
        description: "The guide emphasizes online presence importance, development basics, and collaboration with developers and includes step-by-step processes, preparation tips, and developer role clarifications.",
    },
    {
        name: "Domain and Hosting",
        price: 'FREE',
        images: [
            // GuideDomainAndHosting, 
            domainAndHosting,
            domainAndHostingIntrodaction
        ],
        languages: [
            "English",
            "Russian",
        ],
        downloadLinks: {
            English: "https://drive.google.com/file/d/1JpSLVx6Yai5CRuRwsq7huaGU8okk25L5/view?usp=sharing",
            Russian: "https://drive.google.com/file/d/1pp4pO8A-HLbRXJGAuo-idCKDj8elQqfu/view?usp=sharing",
        },
        description: "This guide explains the concepts of domain and hosting, detailing their roles in establishing and maintaining a website's presence on the internet.",
    },
    {
        name: "SEO",
        price: '$24,99',
        images: [
            // GuideSEO ,
            SEO,
            SEO_Intro
        ],
        languages: [
            "English",
            "Russian",
        ],
        downloadLinks: {
            English: "https://buy.stripe.com/aEU01e5mRaAha64dQT",
            Russian: "https://buy.stripe.com/6oEeW8eXrfUB9203cg",
        },
        description: "This guide offers a comprehensive overview of SEO, covering topics from basic concepts and how search engines work, to advanced strategies like on-page, off-page, and technical SEO, including local optimization, analytics tools, semantic markup, handling errors, and the significance of images in SEO.",
    },
    {
        name: "Responsive Design",
        price: 'FREE',
        images: [
            // GuideAdaptiveDesign, 
            AdaptiveDesign,
            AdaptiveDesignContent
        ],
        languages: [
            "English",
            "Russian",
        ],
        downloadLinks: {
            English: "https://drive.google.com/file/d/1Ni45s1sGi3KJppZ4tBNjcTTGyai2sTcO/view?usp=sharing",
            Russian: "https://drive.google.com/file/d/1kEBbZ8q5MsqUvZ_v6kjkWj7MlK35orZn/view?usp=sharing",
        },
        description: "This guide explores the evolution, principles, and practices of responsive design, focusing on mobile-first strategies, tools, frameworks, testing, optimization, and addressing common challenges to create universally accessible web experiences for a wide range of devices.",
    },

];

export const clientProjects = [
    {
        name: 'Photographer Website',
        description: 'Design and deploy a full-stack web app for a photographer, featuring services, pricing, FAQs, a blog, guide downloads, contact forms, and a real-time review system. And optimization for SEO and PWA (Progressive Web App) functionality.',
        link: 'https://nixie-photo.com/',
        image: nixie,
        skillsUsed: [
            {
                imageUrl: react,
                name: "React",
                type: "Frontend",
            },
            {
                imageUrl: nodejs,
                name: "Node.js",
                type: "Backend",
            },
            {
                imageUrl: express,
                name: "Express",
                type: "Backend",
            },
            {
                imageUrl: mongodb,
                name: "MongoDB",
                type: "Database",
            },
        ]
    },
    {
        name: 'AutoComfort Website',
        description: "Design and develop a website for an auto customization business, featuring a before/after slider of projects, a contact form, and optimization for SEO and PWA functionality. AI created images for the website's stylistic.",
        link: 'https://autocomfortusa.com/',
        image: autoComfort,
        skillsUsed: [
            {
                imageUrl: html,
                name: "HTML",
                type: "Frontend",
            },
            {
                imageUrl: css,
                name: "CSS",
                type: "Frontend",
            },
            {
                imageUrl: javascript,
                name: "JavaScript",
                type: "Frontend",
            },
        ]
    },
    {
        name: 'MEK Metal Forming',
        description: "Design and develop a mobile-first website for MEK Metal Forming with essential features like a service carousel, detailed company insights, interactive CSS animations, and optimized for speed and SEO. The site also functions as a PWA for enhanced user experience.",
        link: 'https://mekmetalforming.com/',
        image: mek_metal,
        skillsUsed: [
            {
                imageUrl: html,
                name: "HTML",
                type: "Frontend",
            },
            {
                imageUrl: css,
                name: "CSS",
                type: "Frontend",
            },
            {
                imageUrl: javascript,
                name: "JavaScript",
                type: "Frontend",
            },
        ]
    },
    {
        name: 'Handyman Service',
        description: "Design and develop a full stack website with AI-enhanced imagery, user reviews, responsive design, interactive animations, and SEO optimization, all integrated into a PWA.",
        link: 'https://torontosbesthandyman.com/',
        image: handy_man,
        skillsUsed: [
            {
                imageUrl: html,
                name: "HTML",
                type: "Frontend",
            },
            {
                imageUrl: css,
                name: "CSS",
                type: "Frontend",
            },
            {
                imageUrl: javascript,
                name: "JavaScript",
                type: "Frontend",
            },
            {
                imageUrl: mongodb,
                name: "MongoDB",
                type: "Database",
            },
            {
                imageUrl: nodejs,
                name: "Node.js",
                type: "Backend",
            },
            {
                imageUrl: express,
                name: "Express",
                type: "Backend",
            },
        ]
    },
]