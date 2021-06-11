import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppointmentPage } from "./pages/AppointmentPage";
import { HomePage } from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/make-appointment" component={AppointmentPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
