normal for loop

const nums = [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
}


const nums = [0,1,2,3,4,5,6,7,8,9];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (nums[i] > 5) {
        //"break" used for stop looping
        break;
    }
    console.log(element);
}

const nums = [0,-1,2,3,-4,5,-6,7,-8,9];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (nums[i] < 0) {
        //"continue" used for passing loop element.
       continue;
    }
    console.log(element);
}