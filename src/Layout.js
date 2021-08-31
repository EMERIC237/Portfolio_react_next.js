import React from "react";
import Home from "./Home/Home";
import About from "./Home/About";
import Contact from "./Home/Contact";
import Blog from "./Home/Blog";
function Layout() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Blog />
    </div>
  );
}

export default Layout;
