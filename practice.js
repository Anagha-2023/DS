function QuickSort(arr,startIndex = 0,endIndex = arr.length-1){
  quicksorthelper(arr,startIndex,endIndex);
  return arr;
}

function quicksorthelper(arr,startIndex,endIndex){
  if(startIndex>=endIndex){
    return;
  }

  let PivotIndx = startIndex;
  let leftIndx = startIndex+1;
  let rightIndx = endIndex;

  while(leftIndx<=rightIndx){
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
  quicksorthelper(arr,startIndex,rightIndx-1);
  quicksorthelper(arr,rightIndx+1,endIndex);
}

function swap(arr,i,j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [3,10,5,6,16,8];
const result = QuickSort(arr);
console.log(result);
