import "./App.css";
import "./index.css";

import React from "react";
import { Brand, CTA, Navbar } from "./components";
import { Blog, Features, Footer, Header } from "./containers";
import WhatGPT3 from "./containers/whatGPT3/whatGPT3";
import Possibility from "./containers/possibility/Possiblity";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
export default App;
