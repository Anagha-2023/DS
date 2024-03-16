const arr = [2,6,4,1,7,9,5,2,4];

function InsertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let current = arr[i];
    let j = i-1;

    while (j>=0 && arr[j]>current) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }
  return arr;
}

console.log(InsertionSort(arr));