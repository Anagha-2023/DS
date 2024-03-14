function findAllSubstrings(input) {
  const substrings = [];

  function generateSubstrings(start, current) {
    if (start === input.length) {
      substrings.push(current);
      return;
    }

    generateSubstrings(start + 1, current + input[start]);

    generateSubstrings(start + 1, current);


  }
  generateSubstrings(0, '');
  return substrings;
}

const input = 'ABCD';
const allsubstrings = findAllSubstrings(input);
console.log(allsubstrings);