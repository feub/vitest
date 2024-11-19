import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("Test Title component", () => {
  it("should render a title", () => {
    render(<Button />);

    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveTextContent("increment");
  });

  it("should render a button increment", () => {
    render(<Button />);

    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveTextContent("increment");
  });

  it("should render a number 0 before incrementing", () => {
    render(<Button />);

    const pEl = screen.getByText("0");
    expect(pEl).toBeInTheDocument();
  });

  it("should render a number 1 after clicking the button", () => {
    render(<Button />);

    const button = screen.getByRole("button");
    const pEl = screen.getByText("0");

    fireEvent.click(button);

    expect(pEl).toHaveTextContent("1");
  });

  it("should render a number 5 after clicking the button 4 times", () => {
    render(<Button />);

    const button = screen.getByRole("button");
    const pEl = screen.getByText("0");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(pEl).toHaveTextContent("4");
  });
});
