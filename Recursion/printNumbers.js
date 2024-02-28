function printNumbers(n){
  if(n<=0){
    return;
  }else{
    printNumbers(n-1);
    console.log(n);
  }
}

const n = 5;
printNumbers(n)