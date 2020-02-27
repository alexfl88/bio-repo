var arr = [1, 6, 20, 90]
function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++){
        sum += arr[i]
    }
    return sum / arr.length
}