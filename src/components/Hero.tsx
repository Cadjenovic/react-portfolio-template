import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id='hero'
            className='h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 via-white to-white'
        >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-30 rounded-full blur-3xl z-0' />

            <motion.div
                className='relative z-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gray-900'>
                    Luka Cadjenovic
                </h1>
                <p className='text-xl md:text-2xl text-gray-600 mb-6'>
                    <span className='text-blue-600'>Software Engineer</span> •
                    TypeScript Specialist
                </p>
                <a
                    href='#projects'
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition'
                >
                    View My Work
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
