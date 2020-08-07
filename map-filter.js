const numbers = [2,4,5,6,7];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element *element;
    output.push(result);
}

console.log(output);

const numbers = [2,4,5,6,7];


// function square(element) {
//     return element * element;
// }

const square = element => element * element;

const square = x => x*x;

numbers.map(function(element){
    console.log(element);
})

numbers.map(function(element,index){
    console.log(element,index);
})

numbers.map(function(x,index,array){
    console.log(x,index,array);
})


const numbers = [2,4,5,6,7];
const result = numbers.map(x => x * x);
console.log(result);

const numbers = [2,4,5,6,7];
const bigger = numbers.filter(x => x >4);
console.log(bigger);

const numbers = [2,4,5,6,7];
const isThere = numbers.find(x => x >4);
console.log(isThere);