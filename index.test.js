const removeDupes = require("./");

test("array with no dupes should return same array", () => {
  expect(removeDupes([1, 2, 3])).toStrictEqual([1, 2, 3]);
});

test("array with dupes should return smaller array", () => {
  expect(removeDupes([1, 2, 3, 3, 3])).toStrictEqual([1, 2, 3]);
});

test("array with no values should return empty array", () => {
  expect(removeDupes([])).toStrictEqual([]);
});
