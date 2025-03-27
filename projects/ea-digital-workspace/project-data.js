// Sample project data structure
export default {
    // Basic info
    title: "EA Digital Workspace",
    subtitle: "Redesigning EA's intranet platform to create a modern, efficient digital workspace for 12,000+ employees.",
    description: "Redesigning EA's intranet platform to improve knowledge sharing and employee connectivity",
    keywords: ["Intranet Design", "UX Design", "Enterprise Platform", "Digital Workspace"],
    
    // Tags display on the project page
    tags: ["UX Design", "Enterprise Platform", "Information Architecture"],
    
    // Overview text
    overview: [
        "EA needed to modernize their intranet platform (EA World) to better serve as a central knowledge hub for their global workforce. The project focused on improving content discovery, enhancing user experience, and streamlining internal communications for over 12,000 employees.",
        "The main challenges included consolidating and organizing vast amounts of content from multiple owners, creating an intuitive navigation system for diverse user needs, migrating existing content seamlessly, developing a scalable content structure, and implementing effective search functionality."
    ],
    
    // Project details
    details: {
        client: "Electronic Arts",
        timeline: "12 months",
        role: "Interface and Experience Designer",
        deliverables: "Information Architecture, UX Design, Content Strategy"
    },
    
    // Feature image with caption
    featureImage: {
        src: "../../@Assets/ea-digital-workspace/homepage-design.jpg",
        alt: "EA Digital Workspace Homepage Design",
        caption: "New homepage design showcasing improved content discovery and navigation"
    },
    
    // Process steps
    process: [
        {
            title: "Discovery & Planning",
            content: [
                "Conducted content audit of existing intranet",
                "Interviewed content owners and stakeholders",
                "Analyzed user behavior and pain points",
                "Developed content migration strategy"
            ],
            images: [
                {
                    src: "../../@Assets/ea-digital-workspace/content-structure.jpg",
                    alt: "Content Structure Analysis"
                }
            ]
        },
        {
            title: "Design & Development",
            content: [
                "Created new information architecture",
                "Designed intuitive navigation system",
                "Developed responsive layouts",
                "Implemented advanced search functionality"
            ],
            images: [
                {
                    src: "../../@Assets/ea-digital-workspace/search-interface.jpg",
                    alt: "Search Interface Design"
                }
            ]
        },
        {
            title: "Implementation",
            content: [
                "Worked in 2-week agile sprints",
                "Conducted iterative user testing",
                "Coordinated with content owners",
                "Provided training and documentation"
            ],
            images: [
                {
                    src: "../../@Assets/ea-digital-workspace/mobile-view.jpg",
                    alt: "Mobile View Implementation"
                }
            ],
            outcomes: [
                "Improved content findability and accessibility",
                "Reduced time spent searching for information",
                "Increased employee engagement",
                "Streamlined content management process",
                "Enhanced internal communications efficiency"
            ]
        }
    ],
    
    // Key Features and Achievements as reflections
    reflections: [
        "The project successfully delivered a unified content management system with advanced search capabilities, personalized user dashboards, and an improved navigation structure. The mobile-responsive design and enhanced collaboration tools have significantly improved the way EA employees access and share information.",
        "Key achievements include the unified content structure, improved user experience, enhanced search functionality, successful content migration, and streamlined workflows, all contributing to a more efficient and engaging digital workspace for EA's global workforce."
    ],
    
    // Navigation to other projects
    navigation: {
        prev: {
            title: "EA Design System",
            url: "../ea-design-system/index.html"
        },
        next: {
            title: "EA Learning Management",
            url: "../ea-learning-management/index.html"
        }
    }
}; 