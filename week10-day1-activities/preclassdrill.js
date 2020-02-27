var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var inputNum = function(num) {
    if (num < days.length) {
        console.log(days[num - 1])
    } else {
        console.log("undefined")
    }
}

inputNum(0);
inputNum(1);
inputNum(3);
inputNum(9);