function countChar(inputstring){
  let count = 1;
  let result = "";

  for(let i=0;i<inputstring.length-1;i++){
    if(inputstring.charAt(i) === inputstring.charAt(i+1)){
      count++;
    }else{
      result+= count+inputstring.charAt(i)+'\n';
      count = 1;
    }
  }

  result+= count+inputstring.charAt(inputstring.length-1)+'\n';

  console.log(result);
}

countChar("AABBBCCCC")