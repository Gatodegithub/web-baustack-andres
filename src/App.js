import "./App.css";
import "./styles.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import HeroVideo from "./components/HeroVideo";
import Header from "./components/Header";
import ButtonsGroup from "./components/ButtonsGroup";
import MainSection from "./components/MainSection";
import HeroAction from "./components/HeroAction";
import Tips from "./components/Tips";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <HeroVideo />
      <ButtonsGroup />
      <MainSection />
      <HeroAction />
      <Tips />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
