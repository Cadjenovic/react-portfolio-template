const Contact = () => {
    return (
        <section
            id='contact'
            className='border-t border-gray-200 dark:border-gray-700 py-16 px-4 bg-blue-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
        >
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-12 dark:text-gray-200'>
                Contact
            </h2>
            <p className='text-center text-gray-600 dark:text-gray-200 mt-6'>
                Email:{" "}
                <a
                    href='mailto:your@email.com'
                    className='text-blue-600 hover:underline'
                >
                    lukacadjenovic24@gmail.com
                </a>
                Github:{" "}
                <a
                    href='https://github.com/Cadjenovic'
                    className='text-blue-600 hover:underline'
                >
                    Cadjenovic
                </a>
            </p>
        </section>
    );
};

export default Contact;
