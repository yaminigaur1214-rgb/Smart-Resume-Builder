import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <span className="text-2xl">📄</span>
          <h1 className="text-xl md:text-2xl font-bold text-blue-600">
            Smart Resume Builder
          </h1>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">

          <Link
            to="/"
            className="text-gray-600 font-medium hover:text-blue-600 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/my-resumes"
            className="text-gray-600 font-medium hover:text-blue-600 transition duration-200"
          >
            My Resumes
          </Link>

          <Link
            to="/builder"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200 shadow-sm"
          >
            + Create Resume
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;