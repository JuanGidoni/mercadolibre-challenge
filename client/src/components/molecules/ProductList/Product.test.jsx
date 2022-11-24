import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Product from "./index";

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

test("Product component data test", () => {
  const component = render(
    <Product
      title="testing 123"
      shipping={{ free_shipping: true }}
      price={123}
      thumbnail={"https://"}
      id="MLA1"
    />
  );

  const idTest = component.getByTestId("__test_pId");
  const titleTest = component.getByTestId("__test_pTitle");
  const priceTest = component.getByTestId("__test_pPrice");
  const imageTest = component.getByTestId("__test_pImgUrl");

  expect(idTest).toHaveAttribute("id", "MLA1");
  expect(titleTest).toHaveTextContent("testing 123");
  expect(priceTest).toHaveTextContent("123");
  expect(imageTest.src).toContain("https://");
});
