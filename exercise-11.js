function shoppingTime(memberId, money) {
    var obj = {
        ['memberId']: memberId,
        ['money']: money,
        ['listPurchased']: [],
        ['changeMoney']: 0
    }


    var harga = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]

    var duit = money

    if (obj['memberId'] && obj['money'] < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    } else if (!obj['memberId']) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money >= harga[0][1]) {
        obj['listPurchased'].push(harga[0][0])
        duit = duit - harga[0][1]
    }
    if (duit >= harga[1][1]) {
        obj['listPurchased'].push(harga[1][0])
        duit = duit - harga[1][1]
    }
    if (duit >= harga[2][1]) {
        obj['listPurchased'].push(harga[2][0])
        duit = duit - harga[2][1]
    } 
    if (duit >= harga[3][1]) {
        obj['listPurchased'].push(harga[3][0])
        duit = duit - harga[3][1]
    } 
    if (duit >= harga[4][1]) {
        obj['listPurchased'].push(harga[4][0])
        duit = duit - harga[4][1]
    }
    obj['changeMoney'] = duit
    return obj
}


// console.log(objHarga)
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja