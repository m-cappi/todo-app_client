import React from "react";
// import { render, screen } from "@testing-library/react";
import { create } from "react-test-renderer";
import App from "./App";

test("App snapshot test", () => {
  const tree = create(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});
