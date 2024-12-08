import React from "react";
import Hero from "./components/Hero";
import About from "./About/page";
import Shop from "./Shop/page";
import Project from "./Project/page";
import Page from "./Page/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Shop />
      <About />
      <Project />
      <Page />
    </div>
  );
}
