import React from "react";
import { Filter, Header, Tabs, Ticket } from "./components";
import "./scss/index.scss";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="main__content content">
        <div className="content__leftside">
          <Filter />
        </div>
        <div className="content__rightside">
          <Tabs />
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default App;
