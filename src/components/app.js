import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./pages/counter";
import TodoApp from "./pages/todo";
import Header from "./header";
import ShoesStore from "./pages/shop";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/counter" component={Counter} />
        <Route path="/todoApp" component={TodoApp} />
        <Route path="/shoes-store" component={ShoesStore} />
      </div>
    </Router>
  );
};

export default App;
