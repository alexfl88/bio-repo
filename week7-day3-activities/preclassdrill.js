function firstDup(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.lastIndex(arr[i])) {
            return arr[i]
        }
    }
}

console.log([2,5,6,3,5], firstDup ([2,5,6,3,5]))
console.log([1,3,4,1,5], firstDup ([2,5,6,3,5]))
console.log([2,4,5], firstDup ([2,4,5]))

var findDup = function (arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < i; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
        } 
    }
}


var firstDup = function(arr){
    var dups = {};
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i]
        if (dups[val]) {
            return val;
        }
        else{
            dups[val] = true;
        }
    }
}