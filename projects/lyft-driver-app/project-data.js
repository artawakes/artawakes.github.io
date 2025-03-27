// Sample project data structure
export default {
    // Basic info
    title: "Lyft Driver App - DART",
    subtitle: "Accident Reporting Tool on Lyft's Driver App",
    description: "Redesigning the accident reporting experience to improve efficiency and empathy for both drivers and agents",
    keywords: ["UX Design", "Product Design", "Mobile App", "User Experience"],
    
    // Tags display on the project page
    tags: ["Product Design", "UX Design", "Mobile App"],
    
    // Overview text
    overview: [
        "Pre-COVID19, about 60% of accidents are reported by Drivers (~1300 per week), and 35% of the total accident reports are submitted on Driver In-app Accident Reporting (~750 per week). This project focused on improving the accident reporting experience to make it more efficient and empathetic.",
        "The challenge was to create a reporting process that would be painless for drivers in stressful situations while ensuring accurate data collection for agents to process claims efficiently."
    ],
    
    // Project details
    details: {
        client: "Lyft",
        timeline: "2019",
        role: "Lead Product Designer: Interface & experience. Supervised contractor support. Worked closely with the Engineer Manager, Project Manager and Developers.",
        deliverables: "Interface Design, User Experience, Documentation"
    },
    
    // Feature image with caption
    featureImage: {
        src: "../../@Assets/lyft-driver-app/hero.jpg",
        alt: "Lyft Driver App DART Interface",
        caption: "Driver Accident Reporting Tool (DART) interface showcasing the improved user experience"
    },
    
    // Process steps
    process: [
        {
            title: "Understanding the Problem",
            content: [
                "One third of the accidents reported via in-app were false negatives, issues not supported by the Risk team.",
                "Over 90% of the reports required agents to confirm data and correct the report manually, while phone-reported accidents were more accurate.",
                "Data showed that in-app usage of accident reporting was low, with drivers preferring to call agents by phone. Qualitative research revealed that drivers found the app confusing, time-consuming, and unsatisfactory."
            ],
            images: [
                {
                    src: "../../@Assets/lyft-driver-app/process.jpg",
                    alt: "Process Flow Diagram"
                },
                {
                    src: "../../@Assets/lyft-driver-app/user-journey.jpg",
                    alt: "User Journey Map"
                }
            ]
        },
        {
            title: "Design Constraints & Opportunities",
            content: [
                "Sensitivity in wording and imagery was crucial, as drivers might be in shock from an accident, dealing with injuries, or worried about financial impacts.",
                "The flow needed to be concise to accommodate users who might be in a hurry or distressed.",
                "Data accuracy was essential for clean backend storage and efficient processing.",
                "We identified opportunities to improve both driver and agent experiences through smart data collection and clearer communication."
            ]
        },
        {
            title: "Solutions & Implementation",
            content: [
                "Improved language communication and iconography to better define what constitutes an accident.",
                "Implemented telematic data capture from drivers' phones to automate field completion.",
                "Streamlined form fields and added in-line validation with conditional fields.",
                "Enhanced location selection and damage reporting capabilities."
            ],
            images: [
                {
                    src: "../../@Assets/lyft-driver-app/entry-point.jpg",
                    alt: "Entry Point Interface"
                },
                {
                    src: "../../@Assets/lyft-driver-app/accident-cause.jpg",
                    alt: "Accident Cause Selection"
                },
                {
                    src: "../../@Assets/lyft-driver-app/navigation-screen.jpg",
                    alt: "Location Selection Interface"
                },
                {
                    src: "../../@Assets/lyft-driver-app/damage-selector.jpg",
                    alt: "Damage Selection Interface"
                }
            ],
            outcomes: [
                "Reduced false-positive reports by clarifying the purpose of the reporting tool",
                "Improved data accuracy through automated field completion",
                "Streamlined the reporting process for drivers in stressful situations",
                "Enhanced location accuracy for proper insurance partner routing",
                "Improved damage reporting with primary and secondary damage fields"
            ]
        }
    ],
    
    // Reflections section
    reflections: [
        "The redesigned DART system successfully balanced the needs of both drivers and agents. For drivers, we created a more empathetic and efficient reporting process during stressful situations. For agents, we improved data accuracy and reduced the need for manual follow-ups.",
        "The project demonstrated the importance of understanding both user needs and business requirements, resulting in a solution that improved experiences while increasing operational efficiency."
    ],
    
    // Navigation to other projects
    navigation: {
        prev: {
            title: "Enterprise Search",
            url: "../enterprise-search/index.html"
        },
        next: {
            title: "Creative Tonic",
            url: "../creative-tonic/index.html"
        }
    }
}; 