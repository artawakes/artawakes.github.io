// Sample project data structure
export default {
    // Basic info
    title: "Human Centered Design",
    subtitle: "Implementing human-centered design principles to create more intuitive and user-friendly digital experiences across multiple projects.",
    description: "Implementing human-centered design principles to create more intuitive and user-friendly digital experiences",
    keywords: ["Human Centered Design", "UX Design", "User Research", "Design Thinking"],
    
    // Tags display on the project page
    tags: ["UX Design", "User Research", "Design Thinking"],
    
    // Overview text
    overview: [
        "This project focused on implementing human-centered design principles across various digital products and services. The goal was to create more intuitive, accessible, and user-friendly experiences by deeply understanding user needs, behaviors, and pain points.",
        "Through a comprehensive approach combining research, design, and implementation, we were able to significantly improve user experiences across multiple platforms and products."
    ],
    
    // Project details
    details: {
        client: "Multiple Projects",
        timeline: "18 months",
        role: "Lead UX Designer",
        deliverables: "User Research, Design Solutions, Interactive Prototypes, Implementation Guidelines"
    },
    
    // Feature image with caption
    featureImage: {
        src: "../../@Assets/human-centered-design/research-methods.jpg",
        alt: "Research Methods Overview",
        caption: "Overview of human-centered design research methodologies and frameworks"
    },
    
    // Process steps
    process: [
        {
            title: "Research Phase",
            content: [
                "Conducted comprehensive user interviews and surveys to understand user needs and behaviors",
                "Created detailed user personas and journey maps to visualize user experiences",
                "Analyzed user behavior data to identify patterns and opportunities",
                "Identified key pain points and areas for improvement"
            ],
            images: [
                {
                    src: "../../@Assets/human-centered-design/user-personas.jpg",
                    alt: "User Personas"
                }
            ]
        },
        {
            title: "Design Phase",
            content: [
                "Developed user-centered solutions based on research findings",
                "Created interactive prototypes for testing and validation",
                "Conducted extensive usability testing sessions",
                "Iteratively refined designs based on user feedback"
            ],
            images: [
                {
                    src: "../../@Assets/human-centered-design/design-process.jpg",
                    alt: "Design Process Framework"
                }
            ]
        },
        {
            title: "Implementation & Results",
            content: [
                "Collaborated closely with development teams to ensure proper implementation",
                "Monitored user feedback and performance metrics",
                "Made continuous improvements based on real-world usage data"
            ],
            images: [
                {
                    src: "../../@Assets/human-centered-design/case-studies.jpg",
                    alt: "Case Studies Results"
                }
            ],
            outcomes: [
                "45% increase in user satisfaction scores",
                "30% reduction in user errors",
                "50% decrease in onboarding time",
                "35% improvement in task completion rates",
                "40% increase in mobile app user engagement",
                "60% improvement in enterprise platform task completion",
                "Enhanced accessibility meeting WCAG 2.1 standards"
            ]
        }
    ],
    
    // Key Projects and Impact as reflections
    reflections: [
        "The implementation of human-centered design principles led to significant improvements across multiple projects, including a mobile app redesign that achieved a 40% increase in user engagement and a 25% reduction in support tickets, and an enterprise platform enhancement that resulted in a 60% improvement in task completion rates.",
        "The project's success demonstrated the value of putting users at the center of the design process, resulting in more intuitive, accessible, and efficient digital experiences. The implementation of WCAG 2.1 accessibility standards further ensured that our solutions were inclusive and usable for all users."
    ],
    
    // Navigation to other projects
    navigation: {
        prev: {
            title: "Fresh2Design Rebrand",
            url: "../fresh2design/index.html"
        },
        next: {
            title: "Enterprise Search",
            url: "../enterprise-search/index.html"
        }
    }
}; 