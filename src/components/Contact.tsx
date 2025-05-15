const Contact = () => {
    return (
        <section id='contact' className='py-16 px-4 bg-gray-100'>
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
                Contact
            </h2>
            <div className='max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md'>
                <form>
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 font-semibold mb-2'
                            htmlFor='name'
                        >
                            Name
                        </label>
                        <input
                            className='w-full border border-gray-300 rounded px-4 py-2'
                            type='text'
                            id='name'
                            placeholder='Your Name'
                            disabled
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 font-semibold mb-2'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            className='w-full border border-gray-300 rounded px-4 py-2'
                            type='email'
                            id='email'
                            placeholder='your@email.com'
                            disabled
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            className='block text-gray-700 font-semibold mb-2'
                            htmlFor='message'
                        >
                            Message
                        </label>
                        <textarea
                            className='w-full border border-gray-300 rounded px-4 py-2 h-32'
                            id='message'
                            placeholder='Your message...'
                            disabled
                        />
                    </div>
                    <button
                        type='submit'
                        disabled
                        className='w-full bg-gray-400 text-white font-semibold py-2 px-4 rounded cursor-not-allowed'
                    >
                        Submit (disabled for demo)
                    </button>
                </form>
                <p className='text-center text-gray-600 mt-6'>
                    Or just email me directly:{" "}
                    <a
                        href='mailto:your@email.com'
                        className='text-blue-600 hover:underline'
                    >
                        lukacadjenovic24@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
