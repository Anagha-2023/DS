function findAllSubstrings(str){
  let substrings = [];

  function generateSubstrings(start,current){
    if(start === str.length){
      substrings.push(current);
      return;
    }

    generateSubstrings(start+1,current+str[start]);
    generateSubstrings(start+1,current)
  }

  generateSubstrings(0,'');
  return substrings;
}

const str = 'AZC';
let allsubstrings = findAllSubstrings(str);
console.log(allsubstrings);