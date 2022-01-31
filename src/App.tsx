import React from "react";
import { Filter, Header, Tabs, TicketsList } from "./components";
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
          <TicketsList />
        </div>
      </div>
    </div>
  );
}

export default App;
