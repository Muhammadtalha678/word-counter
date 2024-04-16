let personName1 = "Muhammad Talha";
console.log(personName1.toUpperCase());
console.log(personName1.toLowerCase());
// function toTitleCaee(value: string) {
//     let result = ""
//     for (let index = 0; index < value.length; index++) {
//         // const element = value[index];
//         if (index == 0) {
//             result += value.charAt(index).toUpperCase()
//         }
//         else if (value.charAt(index - 1) === ' ') {
//             result += value.charAt(index).toUpperCase()
//         }
//         else {
//             result += value.charAt(index).toLowerCase()
//         }
//     }
//     // console.log(value.toLowerCase().replace(/))
//     console.log(result);
// }
// toTitleCaee("hello world talha")
// console.log(a);
// Or
let p1 = "Altaf bhai";
let titleCase = "";
for (let index = 0; index < p1.length; index++) {
    if (index == 0) {
        titleCase += p1[index].toUpperCase();
    }
    else if (p1[index - 1] === ' ') {
        titleCase += p1[index].toUpperCase();
    }
    else {
        titleCase += p1[index];
    }
}
console.log(titleCase);
export {};
