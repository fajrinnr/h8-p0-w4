function cariMedian(arr) {
    var tengah = (arr.length - 1) / 2

    for (let i = 0; i < arr.length; i++) {
        if (tengah === i) {
            return arr[i]
        } else if (tengah !== i) {
            return (arr[Math.ceil(tengah)] + arr[Math.floor(tengah)]) / 2
        }
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5