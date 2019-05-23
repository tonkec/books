import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="container">
        <BookList />
        <AddBook />
      </main>
    </ApolloProvider>
  );
}

export default App;
