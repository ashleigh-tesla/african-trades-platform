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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadPortfolio from "./pages/UploadPortfolio";
import BrowseTrades from "./pages/BrowseTrades";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadPortfolio />} />
        <Route path="/browse" element={<BrowseTrades />} />
      </Routes>
    </Router>
  );
}

export default App;
