function checkAB(num) {
var hasil = undefined
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[i] == 'a') {
                var a = i
            } else if (num[j] == 'b') {
                var b = j
            } else if (Math.abs(a - b) === 4) {
                hasil = true
            }
        }
    }
    if (hasil == undefined){
        hasil = false
    }
    return hasil
}

    // TEST CASES
    console.log(checkAB('lane borrowed')); // true
    console.log(checkAB('i am sick')); // false
    console.log(checkAB('you are boring')); // true
    console.log(checkAB('barbarian')); // true
    console.log(checkAB('bacon and meat')); // false