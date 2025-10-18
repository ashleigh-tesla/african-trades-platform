import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">
        African <span className="text-yellow-300">Trades</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="hover:text-yellow-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-300">
            Trades
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-300">
            Portfolios
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-orange-700 flex flex-col space-y-3 p-4 text-center md:hidden">
          <li>
            <a href="#" className="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Trades
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Portfolios
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
