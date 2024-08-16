import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders without fail", () => {
    render(<Header/>);
  });
});
