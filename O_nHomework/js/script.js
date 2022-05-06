let arr = [10, 4, 30, 13, 9, 17, 2, 24, 11, 23, 5, 7];
function sorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i = -1;
        }
    }

    return arr;
}
console.log(`the array is ${arr} \n\nthe new array is ${sorting(arr)}`);
