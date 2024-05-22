import React, { useEffect, createContext, useState } from "react";
import {
  Hero,
  About,
  Education,
  Project,
  Skills,
  Footer,
  Contact,
} from "./sections";
import { AudioComp, TopBtn, SocialIconsMenu } from "./components";
import BgFixed from "./assets/bg-back.jpg";
import "./App.css";

const windowWidthContext = createContext();

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <windowWidthContext.Provider value={windowWidth}>
      <main className="overflow-hidden font-merienda text-primary-light">
        <div
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${BgFixed}) no-repeat center center/cover`,
          }}
          className="fixed left-0 top-0 -z-[1] h-screen w-full"
        />
        <SocialIconsMenu />
        <AudioComp />
        <TopBtn />
        <Hero />
        <About />
        <Education />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </windowWidthContext.Provider>
  );
}

export { windowWidthContext };

export default App;
