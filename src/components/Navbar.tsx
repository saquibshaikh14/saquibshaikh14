import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full bg-dark/90  backdrop-blur-sm border-b border-gray-800 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-2xl font-bold">Saquib</a>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-primary transition-colors">About</a>
                            </li>
                            <li>
                                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={() => { setIsOpen(!isOpen) }} className="md:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {!isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />)}
                        </svg>
                    </button>
                </div>
            </div>
            <div className={"md:hidden " + (isOpen ? "block" : "hidden")}>
                <ul className="text-gray-300 px-2 pb-3 space-y-1 pt-2" onClick={(e: React.SyntheticEvent<HTMLElement>) => { const target = e.target as HTMLElement; if (target.getAttribute("data-action") === 'close' && isOpen) setIsOpen(false); }}>
                    <li>
                        <a href="#" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">About</a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">Experience</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-primary transition-colors block px-3 py-2" data-action="close">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Navbar;