import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./pages/counter";
import TodoApp from "./pages/todo";
import Header from "./header";
import ShoesStore from "./pages/shop";
import {Main} from "./pages/main";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="d-flex ">
        <Route path="/" exact component={Main} />
        <Route path="/Shop-task" exact component={Main} />
        <Route path="/Shop-task/counter" component={Counter} />
        <Route path="/Shop-task/todoApp" component={TodoApp} />
        <Route path="/Shop-task/shoes-store" component={ShoesStore} />
      </div>
    </Router>
  );
};

export default App;
