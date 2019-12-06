function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arrHasil = []
    var obj = {}
    // var naikDari = indexOf
    for (let i = 0; i < arrPenumpang.length; i++) {
        obj['penumpang'] = arrPenumpang[i][0]
        obj['naikDari'] = arrPenumpang[i][1]
        obj['tujuan'] = arrPenumpang[i][2]
        obj['bayar'] = (Math.abs(rute.indexOf(arrPenumpang[i][1]) - rute.indexOf(arrPenumpang[i][2]))) * 2000
        arrHasil.push(obj)
        obj = {}

    }
    return arrHasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]