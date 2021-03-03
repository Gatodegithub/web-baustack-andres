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
import { useTranslation } from 'react-i18next';


function App() {
  
  const { t, i18n } = useTranslation();
  function handleClick(lang){
    i18n.changeLanguage(lang);
  }
  
  return (
    <>
      <div className="text-center">
        <button className="" onClick={()=>handleClick('es')}><span>Spanish</span></button>
        <button className="" onClick={()=>handleClick('en')}><span>English</span></button>
      </div>
      <NavBar handleClick={handleClick} t={t} i18n={i18n} />
      <Header handleClick={handleClick} t={t} i18n={i18n} />
      <HeroVideo handleClick={handleClick} t={t} i18n={i18n} />
      <ButtonsGroup handleClick={handleClick} t={t} i18n={i18n} />
      <MainSection handleClick={handleClick} t={t} i18n={i18n} />
      <HeroAction handleClick={handleClick} t={t} i18n={i18n} />
      <Tips handleClick={handleClick} t={t} i18n={i18n} />
      <Contact handleClick={handleClick} t={t} i18n={i18n} />
      <Footer handleClick={handleClick} t={t} i18n={i18n} />
    </>
  );
}

export default App;
