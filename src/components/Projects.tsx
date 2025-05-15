import greekMythologyImage from "../assets/greek-mythology.png";

const projects = [
    {
        title: "React Portfolio Template",
        description:
            "Personal website built with React and Tailwind CSS to showcase projects and skills.",
        link: "https://github.com/Cadjenovic/react-portfolio-template",
        image: "https://via.placeholder.com/400x200"
    },
    {
        title: "Greek Mythology",
        description: "A place to explore deities of the Ancient Greece.",
        link: "https://greek-mythology.netlify.app",
        image: greekMythologyImage
    }
];

const Projects = () => {
    return (
        <section
            id='projects'
            className='border-t border-gray-200 py-16 px-4 bg-white'
        >
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
                Projects
            </h2>
            <div className='grid gap-8 md:grid-cols-2 max-w-6xl mx-auto'>
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 duration-300'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-48 object-cover rounded-t-xl'
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
