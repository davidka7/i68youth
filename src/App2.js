import React from "react";
import { useState } from "react";
import logo from "./logo.png";
import scroll from "./scroll.png";
import "./App.css";
import About from "./containers/About";
import { Link } from "react-router-dom";
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
      <header>
        {console.log(myNav)}
        <img src={logo} alt="" className="imglogo"></img>{" "}
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
              <Link to="/react">Home</Link>
              <Link to="/mission">Mission Trips</Link>

              <a>Youth Camps</a>

              <a>Outreach</a>

              <a>G4t Conference</a>

              <a>Youth Camp Page</a>

              <a>Podcast Page</a>

              <a>Youtube Page</a>

              <a>Merch Store</a>
            </div>
          </div>
        </nav>
      </header>
      <div className="small-top"></div>
      <img src={scroll} alt="" className="scrolllogo"></img>{" "}
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

export default App2;
