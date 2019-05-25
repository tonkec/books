import React from "react";
import Error from "./Error";

const Content = ({ content, component }) => {
  let error = content.error ? content.error.message : "";
  return error ? <Error error={error} /> : component;
};

export default Content;
