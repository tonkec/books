import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";

const uri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/graphql"
    : "https://fierce-depths-86661.herokuapp.com/graphql";
console.log(process.env.NODE_ENV);
console.log(uri);

const client = new ApolloClient({
  uri: uri
});

const jsx = (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
