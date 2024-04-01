class Maxheap{
  constructor(){
    this.heap = [];
  }

  getparentIndex(index){
    return Math.floor((index-1)/2);
  }
  getLeftChildIndex(index){
    return index*2+1;
  }
  getRightchildIndex(index){
    return index*2+2;
  }
  swap(index1,index2){
    [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]];
  }

  heapifyDown(index,heapsize){
    let currentIndex = index;
    let LeftchildIndex = this.getLeftChildIndex(currentIndex);
    let RightchildIndex = this.getRightchildIndex(currentIndex);
    let largestChildIndex = currentIndex;

    if(LeftchildIndex < heapsize && this.heap[LeftchildIndex] > this.heap[currentIndex]){
      largestChildIndex = LeftchildIndex;
    }
    if(RightchildIndex < heapsize && this.heap[RightchildIndex] > this.heap[largestChildIndex]){
      largestChildIndex = RightchildIndex;
    }
    if(largestChildIndex!==currentIndex){
      this.swap(currentIndex,largestChildIndex);
      this.heapifyDown(largestChildIndex,heapsize);
    }
  }

  heapsort(arr){
    this.heap = arr;
    const n = arr.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
      this.heapifyDown(i,n);
    }
    for(let i=n-1;i>0;i--){
      this.swap(0,i);
      this.heapifyDown(0,i);
    }
    return this.heap;
  }
}

const inputArray = [10,3,4];
const maxheap = new Maxheap();
console.log("Array:",inputArray);

const sortedArray = maxheap.heapsort(inputArray.slice(inputArray));
console.log("Sorted Array:",sortedArray);