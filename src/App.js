import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout } from "./features/mainLayout";
import { PaintingsPage } from "./features/paintingsPage";
import { ExhibitionsPage } from "./features/exhibitionsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainLayout />
          </Route>
          <Route exact path="/paintings">
            <PaintingsPage />
          </Route>
          <Route exact path="/exhibitions">
            <ExhibitionsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
