import { toUpper } from "../src";

describe("Index.ts", () => {
  test("toUpper should return uppercase", () => {
    const arg = "steve";
    const result = toUpper(arg);

    expect(result).toBe(arg.toUpperCase());
  });
});
