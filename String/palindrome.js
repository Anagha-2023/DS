// function palindrome(str){
//   const string = str.replace(/[^a-z0-9]/ig,'').toLowerCase();

//   const reversedString = string.split('').reverse().join('');
//   return string === reversedString
// }

// console.log(palindrome('MALAYALAM'));


function checkIfPalindrome(str){
  let string = '';
  for(let i=0;i<str.length;i++){
    let char = str[i];

    if((char>="a" && char<="z") || (char>='A' && char<='Z') || (char>=0 && char<=9)){
      string+= str.toLowerCase();
    }
  }

  let left = 0;
  let right = string.length-1;

  while(left<right){
    if(string[left]!== string[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(checkIfPalindrome('MALayalam'));