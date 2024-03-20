function QuickSort(arr,startIndx=0,endIndex=arr.length-1){
  quicksortHelper(arr, startIndx, endIndex);
  return arr;
}

function quicksortHelper(arr,startIndx,endIndex){
  if(startIndx>=endIndex){
    return;
  }

  let PivotIndx = startIndx;
  let leftIndx = startIndx+1;
  let rightIndx = endIndex;

  while (leftIndx<=rightIndx) {
    if(arr[leftIndx]>arr[PivotIndx] && arr[rightIndx]<arr[PivotIndx]){
      swap(arr,leftIndx,rightIndx);
      leftIndx++;
      rightIndx--;
    }
    if(arr[leftIndx]<=arr[PivotIndx]){
      leftIndx++;
    }
    if(arr[rightIndx]>=arr[PivotIndx]){
      rightIndx--;
    }
  }

  swap(arr,rightIndx,PivotIndx);
  quicksortHelper(arr,startIndx,rightIndx-1);
  quicksortHelper(arr,rightIndx+1,endIndex);

}

function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [16,56,12,10,78,100];
let result = QuickSort(arr);
console.log(result);