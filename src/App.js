import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import Store from "./Store";
@observer
class App extends Component {
  render() {
    return <div className="App">{Store.pfrDetails}</div>;
  }
}

export default App;
