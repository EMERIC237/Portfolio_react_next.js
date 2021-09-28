import React from "react";
import Home from "./Home/Home";
import About from "./Home/About";
import Contact from "./Home/Contact";
import Blog from "./Home/Blog";
function Layout() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Blog />
      </div>
    </div>
  );
}

export default Layout;
