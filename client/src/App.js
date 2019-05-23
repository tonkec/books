import React from "react";
import BookList from "./components/BookList";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BookList />
    </ApolloProvider>
  );
}

export default App;
