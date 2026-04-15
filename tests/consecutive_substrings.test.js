const consecutiveSubstrings = require('../consecutive_substrings');

test('returns an empty array when the input string is empty', () => {
  expect(consecutiveSubstrings('').length).toBe(0);
});

test('returns an array containing one string when the input is one character', () => {
  expect(consecutiveSubstrings('a')).toEqual(['a']);
});
    
test('can handle many letters', () => {
  expect(consecutiveSubstrings('ab')).toEqual(['a', 'ab', 'b']);
  expect(consecutiveSubstrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
});
const getAllSubstrings = require("../index");

describe("getAllSubstrings", () => {
    test("returns correct substrings for 'abc'", () => {
        expect(getAllSubstrings("abc")).toEqual([
            "a", "ab", "abc",
            "b", "bc",
            "c"
        ]);
    });

    test("returns single character array for 'a'", () => {
        expect(getAllSubstrings("a")).toEqual(["a"]);
    });

    test("returns empty array for empty string", () => {
        expect(getAllSubstrings("")).toEqual([]);
    });

    test("handles longer string", () => {
        expect(getAllSubstrings("ab")).toEqual(["a", "ab", "b"]);
    });
});