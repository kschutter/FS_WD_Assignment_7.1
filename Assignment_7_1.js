// The assignment didn't specify an array, but it was boring enough that I wanted to experiment
var nums = [.01, 59, 42.1, 6, 520];
var biggest = null;
var check;

for (var i = 0; i < nums.length; i++) {
    check = nums[i];

    // On the first iteration, assign the num as biggest
    if (i == 0) {
        biggest = check;
        continue;
    }

    if (biggest < check) biggest = check;
}

console.log(biggest);