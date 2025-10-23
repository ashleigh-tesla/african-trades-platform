// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Trades from "./pages/Trades";
// import Portfolio from "./pages/Portfolio";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <Trades />
//       <Portfolio />
//       <Footer />
//     </>
//   );
// }
// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import UploadPortfolio from "./pages/UploadPortfolio";
// import BrowseTrades from "./pages/BrowseTrades";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/upload" element={<UploadPortfolio />} />
//         <Route path="/browse" element={<BrowseTrades />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadPortfolio from "./pages/UploadPortfolio";
import BrowseTrades from "./pages/BrowseTrades";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import TradepersonProfile from "./pages/TradepersonProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />

          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <UploadPortfolio />
                  </ProtectedRoute>
                }
              />
              <Route path="/browse" element={<BrowseTrades />} />
              <Route path="/profile/:id" element={<TradepersonProfile />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                    {/* <Profile /> */}
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
