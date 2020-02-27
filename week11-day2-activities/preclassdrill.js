/* Write a function that takes a string as a parameter and determines if it is a valid 
password with the following constraints */

var isValidPassword = string => {
    ​
      // checks to see if str has lower case letters
      var hasUpper = str => {
        return str.toLowerCase() != str;
      };
    ​
      // checks to see if str has upper case letters
      var hasLower = str => {
        return str.toUpperCase() != str;
      };
    ​
      if (string.length >= 8 && hasLower(string) && hasUpper(string)) {
        return true;
      }
      
      return false;
    };