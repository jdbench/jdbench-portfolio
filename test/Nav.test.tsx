import { render } from "@testing-library/react";
import Nav from "../components/Nav";

describe("Nav", () => {
  it("renders without fail", () => {
    render(<Nav />);
  });
});
