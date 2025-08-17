// Sample project data structure
export default {
    // Basic info
    title: "Lyft RMIS",
    subtitle: "Lowering Lyft's costs through better predictions and more efficient claim handling process",
    description: "MVP Features to launch + New Scalable Navigation Framework for v2.0",
    keywords: ["RMIS", "Risk Management", "UX Design", "Insurance Technology", "Claims Handling"],
    
    // Tags display on the project page
    tags: ["Risk Management", "Claims Handling", "UX Design"],
    
    // Overview text
    overview: [
        "Lyft needed a way to better handle accident claims in-house to achieve better financial predictions and lower claim resolution time rates by making more efficient tools for claim handlers.",
        "RMIS (Risk Management Information System) is the claim handling back-end system for Lyft. The Drive Accident Reporting Tool app allows drivers to submit claims after they have had an accident. On the Lyft side, our users, Lyft employees and insurance partners, receive the first notice of loss via our software RMIS."
    ],
    
    // Project details
    details: {
        client: "Lyft",
        timeline: "2019-2020",
        role: "Lead Product Designer",
        deliverables: "MVP Features, Navigation Framework, User Interface Design, Integration Guidelines"
    },
    
    // Feature image with caption
    featureImage: {
        src: "./Images/1.jpg",
        alt: "RMIS Dashboard Interface",
        caption: "Lyft Risk Management Information System (RMIS)"
    },
    
    // Process steps
    process: [
        {
            title: "Research & Discovery",
            content: [
                "Conducted user interviews with claim handlers to understand their workflow and pain points",
                "Performed comprehensive analysis of the current RMIS system to identify optimization opportunities",
                "Collected user needs assessment and interview insights to guide development",
                "Conducted competitive analysis to identify industry best practices"
            ],
            images: [
                {
                    src: "./Images/2.jpeg",
                    alt: "Initial Project Brief"
                }
            ],
            outcomes: [
                "Identified key pain points in the current system",
                "Established clear user requirements",
                "Defined project scope and priorities"
            ]
        },
        {
            title: "User Roles & Responsibilities",
            content: [
                "Our research identified several key user types with distinct needs and workflows:",
                "FNOL Associates process accident reports, document case details, and manage vehicle deactivation",
                "Claim Advocates guide high-value claims through the entire lifecycle with precision and accuracy",
                "Claim Managers monitor claim cycle health, track resolution velocity, and evaluate staff performance metrics",
                "Claims Operations handle specialized cases, manage exceptions, and resolve complex edge cases",
                "Future expansion plans include extending access to Legal teams, Drivers, Riders, and Insurance Partner Adjusters"
            ],
            outcomes: [
                "Established distinct user personas with specific needs and permissions",
                "Created user journey maps for each role's primary workflows",
                "Determined critical features for each user type"
            ]
        },
        {
            title: "System Architecture Analysis",
            content: [
                "Examined the existing system structure to identify optimization opportunities",
                "Mapped current user interaction patterns across three major categories:",
                "Data Entry & Documentation: Claim intake, information gathering, notation and minor data corrections",
                "Decision Making & Authorization: Claim budget forecasting, status updates, and elevated system permissions",
                "Analysis & Oversight: Performance dashboards, cycle time visualization, and workload distribution management"
            ],
            images: [
                {
                    src: "./Images/3a.jpg",
                    alt: "Current RMIS System"
                },
                {
                    src: "./Images/3b.jpg",
                    alt: "Current RMIS System - Detail View"
                }
            ],
            outcomes: [
                "Created comprehensive architecture blueprint",
                "Identified system bottlenecks and inefficiencies",
                "Developed structured approach to system redesign"
            ]
        },
        {
            title: "User Needs Assessment",
            content: [
                "Analyzed user feedback to identify key requirements",
                "Prioritized features based on user needs",
                "Documented insights from user interviews",
                "Created user personas to guide design decisions"
            ],
            images: [
                {
                    src: "./Images/4a.png",
                    alt: "User Needs Assessment - Part 1"
                },
                {
                    src: "./Images/4b.png",
                    alt: "User Needs Assessment - Part 2"
                }
            ],
            outcomes: [
                "Developed comprehensive user requirement documentation",
                "Created prioritized feature list",
                "Established user success metrics"
            ]
        },
        {
            title: "Information Architecture & User Flows",
            content: [
                "Developed comprehensive information architecture for the new system",
                "Created detailed user flow maps to streamline claims processing workflow",
                "Designed initial wireframes to establish core functionality",
                "Conducted user testing to validate early concepts"
            ],
            images: [
                {
                    src: "./Images/7.png",
                    alt: "Information Architecture"
                },
                {
                    src: "./Images/9.jpeg",
                    alt: "User Flow Mapping"
                },
                {
                    src: "./Images/11.png",
                    alt: "User Testing Setup"
                }
            ],
            outcomes: [
                "Established logical information structure",
                "Improved navigation framework for v2.0",
                "Validated core concepts with users early in the process"
            ]
        },
        {
            title: "Design System & Visual Design",
            content: [
                "Created comprehensive design system with consistent components",
                "Developed color palette and typography guidelines",
                "Built component library for efficient implementation",
                "Implemented visual design explorations to align with Lyft's brand"
            ],
            images: [
                {
                    src: "./Images/18a.png",
                    alt: "Color Palette"
                },
                {
                    src: "./Images/19a.png",
                    alt: "Component Library"
                },
                {
                    src: "./Images/26a.png",
                    alt: "Design System Documentation"
                }
            ],
            outcomes: [
                "Consistent visual language across the platform",
                "Efficient handoff to development team",
                "Scalable design system for future enhancements"
            ]
        },
        {
            title: "Prototyping & Refinement",
            content: [
                "Developed high-fidelity prototypes for key user flows",
                "Iterated based on user feedback and testing",
                "Refined interaction design for optimal usability",
                "Implemented accessibility considerations throughout"
            ],
            images: [
                {
                    src: "./Images/24a.png",
                    alt: "High-Fidelity Prototypes"
                },
                {
                    src: "./Images/21a.png",
                    alt: "User Feedback Integration"
                },
                {
                    src: "./Images/22.png",
                    alt: "Accessibility Considerations"
                }
            ],
            outcomes: [
                "Improved user experience based on direct feedback",
                "Addressed accessibility requirements",
                "Finalized interaction patterns for development"
            ]
        },
        {
            title: "Implementation & Results",
            content: [
                "Delivered final design specifications and documentation",
                "Provided implementation guidelines for development team",
                "Supported launch and measured project outcomes",
                "Established metrics for ongoing evaluation"
            ],
            images: [
                {
                    src: "./Images/25a.png",
                    alt: "Final Design Screens"
                },
                {
                    src: "./Images/28.png",
                    alt: "Implementation Guidelines"
                },
                {
                    src: "./Images/29.png",
                    alt: "Project Outcome & Metrics"
                }
            ],
            outcomes: [
                "Successfully launched RMIS 2.0 with improved features",
                "Reduced claim resolution time by 28%",
                "Improved financial prediction accuracy by 40%",
                "Enhanced user efficiency for claim handlers",
                "Seamless integration with DART system"
            ]
        }
    ],
    
    // Reflections section
    reflections: [
        "The RMIS project successfully transformed Lyft's claim handling process, creating a more efficient system for both claim handlers and insurance partners. The implementation of enhanced financial prediction tools and streamlined workflows significantly improved operational efficiency.",
        "The development of a scalable navigation framework for v2.0 ensured the system's ability to grow with Lyft's needs, while the seamless integration with DART created a cohesive experience for all users involved in the claims process."
    ],
    
    // Navigation to other projects
    navigation: {
        prev: {
            title: "Lyft Home Search",
            url: "../lyft-home-search/index.html"
        },
        next: {
            title: "EA Design System",
            url: "../ea-design-system/index.html"
        }
    }
}; 