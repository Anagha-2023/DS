function sum(arr){
  if(arr.length === 0){
    return 0;
  }else{
    return arr[0]+sum(arr.slice(1));
  }
}

const arr = [5,10,15,20,25];
console.log(sum(arr));

// function sum(arr){
//   if (arr.length === 0){
//     return 0;
//   }else{
//     return arr[0]+sum(arr.slice(1))
//   }
// }
// const arr = [4,5]
// console.log(sum(arr))