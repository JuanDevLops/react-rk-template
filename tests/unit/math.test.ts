import math from "./math";

const { sum }: any = math();

test("Somar dois números", () => {
  expect(sum(1, 2)).toBe(3);
});

console.log(sum);
