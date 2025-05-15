import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme !== null) return savedTheme === "dark";
        return true;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <label className='flex items-center cursor-pointer ml-auto'>
            <div className='relative'>
                <input
                    type='checkbox'
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className='sr-only'
                />
                <div className='w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner transition' />
                <div
                    className={`dot absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow-md transition transform ${
                        darkMode ? "translate-x-full" : ""
                    }`}
                />
            </div>
            <span className='ml-3 text-sm text-gray-600 dark:text-gray-300'>
                {darkMode ? "Dark" : "Light"}
            </span>
        </label>
    );
};

export default ThemeToggle;
