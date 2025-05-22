import portfolioImage from "../assets/portfolio.png";
import greekMythologyImage from "../assets/greek-mythology.png";
import ethTxExplorerImage from "../assets/eth-tx-explorer.png";

const projects = [
    {
        title: "React Portfolio Template",
        description:
            "Personal website built with React and Tailwind CSS to showcase projects and skills.",
        link: "https://github.com/Cadjenovic/react-portfolio-template",
        image: portfolioImage
    },
    {
        title: "Greek Mythology",
        description: "A place to explore deities of the Ancient Greece.",
        link: "https://greek-mythology.netlify.app",
        image: greekMythologyImage
    },
    {
        title: "Ethereum Transaction Explorer",
        description:
            "Tool that allows you to take a closer look at specific transactions, debug stack trace and visualize gas usage.",
        link: "https://greek-mythology.netlify.app",
        image: ethTxExplorerImage
    }
];

const Projects = () => {
    return (
        <section
            id='projects'
            className='border-t border-gray-200 dark:border-gray-700 py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300'
        >
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200'>
                Projects
            </h2>
            <div className='grid gap-8 md:grid-cols-2 max-w-6xl mx-auto'>
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-300'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-48 object-cover rounded-t-xl'
                        />
                        <div className='p-6'>
                            <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>
                                {project.title}
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-4'>
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium py-2 px-4 rounded-full shadow-md hover:scale-105 hover:brightness-110 transition-all duration-300'
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
