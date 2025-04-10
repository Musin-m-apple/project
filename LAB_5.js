const n = 44;
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Math.floor(Math.random() * 10));  
}
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
   
    let minIndex = i;

    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

 
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

 function Delete(arr){
     let newArr = [];
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] !== arr[i + 1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("Початковий масив " + arr);
let selectedArray = selectionSort(arr);

console.log("Сортований масив " + selectedArray);
let clearedArray =  Delete(arr);

console.log("Змінений масив " + clearedArray );