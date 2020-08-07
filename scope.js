// function sum(first , second) {
//     let result = first + second;
//     console.log(result);
//     return result;
// }

// const output = sum(3,7);
// //console.log(result); //this is false way.
// console.log(output);

let bonus = 20;
function sum(first , second) {
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}

const output = sum(3,7);
console.log(bonus);
console.log(output);