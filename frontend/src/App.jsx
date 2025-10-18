import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Trades from "./pages/Trades";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Trades />
      <Portfolio />
      <Footer />
    </>
  );
}
export default App;
