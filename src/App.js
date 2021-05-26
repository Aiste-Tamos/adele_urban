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
          <Route exact path="https://aiste-tamos.github.io/adele_urban/#/">
            <MainLayout />
          </Route>
          <Route exact path="https://aiste-tamos.github.io/adele_urban/#/paintings">
            <PaintingsPage />
          </Route>
          <Route exact path="https://aiste-tamos.github.io/adele_urban/#/exhibitions">
            <ExhibitionsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
