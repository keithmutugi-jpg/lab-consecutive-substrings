function consecutiveSubstrings(string) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
/**
 * Consecutive Substrings Generator
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */

function getAllSubstrings(str) {
    let result = [];

    // Handle edge case: empty string
    if (!str || str.length === 0) {
        return result;
    }

    // Outer loop: starting index
    for (let i = 0; i < str.length; i++) {
        let temp = "";

        // Inner loop: build consecutive substrings
        for (let j = i; j < str.length; j++) {
            temp += str[j];
            result.push(temp);
        }
    }

    return result;
}

// Example runs (you can remove before submission)
console.log(getAllSubstrings("abc"));
console.log(getAllSubstrings("a"));
console.log(getAllSubstrings(""));

// Export for testing (if required by Jest)
module.exports = getAllSubstrings;

