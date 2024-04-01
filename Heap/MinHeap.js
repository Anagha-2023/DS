class MinHeap{
  constructor(){
    this.heap = []
  }

  getParentIndex(index){
    return Math.floor((index-1)/2);
  }
  getLeftchildIndex(index){
    return index*2+1;
  }
  getRightchildIndex(index){
    return index*2+2;
  }

  swap(index1,index2){
    [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]];
  }

  heapifyUp(index){
    let currentIndex = index;
    while(currentIndex > 0 && this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]){
      this.swap(currentIndex,this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index){
    let currentIndex = index;
    let LeftchildIndex = this.getLeftchildIndex(currentIndex);
    let RightchildIndex = this.getRightchildIndex(currentIndex);
    let smallestChildIndex = currentIndex;

    if(LeftchildIndex < this.heap.length && this.heap[LeftchildIndex] < this.heap[currentIndex]){
      smallestChildIndex = LeftchildIndex;
    }
    if(RightchildIndex < this.heap.length && this.heap[RightchildIndex] < this.heap[smallestChildIndex]){
      smallestChildIndex = RightchildIndex;
    }
    if(smallestChildIndex!==currentIndex){
      this.swap(smallestChildIndex,currentIndex);
      this.heapifyDown(smallestChildIndex);
    }
  }

  insert(value){
    this.heap.push(value);
    this.heapifyUp(this.heap.length-1);
    return value;
  }

  remove(){
    if(this.heap.length === 0){
      return null;
    }
    const minElement = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return minElement;
  }

  peek(){
    return this.heap[0]
  }
}

const inputArray = [10,5,3,4,2,1];
const minHeap = new MinHeap;
for(let i=0;i<inputArray.length;i++){
  minHeap.insert(inputArray[i]);
}
console.log(minHeap.heap);
minHeap.insert(11);
minHeap.remove();
console.log(minHeap.heap);
console.log("peek:",minHeap.peek());

