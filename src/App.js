import "./App.css";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";

import CoffeeDetails from "./components/CoffeeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element ={<Homepage/>}></Route>
        <Route exact path="/about" element = {<About/>}></Route>
        <Route exact path = "/profile" element = {<Profile/>}></Route>
        <Route exact path = "/coffee/:coffeeId" element = {<CoffeeDetails/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
