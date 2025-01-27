import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Skills } from "./pages/Skills/Skills";
// import { Projects } from "./pages/Projects/Projects";
// import { Contacts } from "./pages/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="w-screen min-h-full scroll-smooth box-border m-0 p-0">
      <Home/>
      <About/>
      <Skills/>
      {/* <Projects/>
      <Contacts/> */}
      <Footer/>
    </section>
  )
}

export {App};
