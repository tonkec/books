import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="section">
        <div className="container">
          <h1 className="title is-1"> Books </h1>
          <BookList />
          <AddBook />
        </div>
      </main>
    </ApolloProvider>
  );
}

export default App;
