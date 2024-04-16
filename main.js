// 1-savol
// let son1 = 5;
// let son2 = 2;
// let qoldiq = son1 % son2;
// alert(`${"qoldig'i: "}${qoldiq}`);




// 2-savol
// let rondom = Math.round(Math.random() * 10)
// alert(`${'random orqali chiqan son: '}${rondom}`)




// 3-savol
// let son = 12.510
// let butunSon =Math.floor(son)
// alert(butunSon)






// 4-savol
// function uzunligi(a) {
//     return a.length;
// }
// let a = "MARS IT SCHOOL";
// alert(uzunligi(a));




// 5-savol
// function s(m) {
//     return m.repeat(10)
// }
// console.log(s('MARS IT SCHOOL    '));





// 6-savol
// let ism = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// console.log(ism[0], ism[1], ism[2], ism[19], ism[10], ism[10], ism[13], ism[6]);






// 7-savol
// let yosh = +prompt('Yoshingizni kiriting');

// if (!isNaN(yosh)) {
//     if (yosh > 18) {
//         alert("Siz balag'ot yoshiga yetgansiz");
//     } else if (yosh === 18) {
//        alert("Balog'at yoshi muborak");
//     } else {
//         alert("Siz balog'at yoshiga yetmagansiz");
//     }
// } else {
//     alert('Iltimos yoshingizni raqam bilan kiriting');
// }








// 8-savol
// let i = prompt('Ismingizni kiriting')
// let teskari = i.split('').reverse().join('')
// console.log(teskari);









// 10-savol
let s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let j = s.filter(function (son) {
    return son % 2 === 0;
});
console.log('Juft sonlar:', j);