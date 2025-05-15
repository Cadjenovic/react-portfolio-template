import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-200 dark:border-gray-700'>
            <div className='max-w-6xl mx-auto px-4 py-3 grid grid-cols-[1fr_auto_1fr] items-center'>
                <div></div>

                <ul className='flex space-x-8 justify-center text-gray-700 dark:text-gray-200 font-medium'>
                    <li>
                        <a
                            href='#home'
                            className='hover:text-blue-600 dark:hover:text-blue-400'
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href='#projects'
                            className='hover:text-blue-600 dark:hover:text-blue-400'
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href='#contact'
                            className='hover:text-blue-600 dark:hover:text-blue-400'
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className='flex justify-end'>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
