// import { useState } from "react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
//       <h1 className="text-2xl font-bold tracking-wide">
//         African <span className="text-yellow-300">Trades</span>
//       </h1>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex space-x-6">
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Trades
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Portfolios
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Contact
//           </a>
//         </li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//         {menuOpen ? "✕" : "☰"}
//       </button>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <ul className="absolute top-16 left-0 w-full bg-orange-700 flex flex-col space-y-3 p-4 text-center md:hidden">
//           <li>
//             <a href="#" className="hover:text-yellow-300">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-300">
//               Trades
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-300">
//               Portfolios
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-300">
//               Contact
//             </a>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          African Trades
        </Link>

        <div className="space-x-4">
          <Link to="/browse" className="hover:text-indigo-500">
            Browse
          </Link>
          {user ? (
            <>
              <Link to="/upload" className="hover:text-indigo-500">
                Upload
              </Link>
              <Link to="/profile" className="hover:text-indigo-500">
                {user.name || "Profile"}
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded-md ml-3"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-500">
                Login
              </Link>
              <Link to="/register" className="hover:text-indigo-500">
                Register
              </Link>
            </>
          )}
        </div>
        <Notifications />
      </div>
    </nav>
  );
};

export default Navbar;
