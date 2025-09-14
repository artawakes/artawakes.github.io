// Sample project data structure
export default {
    // Basic info
    title: "Lyft Driver App",
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
        src: "./Images/34abed72-1155-4d81-a261-d90d00160a05.jpg",
        alt: "Lyft Driver App",
        caption: "Driver-focused application redesign for Lyft"
    },
    
    // Process steps
    process: [
        {
            title: "Research & Discovery",
            content: [
                "Conducted user research with Lyft drivers to understand their workflow and pain points",
                "Analyzed the existing driver app to identify areas for improvement",
                "Studied accident reporting processes and driver communication needs"
            ],
            images: [
                {
                    src: "./Images/18a3ea79-c34e-47c5-a0bb-364fd0a8ad7b_rw_1200.jpg",
                    alt: "Driver App Interface"
                },
                {
                    src: "./Images/bcf1ac7e-471a-408f-b309-3f4dc23b95bd_rw_1920.jpg",
                    alt: "Driver Research Process"
                },
                {
                    src: "./Images/dc5f0573-6681-400e-a433-55e54888ce8a_rw_3840.jpg",
                    alt: "User Journey Mapping"
                }
            ],
            outcomes: [
                "Identified key driver pain points",
                "Mapped user journey and touchpoints",
                "Defined improvement opportunities"
            ]
        },
        {
            title: "Design & Implementation",
            content: [
                "Redesigned the driver app interface to improve usability and reduce cognitive load",
                "Created streamlined accident reporting flow with clear step-by-step guidance",
                "Implemented improved navigation and information architecture",
                "Added real-time communication features for driver support"
            ],
            images: [
                {
                    src: "./Images/143b0232-a036-4ec6-a5df-e1722a10ed21_rw_1920.jpg",
                    alt: "Accident Cause Selection"
                },
                {
                    src: "./Images/62cd093b-7fba-4c93-a8f2-5f90d5176ac6_rw_1920.jpg",
                    alt: "Entry Point Design"
                },
                {
                    src: "./Images/588241db-680c-4d2b-8fc4-6efd78d936da_rw_3840.jpg",
                    alt: "Navigation Screen"
                },
                {
                    src: "./Images/f5139e3a-bf09-45dd-9238-655691f200cf_rw_1920.jpeg",
                    alt: "Damage Selector"
                }
            ],
            outcomes: [
                "Improved driver app usability",
                "Streamlined accident reporting process",
                "Enhanced driver communication tools"
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
            title: "Salesforce CRM",
            url: "../salesforce-crm/index.html"
        },
        next: {
            title: "Lyft Home Search",
            url: "../lyft-home-search/index.html"
        }
    }
}; 