import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

const App = () => (
  <main className="section">
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/create" component={AddBook} />
      </Switch>
    </div>
  </main>
);

export default App;
