import React from "react";
import "./App.css";
import App2 from "./App2";
import Mission from "./Mission";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <Router>
      <div className="App">
        <Route exact path="/react">
          <App2 />
        </Route>
        <Route path="/mission">
          <Mission />
        </Route>
      </div>
    </Router>
  );
}

export default App;
