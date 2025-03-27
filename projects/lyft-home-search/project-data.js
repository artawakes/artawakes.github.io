// Sample project data structure
export default {
    // Basic info
    title: "Lyft Home Search",
    subtitle: "Reimagining the search experience on Lyft's homepage to drive user engagement and increase ride bookings.",
    description: "Redesigning Lyft's home search experience to enhance user engagement and conversion",
    keywords: ["UX Design", "Search Experience", "User Interface", "Conversion Optimization"],
    
    // Tags display on the project page
    tags: ["UX Design", "Search Experience", "Conversion Optimization"],
    
    // Overview text
    overview: [
        "Lyft's homepage search functionality needed significant enhancement to improve the speed and accuracy of location searches, reduce user friction in the booking process, and increase conversion rates for ride bookings.",
        "The project focused on creating a more intuitive search experience while optimizing for mobile users and integrating real-time location data to provide a seamless booking process."
    ],
    
    // Project details
    details: {
        client: "Lyft",
        timeline: "6 months",
        role: "Senior UX Designer",
        deliverables: "Search Interface Design, Mobile Optimization, User Research, Implementation Guidelines"
    },
    
    // Feature image with caption
    featureImage: {
        src: "../../@Assets/lyft-home-search/search-interface.jpg",
        alt: "Search Interface Design",
        caption: "Redesigned search interface featuring predictive suggestions and smart location detection"
    },
    
    // Process steps
    process: [
        {
            title: "Research & Discovery",
            content: [
                "Conducted comprehensive user research including behavior analysis, search pattern studies, and usability testing to understand pain points in the existing search experience.",
                "Performed technical analysis of performance metrics, search algorithms, and API integration capabilities to identify optimization opportunities.",
                "Completed competitor analysis to benchmark against industry standards and identify potential differentiators."
            ],
            images: [
                {
                    src: "../../@Assets/lyft-home-search/search-interface.jpg",
                    alt: "Search Interface Design"
                },
                {
                    src: "../../@Assets/lyft-home-search/results-page.jpg",
                    alt: "Search Results Page"
                }
            ]
        },
        {
            title: "Design & Implementation",
            content: [
                "Redesigned the search interface with predictive suggestions and smart location detection to streamline the booking process.",
                "Developed a mobile-first search experience with optimized interaction patterns for touch interfaces.",
                "Integrated real-time pricing and ETA features to provide immediate feedback to users.",
                "Implemented a favorite locations feature to enhance repeat usage and user convenience."
            ],
            images: [
                {
                    src: "../../@Assets/lyft-home-search/filters-design.jpg",
                    alt: "Search Filters Design"
                },
                {
                    src: "../../@Assets/lyft-home-search/mobile-view.jpg",
                    alt: "Mobile Search Experience"
                }
            ]
        },
        {
            title: "Results & Impact",
            content: [
                "The redesigned search experience significantly improved user engagement and conversion metrics across all platforms.",
                "Key improvements included faster search times, reduced abandonment rates, and enhanced mobile usability."
            ],
            outcomes: [
                "35% increase in search completion rate",
                "45% reduction in search abandonment",
                "25% improvement in conversion rate",
                "60% faster average search time",
                "92% positive user feedback"
            ]
        }
    ],
    
    // Reflections section
    reflections: [
        "The project successfully transformed Lyft's home search experience into a more efficient and user-friendly interface. The implementation of predictive search, smart location detection, and real-time pricing features significantly improved the user experience and business metrics.",
        "The mobile-first approach and focus on performance optimization proved crucial in meeting modern user expectations and improving overall platform engagement."
    ],
    
    // Navigation to other projects
    navigation: {
        prev: {
            title: "Creative Tonic",
            url: "../creative-tonic/index.html"
        },
        next: {
            title: "Lyft Driver App",
            url: "../lyft-driver-app/index.html"
        }
    }
}; 