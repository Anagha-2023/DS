// const arr = [3,6,9,3,7,4,1,0];

// function Bubbleseort(arr){
//   for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//       }
//     }
//   }
//   return arr;
// }

// console.log(Bubbleseort(arr));

const arr = [3,6,9,3,7,4,1,0];

function InsertionSort(arr){
  for(let i=0;i<arr.length;i++){
    let current = arr[i];
    let j = i-1;

    while(j>=0 && arr[j] > current){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }

  return arr;
}

console.log(InsertionSort(arr));