import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "./components/module/Containers";
import Navigation from "./components/Header/Navigation";
import { Route, Switch } from "react-router";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Gallery from "./components/section/Gallery";
import Contact from "./components/section/Contact";
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
    </>
  );
}

export default App;
