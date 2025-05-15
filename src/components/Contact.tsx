const Contact = () => {
    return (
        <section
            id='contact'
            className='border-t border-gray-200 py-16 px-4 bg-blue-50'
        >
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
                Contact
            </h2>
            <p className='text-center text-gray-600 mt-6'>
                Email:{" "}
                <a
                    href='mailto:your@email.com'
                    className='text-blue-600 hover:underline'
                >
                    lukacadjenovic24@gmail.com
                </a>
            </p>
        </section>
    );
};

export default Contact;
