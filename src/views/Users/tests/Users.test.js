import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Users from "../components/Users";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
