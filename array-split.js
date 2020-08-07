const nums = [1,2,4,5,6,7,8,9,10];
const part = nums.slice(2,6);
console.log(part);
console.log(nums);

const nums = [1,2,4,5,6,7,8,9,10];
const remove = nums.splice(2,6,45,77);
console.log(remove);
console.log(nums);

const nums = [1,2,4,5,6,7,8,9,10];
const together = nums.join(" ");
console.log(together);
console.log(nums);