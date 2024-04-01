class Maxheap{
  constructor(){
    this.heap = [];
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
    while(currentIndex >0 && this.heap[currentIndex] > this.heap[this.getParentIndex(currentIndex)]){
      this.swap(currentIndex,this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index){
    let currentIndex = index;
    let LeftchildIndex = this.getLeftchildIndex(currentIndex);
    let RightchildIndex = this.getRightchildIndex(currentIndex);
    let largestChildIndex = currentIndex;

    if(LeftchildIndex < this.heap.length && this.heap[LeftchildIndex] > this.heap[currentIndex]){
      largestChildIndex = LeftchildIndex;
    }
    if(RightchildIndex<this.heap.length && this.heap[RightchildIndex] > this.heap[largestChildIndex]){
      largestChildIndex = RightchildIndex;
    }

    if(largestChildIndex!==currentIndex){
      this.swap(currentIndex,largestChildIndex);
      this.heapifyDown(largestChildIndex);
    }
  }

  insert(value){
    this.heap.push(value);
    this.heapifyUp(this.heap.length-1);
    return value;
  }

  remove(){
    if (this.heap.length === 0) {
      return null;
    }

    const maxElement = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return maxElement;

  }

  peek(){
    return this.heap[0];
  }
}

const arr = [1,5,2,7,10];
const maxheap = new Maxheap();
for(let i=0;i<arr.length;i++){
  maxheap.insert(arr[i]);
}
console.log(maxheap.heap);
maxheap.insert(15);
console.log(maxheap.heap);
maxheap.remove();
console.log(maxheap.heap);

