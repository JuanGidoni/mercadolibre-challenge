import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import FiltersContainer from "./index";

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

test("Filters Container component data test", () => {
  const filters = [
    {
      id: 1,
      name: "MELI ♥",
    },
    {
      id: 2,
      name: "REACT ♥",
    },
  ];
  const component = render(
    <Router>
      <FiltersContainer
        filters={filters}
        className="class-filters"
        textColor="text-color"
      />
    </Router>
  );

  const filtersTest = component.getByTestId("__test_filtersList");
  const linkTest = component.getAllByTestId("__test_filtersLink");

  expect(filtersTest).toHaveAttribute("class", "class-filters");

  linkTest.map((l, i) => {
    const expecting = (l, i) => {
      expect(l).toHaveAttribute("class", "text-color");
      expect(l).toHaveTextContent(filters[i].name);
    };
    return expecting(l, i);
  });
});
