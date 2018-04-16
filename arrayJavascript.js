function printReverse(arr){
    for(var i = arr.length - 1; i>=0; i--){
        console.log(arr[i]);
    }
}

printReverse([3,6,2,5]);

var bool = false;

function isUniform(arr){
    var first = arr[0];
    for(var i = 0; i< arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}

console.log(isUniform([1,1,1]));
console.log(isUniform([1,1,3]));
console.log(isUniform([1,2,1]));

function sum(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

sum([1,2,3]);
sum([2,2,3]);
sum([1,2,4]);

function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

max([1,2,3]);
max([10,2,4,3,40]);
max([190, -5]);