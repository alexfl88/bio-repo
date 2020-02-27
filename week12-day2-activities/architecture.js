/*
1. Require packages/dependencies
    a) inquirer
    b) axios
    c) fs
    
2. Create a variable to store the operation (show/actor)

3. Create another variable to store the search term

4. Create a function to search for a show

5. Create another function to search for an actor

6. console.log the results

7. Write the results to a log file
*/

let search = process.argv[2];

let term = process.argv.slice(3).join(" ");

// console.log('search', search, 'term', term);

if (!search) {
    search = 'show';
    term = 'Friends';

}
console.log('search', search, 'term', term);