import React from "react";
import "./App.css";
import Navigation from "./components/Header/Navigation";
import Home from "./components/section/Home/Home";
import About from "./components/section/About/About";
import Skills from "./components/section/Skills/Skills";
import Gallery from "./components/section/Gallery/Gallery";
import Contact from "./components/section/Contact/Contact";
import { Container, Content } from "./components/ui/Containers";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navigation />

      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} /> */}
 {/* <Container  background="black" justifyContent="center"> */}
    <Home />
 {/* </Container> */}
     
      <About />
      <Skills  />
      <Gallery />
      <Contact  />
    </>
  );
}

export default App;
