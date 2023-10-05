function quickSort(arr, left, right) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function partition(arr, left, right) {
  let pivotValue = arr[right].time;
  let pivotIndex = left;
  
  for (let i = left; i < right; i++) {
    if (arr[i].time < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  
  swap(arr, pivotIndex, right);
  return pivotIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let A = [
  { time: new Date("2023-09-19") },
  { time: new Date("2023-02-19") },
  { time: new Date("2023-02-28") },
  // เพิ่มข้อมูลอื่น ๆ ที่ต้องการเรียงลำดับ
];

quickSort(A, 0, A.length - 1);

console.log(A);