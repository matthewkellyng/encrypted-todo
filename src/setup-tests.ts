// Don't rename without updating the test setup in vitest.config.ts and tsconfig.test.json
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});
