import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import PageHeader from "./PageHeader";

let container = null;

describe("PageHeader", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should match snapshot", () => {
    act(() => {
      render(<PageHeader />, container);
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
