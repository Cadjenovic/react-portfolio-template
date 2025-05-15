const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
            <div className='max-w-6xl mx-auto px-4 py-3 flex justify-center items-center'>
                <ul className='flex space-x-16 text-gray-700 font-medium'>
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
            </div>
        </nav>
    );
};

export default Navbar;
