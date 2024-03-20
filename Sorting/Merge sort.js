function Mergesort(arr){
  if(arr.length<=1){
    return arr;
  }

  const middle = Math.floor(arr.length/2);
  let firstHalf = arr.slice(0,middle);
  let secondHalf = arr.slice(middle,arr.length);
  return jointArray(Mergesort(firstHalf),Mergesort(secondHalf));
}

function jointArray(firstHalf,secondHalf){
  const newArray = new Array(firstHalf.length+secondHalf.length).fill(0);
  let i=0;
  let j=0;
  let k=0;

  while(i<firstHalf.length && j<secondHalf.length){
    if(firstHalf[i]<=secondHalf[j]){
      newArray[k] = firstHalf[i];
      i++;
      k++;
    }else{
      newArray[k] = secondHalf[j];
      j++;
      k++;
    }
  }
    while(i<firstHalf.length){
      newArray[k] = firstHalf[i];
      i++;
      k++;
    }
    while(j<secondHalf.length){
      newArray[k] = secondHalf[j];
      j++;
      k++;
    }
  return newArray;
}

const arr = [3,6,8,2,5,10,34,25];
const result  = Mergesort(arr);
console.log(result);
