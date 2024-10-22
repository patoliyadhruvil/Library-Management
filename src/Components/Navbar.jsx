import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white bg-opacity-90 sticky top-0 z-20 shadow-md transition-shadow">
            <div className="container mx-auto flex justify-between items-center p-5">
                <h2 className="text-3xl font-bold text-black">Books-Library</h2>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search Books..."
                        className="hidden md:block px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md placeholder-gray-400 transition duration-200 ease-in-out"
                    />
                    <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-black">
                        <li className="hover:text-blue-600 transition-colors"><Link to='/'>Home</Link></li>
                        <li className="hover:text-blue-600 transition-colors"><Link to='/browsebook'>Browse Books</Link></li>
                        <li className="hover:text-blue-600 transition-colors"><Link to="/addbooks">Add Books</Link></li>
                    </ul>
                    <div className="md:hidden">
                        <HiOutlineMenu className="w-8 h-8 text-black cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </div>
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-black text-white p-5 transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <ul className="flex flex-col gap-4">
                    <li className="hover:text-blue-400 transition-colors"><Link to='/'>Home</Link></li>
                    <li className="hover:text-blue-400 transition-colors"><Link to='/browsebook'>Browse Books</Link></li>
                    <li className="hover:text-blue-400 transition-colors"><Link to="/addbooks">Add Books</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
