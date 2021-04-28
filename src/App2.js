import React from "react";
import { useState } from "react";
import logo from "./logo.png";
import scroll from "./scroll.png";
import "./App.css";
import About from "./containers/About";

import Sermon from "./containers/Sermon";
import Service from "./containers/Service";

function App2() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  const [myNav, setmyNav] = useState("myNav");
  const openNav = () => {
    setmyNav("myNav1");
  };
  const closeNav = () => {
    setmyNav("myNav");
  };
  return (
    <div className="newApp">
      <div className="small-top"></div>
      <img src={scroll} alt="" className="scrolllogo"></img>{" "}
      <div id="about" path="/about" className="from-top"></div>
      <About />
      <div id="service" className="from-worship"></div>
      <Service />
      <div id="sermon" className="from-volly"></div>
      <Sermon />
      <div className="from-tech"></div>
      {/* {console.log(data)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading......" : data}</p> */}
    </div>
  );
}

export default App2;
