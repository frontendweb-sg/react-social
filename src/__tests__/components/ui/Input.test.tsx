import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Input from "@/components/ui/Input";

describe("Input component", () => {
  it("Rener the input label component", () => {
    // arrange
    const { getByText } = render(<Input name="email" label="Enter email" />);
    // ACT
    // ASSERT
    const label = getByText("Enter email");
    expect(label.textContent).toEqual("Enter email");
  });

  it("Rener the input label component", () => {
    // arrange
    // const wrapper = render(<Input name="email" label="Enter email" />);
    // ACT
    // ASSERT
    // const label = getByText(wrapper, "Enter email");
    // expect(label.textContent).toEqual("Enter email");
  });
});
