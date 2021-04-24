import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import App2 from "./App2";
import Mission from "./Mission";
import logo from "./logo.png";

import { Route, Switch, Link, Redirect, useLocation } from "react-router-dom";

function App() {
  // const [data, setData] = React.useState(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
  }, [location]);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const abouter = () => {
    document.getElementById("about").scrollIntoView();
  };
  const servicer = () => {
    document.getElementById("service").scrollIntoView();
  };
  const sermoner = () => {
    document.getElementById("sermon").scrollIntoView();
  };
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
        {console.log(location)}
        <img src={logo} alt="" className="imglogo"></img>{" "}
        <nav>
          {" "}
          <ul>
            <li>
              <Link to="/home">Home </Link>
            </li>

            {location.pathname === "/home" ? (
              <li>
                <a onClick={abouter}>About </a>
              </li>
            ) : (
              <div></div>
            )}
            {location.pathname === "/home" ? (
              <li>
                <a onClick={servicer}>Service</a>
              </li>
            ) : (
              <div></div>
            )}
            {location.pathname === "/home" ? (
              <li>
                <a onClick={sermoner}>Sermons</a>
              </li>
            ) : (
              <div></div>
            )}

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
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={App2} />
      </Switch>
      <Switch>
        <Route path="/mission" component={Mission} />
      </Switch>{" "}
    </div>
  );
}

export default App;
