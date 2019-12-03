function ubahHuruf(kata) {
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    var hasil = ''
    for (let j = 0; j < kata.length; j++) {
        for (let i = 0; i < alfabet.length; i++) {
            if (alfabet[i] == kata[j]) {
                hasil += alfabet[i + 1]
            } else if (alfabet[25] == kata[j]){
                hasil += alfabet[0]
                break
            }
        }
    }
    return hasil
}


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu