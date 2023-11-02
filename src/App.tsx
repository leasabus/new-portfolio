import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Pages/Contact/Contact";
import { Home } from "./components/Pages/Home";
import { Projects } from "./components/Pages/Projects/Projects";
import { Skills } from "./components/Pages/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col container max-w-[1000px] h-auto gap-40 ">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default App;
