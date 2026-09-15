import About from "./sections/About";
import Art from "./sections/Art";
import Cocktails from "./sections/Cocktails";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Menu from "./sections/Menu";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
};

export default App;
