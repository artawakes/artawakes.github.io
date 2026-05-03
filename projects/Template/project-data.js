// Sample project data structure
export default {
    // Basic info
    title: "Project Title",
    subtitle: "Project subtitle or brief description",
    description: "Full meta description for SEO",
    keywords: ["Design Systems", "UX Research", "Prototyping"],
    
    // Tags display on the project page
    tags: ["Design System", "UX Design", "User Research"],
    
    // Overview text (each array item is a paragraph)
    overview: [
        "First paragraph of the project overview. This should provide context about what the project entailed.",
        "Second paragraph discussing challenges and goals of the project."
    ],
    
    // Project details
    details: {
        client: "Client Name",
        timeline: "Jan 2022 - Mar 2022",
        role: "Lead Designer",
        deliverables: "Design System, UI Kit, Documentation"
    },
    
    // Feature image with caption
    featureImage: {
        src: "./images/feature-image.jpg",
        alt: "Project feature image",
        caption: "Caption for the feature image"
    },
    
    // Process steps
    process: [
        {
            title: "Research & Discovery",
            content: [
                "Description of the research phase and methodologies used.",
                "Key findings that influenced the design direction."
            ],
            images: [
                {
                    src: "./images/research-1.jpg",
                    alt: "User research session"
                },
                {
                    src: "./images/research-2.jpg",
                    alt: "Competitive analysis"
                }
            ]
        },
        {
            title: "Design & Development",
            content: [
                "Description of the design process, including wireframes and prototypes.",
                "Explanation of key design decisions and iterations."
            ],
            images: [
                {
                    src: "./images/design-1.jpg",
                    alt: "Design iterations"
                }
            ]
        },
        {
            title: "Implementation & Results",
            content: [
                "Description of how the design was implemented and any challenges overcome."
            ],
            outcomes: [
                "Increased user engagement by 45%",
                "Reduced design inconsistencies across platforms",
                "Streamlined designer-developer handoff process"
            ]
        }
    ],
    
    // Reflections section (each array item is a paragraph)
    reflections: [
        "Reflection on what was learned from this project and how it contributed to professional growth.",
        "Discussion of what might be done differently with hindsight."
    ],
    
    // Navigation to other projects
    navigation: {
        prev: {
            title: "Previous Project Name",
            url: "../previous-project/index.html"
        },
        next: {
            title: "Next Project Name",
            url: "../next-project/index.html"
        }
    }
}; 