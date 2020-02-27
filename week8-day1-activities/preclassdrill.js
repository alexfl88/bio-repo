function pangramChecker(str) {
    if (str.length < 26) {
        return false;
    }
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    let newStr = str.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        if (newStr.indexOf(alphabet[i]) < 0)
        {
            return false;
        }
    }  return true; 
}