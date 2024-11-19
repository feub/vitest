import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Form from "./Form";

describe("Test Form component", () => {
  it("should type in the input and render what is typed", async () => {
    render(<Form />);

    const usernameInput = screen.getByLabelText("Username:");
    const user = userEvent.setup();

    // Simulate typing
    await user.type(usernameInput, "Ashitaka");

    expect(screen.getByText("Ashitaka")).toBeInTheDocument();
  });
});
