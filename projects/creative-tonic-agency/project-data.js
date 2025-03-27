// Sample project data structure
export default {
    // Basic info
    title: "Creative Tonic Agency",
    subtitle: "A fresh new look for Creative Tonic's design expertise, with a responsive structure and enhanced content presentation.",
    description: "Website redesign and brand evolution for Creative Tonic, Austin's award-winning brand innovation firm",
    keywords: ["Web Design", "Brand Design", "UX Design", "Visual Design"],
    
    // Tags display on the project page
    tags: ["Web Design", "Brand Design", "UX Design"],
    
    // Overview text
    overview: [
        "Creative Tonic needed a way to highlight their design expertise in a fresh new look, update their current framework, and highlight their thought leadership content. The focus was on creating a new responsive structure that could be quickly updated internally without developer assistance. Each project page also needed to be updated to match the full-width, cleaner, bold new look.",
        "Creative Tonic is an award-winning brand innovation firm. They help clients explore and discover the full potential of their brand by offering three main services: brand creation from a blank slate, brand refresh, and MVP brand evolution."
    ],
    
    // Project details
    details: {
        client: "Creative Tonic Agency",
        timeline: "3 months",
        role: "Interface Designer",
        deliverables: "Website Redesign, Brand Evolution, Responsive Structure"
    },
    
    // Feature image with caption
    featureImage: {
        src: "../../@Assets/creative-tonic/homepage-mockup.jpg",
        alt: "Creative Tonic Homepage Mockup",
        caption: "Final homepage design showcasing the new responsive structure"
    },
    
    // Process steps
    process: [
        {
            title: "Initial Wireframing",
            content: [
                "Created quick wireframes of the new homepage structure",
                "Developed HD mockups in Adobe XD for direction approval"
            ],
            images: [
                {
                    src: "../../@Assets/creative-tonic/homepage-wireframe.jpg",
                    alt: "Homepage Wireframe"
                }
            ]
        },
        {
            title: "Development",
            content: [
                "Built the project on a staging site using Wordpress with Visual Composer",
                "Custom build of Salient theme"
            ],
            images: [
                {
                    src: "../../@Assets/creative-tonic/about-page.jpg",
                    alt: "About Page Design"
                }
            ]
        },
        {
            title: "Visual Design",
            content: [
                "Created hero graphics in Photoshop",
                "Incorporated geometric shapes morphing into new forms to represent company pillars"
            ],
            images: [
                {
                    src: "../../@Assets/creative-tonic/project-page.jpg",
                    alt: "Project Page Design"
                }
            ],
            outcomes: [
                "Showcases design expertise",
                "Easy internal updates",
                "Impactful project presentation",
                "Enhanced thought leadership",
                "Consistent brand experience"
            ]
        }
    ],
    
    // Key Features as reflections
    reflections: [
        "The project successfully delivered a responsive design structure that allows for easy internal content management. The full-width project pages and modern geometric visual language effectively showcase Creative Tonic's work and expertise.",
        "The implementation of a robust content management system and thought leadership integration has enabled the team to maintain and update their content independently, achieving a key project goal."
    ],
    
    // Navigation to other projects
    navigation: {
        next: {
            title: "Human Centered Design",
            url: "../human-centered-design/index.html"
        }
    }
}; 