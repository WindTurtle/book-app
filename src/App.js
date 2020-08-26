import React from "react";
import "./App.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { HomeTemplate } from "./templates/HomeTemplate";
import DetailBook from "./pages/DetailBook";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate
          exact
          path="/detail-book/:bookid"
          Component={DetailBook}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
