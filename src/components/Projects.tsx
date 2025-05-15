const projects = [
    {
        title: "React Portfolio Template",
        description:
            "Personal website built with React and Tailwind CSS to showcase projects and skills.",
        link: "https://github.com/Cadjenovic/react-portfolio-template",
        image: "https://via.placeholder.com/400x200" // Replace with actual screenshot later
    },
    {
        title: "To-Do App (Coming Soon)",
        description:
            "A simple task tracker with filtering, persistence, and TypeScript.",
        link: "#",
        image: "https://via.placeholder.com/400x200"
    }
];

const Projects = () => {
    return (
        <section id='projects' className='py-16 px-4 bg-white'>
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
                Projects
            </h2>
            <div className='grid gap-8 md:grid-cols-2 max-w-6xl mx-auto'>
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className='bg-gray-100 rounded-lg shadow-md overflow-hidden'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                                {project.title}
                            </h3>
                            <p className='text-gray-600 mb-4'>
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
