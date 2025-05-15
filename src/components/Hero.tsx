const Hero = () => {
    return (
        <section
            id='hero'
            className='h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4'
        >
            <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gray-800'>
                Luka Cadjenovic
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-6'>
                Software Engineer • TypeScript Specialist
            </p>
            <a
                href='#projects'
                className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition'
            >
                View My Work
            </a>
        </section>
    );
};

export default Hero;
