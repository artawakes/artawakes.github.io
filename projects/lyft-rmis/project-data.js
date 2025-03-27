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
        src: "../../@Assets/lyft-rmis/rmis-dashboard.jpg",
        alt: "RMIS Dashboard Interface",
        caption: "New RMIS dashboard interface showcasing improved claim handling workflow"
    },
    
    // Process steps
    process: [
        {
            title: "Research & Analysis",
            content: [
                "Conducted user interviews with claim handlers to understand their workflow and pain points",
                "Performed comprehensive workflow analysis to identify optimization opportunities",
                "Reviewed system architecture to plan for scalability",
                "Developed navigation framework strategy for v2.0"
            ],
            images: [
                {
                    src: "../../@Assets/lyft-rmis/claims-workflow.jpg",
                    alt: "Claims Processing Workflow"
                },
                {
                    src: "../../@Assets/lyft-rmis/navigation-framework.jpg",
                    alt: "New Navigation Framework"
                }
            ]
        },
        {
            title: "Design & Development",
            content: [
                "Created MVP features focused on streamlining claims processing workflow",
                "Designed enhanced financial prediction tools for better cost management",
                "Developed integrated notification system for improved communication",
                "Implemented real-time claim status tracking capabilities"
            ],
            images: [
                {
                    src: "../../@Assets/lyft-rmis/financial-predictions.jpg",
                    alt: "Financial Predictions Interface"
                }
            ]
        },
        {
            title: "Implementation & Results",
            content: [
                "Successfully launched the new RMIS system with improved features and scalable architecture",
                "Integrated seamlessly with the DART system for efficient claim processing"
            ],
            outcomes: [
                "Improved financial prediction accuracy",
                "Reduced claim resolution time",
                "Enhanced user efficiency for claim handlers",
                "Successfully implemented scalable navigation framework",
                "Achieved seamless integration with DART system"
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
            title: "Lyft Driver App",
            url: "../lyft-driver-app/index.html"
        },
        next: {
            title: "Lyft DART",
            url: "../lyft-dart/index.html"
        }
    }
}; 