import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id='hero'
            className='relative h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 overflow-hidden'
        >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-30 rounded-full blur-3xl z-0' />

            <motion.div
                className='relative z-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white'>
                    Luka Cadjenovic
                </h1>
                <p className='text-xl md:text-2xl text-gray-600 mb-6 dark:text-gray-300'>
                    <span className='text-indigo-400 dark:text-indigo-300'>
                        Software Engineer
                    </span>{" "}
                    • TypeScript & React
                </p>
                <a
                    href='#projects'
                    className='inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300'
                >
                    View My Work
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
