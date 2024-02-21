const arr = [1,3,5,2,3,6,8,3];
num = 3;

var MovenumtoEnd = function (arr,num){
  let i = 0;
  let j = arr.length-1;
  while (i<=j){
    if (arr[i]===num && arr[j]!==num){
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    if (arr[i]!==num) i++;
    if (arr[j]===num) j--;
  }
  console.log(arr);
}

MovenumtoEnd(arr,num);