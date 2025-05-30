import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-orange-600">Car</div>
      <ul className="flex space-x-6 text-gray-700 font-semibold">
        <li>
          <Link to="/" className="hover:text-orange-500 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:text-orange-500 transition-colors duration-200">
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/comparison" className="hover:text-orange-500 transition-colors duration-200">
            Compare
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500 transition-colors duration-200">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
