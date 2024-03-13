function findAllSubstrings(str) {
  const substrings = [];

  // Recursive function to generate substrings starting at index 'start'
  function generateSubstrings(start, current) {
      if (start === str.length) {
          substrings.push(current);
          return;
      }
      
      // Include current character
      generateSubstrings(start + 1, current + str[start]);
      
      // Exclude current character
      generateSubstrings(start + 1, current);
  }

  // Start the recursive process
  generateSubstrings(0, '');

  return substrings;
}

// Example usage:
const inputString = "abc";
const allSubstrings = findAllSubstrings(inputString);
console.log("All substrings:", allSubstrings);
