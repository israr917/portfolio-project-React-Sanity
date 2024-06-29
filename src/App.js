import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Navabar from "./components/Navbar";

function App() {
  return (
    <>
      {/* React Route are use for multipage websites  */}{" "}
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route Component={Home} path="/" exact />
          <Route Component={About} path="/about" />
          <Route Component={SinglePost} path="/post:slug" />
          <Route Component={Post} path="/post" />
          <Route Component={Project} path="/project" />
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
