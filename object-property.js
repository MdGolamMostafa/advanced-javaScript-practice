const student=
[
    {id:21,name : 'malik'},
    {id:23,name : 'khalek'},
    {id:24,name : 'pankha'},
    {id:25,name : 'sohel'},
    {id:26,name : 'monir'}
];

const names = student.map(s => s.name);

console.log(names);

const ids = student.map(s => s.id);

console.log(ids);


const bigger = student.filter(s => s.id > 24);
console.log(bigger);

const biggerOne = student.find(s => s.id > 24);
console.log(biggerOne);