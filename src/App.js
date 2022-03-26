//components
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Products from "./components/Products";
import Specialists from "./components/Specialists";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <Products />
      <Specialists />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
