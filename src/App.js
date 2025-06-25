import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Skill from "./Components/Skills/Skill";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Intro />
    <Profile />
    <Slider />
    <Skill />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
