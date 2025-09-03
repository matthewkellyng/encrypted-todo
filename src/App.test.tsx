import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("button increments count by 1", async () => {
  const user = userEvent.setup();
  render(<App />);
  const button = screen.getByRole<HTMLButtonElement>("button");
  const originalCount = getCount(button);
  await user.click(button);

  const newCount = getCount(button);
  expect(newCount).toBe(originalCount + 1);
});

function getCount(button: HTMLButtonElement) {
  const countAsString = button.textContent?.match(/\d+/)?.[0];
  const count = countAsString == null ? null : parseInt(countAsString);
  if (count === null) {
    throw new Error("Count could not be parsed from button text");
  }
  return count;
}
