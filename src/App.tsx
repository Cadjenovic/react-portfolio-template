import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className='min-h-screen font-sans text-gray-800 bg-gray-50 dark:text-gray-200 dark:bg-gray-900'>
            <Navbar />
            <Hero />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
