import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from "./Loader";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("loader", () => {
  it("loader sets to true", () => {
    const component = render(<Loader />);

    expect(component.getByTestId("__test_loader")).toHaveTextContent(
      "Loading..."
    );
  });
});
