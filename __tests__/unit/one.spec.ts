import "os";
import { it, expect } from "@jest/globals";
import { greet } from "../../src";

it("should greet the world when it's not given a name", () => {
  expect(greet()).toBe("Hello World!");
});

it.each(["Peter", "Jhon"])("should greet %s", (name) => {
  expect(greet(name)).toBe(`Hello ${name}!`);
});
