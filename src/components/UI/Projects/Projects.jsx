import './projects.css';

function Projects() {
    const professionalProjects = [
        {
            title: "Healthcare Mobile App",
            company: "Maskan Technologies",
            description: "Developed React Native components based on Figma designs for a mobile healthcare platform. Focused on user onboarding and appointment flows.",
            // storeLink: "https://play.google.com/store/apps/details?id=com.healthcare.app" // replace with real link if available
        },
        {
            title: "Maskan Docs Scanner (NPM Package)",
            company: "Maskan Technologies",
            description: "Collaborated with teammates to build and publish a custom React Native document scanning module. Published on NPM as 'maskan-docs-scannar'.",
           storeLink: "https://www.npmjs.com/package/maskan-docs-scannar"
        },

        {
            title: "MyCLNQ Health App",
            company: "MyCLNQ Health (Remote)",
            description: "Improved UI responsiveness and fixed cross-platform issues in a live React Native app. Contributed to performance improvements and user feedback.",
            storeLink: "https://play.google.com/store/apps/details?id=com.ssivixlab.MYCLNQ"
        },
        {
            title: "Vendor Task Manager App",
            company: "Zaniha Technologies",
            description: "Built a real-time task management system using React Native, Redux. Used daily by 500+ vendors for efficient task assignment."
        }
    ];

    const personalProjects = [
        {
            title: "PDF Generator App",
            description: "A React Native app to create and export custom PDF documents dynamically. Built using PDF-lib.",
            github: "https://github.com/syedluqmaan-dev/PDF-Generator-App.git"
        },
        {
            title: "Game Store UI App",
            description: "React Native UI for a fictional game store. Implements glassmorphism effects and smooth horizontal scroll animations.",
            github: "https://github.com/syedluqmaan-dev/Game-Store-UI-App.git"
        },
        {
            title: "Scroll Animation Website",
            description: "Landing page with scroll-based animations using AOS and React.js. Built for demo and design practice.",
            github: "https://github.com/syedluqmaan-dev/Scroll-Animation-Website.git",
            
        },
        {
            title: "Company Website",
            description: "A clean and responsive business landing page built with HTML, CSS, JS, and hosted on Firebase.",
            github: "https://github.com/syedluqmaan-dev/React-website-firebase-.git",
            demo: "https://zaniha.com"
        },
        {
            title: "Full Stack Blog Platform",
            description: "A blog platform with CRUD operations, authentication, and backend integration using React.js, Node.js, Express, and Tailwind CSS.",
            github: "https://github.com/syedluqmaan-dev/fullstack-blog-app.git",
            
        },
        {
            title: "Portfolio Website",
            description: "This portfolio you're viewing now. Built with React, styled for responsiveness, and deployed on Netlify.",
            github: "https://github.com/syedluqmaan-dev/Portfolio-Website.git",
           
        },


    ];

    const renderProfessionalProject = (project, index) => (
        <div key={index} className="project-card">
            <div className="project-info">
                <h3>{project.title}</h3>
                <p><em>{project.company}</em></p>
                <p>{project.description}</p>
                {project.storeLink && (
                    <a href={project.storeLink} target="_blank" rel="noopener noreferrer" className="github-link">
                        📱 View App
                    </a>
                )}
            </div>
        </div>
    );

    const renderPersonalProject = (project, index) => (
        <div key={index} className="project-card">
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                        🔗 View Code
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="github-link">
                        🌐 Live Demo
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-heading">Projects</h2>

            <h3 className="projects-subheading">Professional Projects</h3>
            <div className="projects-grid">
                {professionalProjects.map(renderProfessionalProject)}
            </div>

            <h3 className="projects-subheading">Personal Projects</h3>
            <div className="projects-grid">
                {personalProjects.map(renderPersonalProject)}
            </div>

            <div className="more-projects">
                <a
                    href="https://github.com/syedluqmaan-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    🔍 See More Projects on GitHub
                </a>
            </div>
        </div>
    );
}

export default Projects;
