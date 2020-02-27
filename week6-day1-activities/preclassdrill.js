function nonRepeat(str) {
    let letters = []
    let count = []
    for (let i = 0; i< str.length; i++) {
        if (letters.indexOf(str[i])=== -1) {
            letters.push(str[i])
            count.push[1]
        } else {
            count[letters.indexOf(str[i])]++
        }
    }
    return letters[count.indexOf(1)]
}

console.log("this hat is the greatest!", nonRepeat("this hat is the greatest!"))



function FirstNonRepeatedChar(str) {
    for (var x = 0; x < str.length; x++) {
        var char = str[x];
        var count = 0;

        for (var y = 0; y < str.length; y++) {
            if (str[y] === char) {
                count++;
            }
        }
        if (count ===1) {
            return char;
        }
    }
}

console.log ("beckys solution " + FirstNonRepeatedChar("this hat is the greatest!")) beckys solution