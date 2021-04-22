import React from "react";
import { useState } from "react";
import logo from "./logo.png";
import scroll from "./scroll.png";
import "./App.css";
import About from "./containers/About";
import Sermon from "./containers/Sermon";
import Service from "./containers/Service";

function App() {
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
    <div className="App">
      <header>
        {console.log(myNav)}
        <img src={logo} className="imglogo"></img>{" "}
        <nav>
          {" "}
          <ul>
            <li>
              <a href="#about">About </a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#sermon">Sermons</a>
            </li>
            <li>
              <span className="spanner" onClick={openNav}>
                &#9776; open
              </span>
            </li>
          </ul>
          <div id={`${myNav}`} className="overlay">
            <a className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <div className="overlay-content">
              <a href="#">Mission Trips</a>

              <a href="#">Youth Camps</a>

              <a href="#">Outreach</a>

              <a href="#">G4t Conference</a>

              <a href="#">Youth Camp Page</a>

              <a href="#">Podcast Page</a>

              <a href="#">Youtube Page</a>

              <a href="#">Merch Store</a>
            </div>
          </div>
        </nav>
      </header>
      <div className="small-top"></div>
      <img src={scroll} className="scrolllogo"></img>{" "}
      <div id="about" className="from-top"></div>
      <About />
      <div id="service" className="from-top"></div>
      <Service />
      <div id="sermon" className="from-top"></div>
      <Sermon />
      <div className="from-top"></div>
      {/* {console.log(data)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading......" : data}</p> */}
    </div>
  );
}

export default App;
