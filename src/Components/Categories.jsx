import Tabbutton from "./Tabbutton";

const Categories = () => {
    return (
        <div className="md:mt-12 mt-8 bg-gradient-to-r from-white via-gray-50 to-gray-100 flex flex-col justify-center items-center py-12 shadow-lg rounded-lg">
            <h2 className="font-medium font-Poppins text-4xl mb-8 text-gray-900">Browse Categories</h2>
            <div className="flex flex-wrap gap-6 px-6 py-4 w-fit rounded-lg">
                <Tabbutton
                    to='/books/science'
                    className="bg-blue-100 text-blue-700 px-5 py-3 rounded-md font-medium transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg"
                >
                    Science
                </Tabbutton>
                <Tabbutton
                    to='/books/fiction'
                    className="bg-purple-100 text-purple-700 px-5 py-3 rounded-md font-medium transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white hover:shadow-lg"
                >
                    Fiction
                </Tabbutton>
                <Tabbutton
                    to='/books/non_fiction'
                    className="bg-green-100 text-green-700 px-5 py-3 rounded-md font-medium transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white hover:shadow-lg"
                >
                    Non-Fiction
                </Tabbutton>
                <Tabbutton
                    to='/books/fantacy'
                    className="bg-yellow-100 text-yellow-700 px-5 py-3 rounded-md font-medium transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white hover:shadow-lg"
                >
                    Fantasy
                </Tabbutton>
                <Tabbutton
                    to='/books/crime'
                    className="bg-red-100 text-red-700 px-5 py-3 rounded-md font-medium transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white hover:shadow-lg"
                >
                    Crime
                </Tabbutton>
            </div>
        </div>
    );
}

export default Categories;
