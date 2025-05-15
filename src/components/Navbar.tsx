import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-200'>
            <div className='max-w-6xl mx-auto px-4 py-3 flex justify-center items-center'>
                <ul className='flex space-x-16 text-gray-800 font-medium'>
                    <li>
                        <a href='#hero' className='hover:text-blue-600'>
                            Hero
                        </a>
                    </li>
                    <li>
                        <a href='#projects' className='hover:text-blue-600'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#contact' className='hover:text-blue-600'>
                            Contact
                        </a>
                    </li>
                </ul>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
