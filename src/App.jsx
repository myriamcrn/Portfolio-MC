import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Description } from "./components/Description/Description";
import { FirstTransition } from "./components/FirstTransition/FirstTransition";
import { Skills } from "./components/Skills/Skills";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { SecondTransition } from "./components/SecondTransition/SecondTransition";
import { Work } from "./components/Work/Work";
import { Footer } from "./components/Footer/Footer";
import { PopUpWork } from "./components/PopUpWork/PopUpWork";
import { PopUpBurger } from "./components/PopUpBurger/PopUpBurger";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <main>
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <PopUpBurger burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <WelcomePage />
      <FirstTransition />
      <Description />
      <Skills />
      <SecondTransition />
      <PopUpWork isOpen={isOpen} setIsOpen={setIsOpen} />
      <Work isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </main>
  );
}

export default App;
