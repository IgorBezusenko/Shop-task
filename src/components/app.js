import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./pages/counter";
import TodoApp from "./pages/todo";
import Header from "./header";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <h1>Якатэла</h1>
        <Route path="/counter" exact component={Counter} />
        <Route path="/todoApp" component={TodoApp} />
      </div>
    </Router>
  );
};

export default App;
