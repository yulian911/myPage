import React from "react";
import "./App.css";
import Navigation from "./components/Header/Navigation";
import Home from "./components/section/Home/Home";
import About from "./components/section/About/About";
import Skills from "./components/section/Skills/Skills";
import Gallery from "./components/section/Gallery/Gallery";
import Contact from "./components/section/Contact/Contact";
import ScrollToTop from "./components/scrollToTop";

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

      <Home id="/home" />
      <About id="/about" />
      <Skills id="/skills" />
      <Gallery id="/gallery" />
      <Contact id="/contact" />
    </>
  );
}

export default App;
