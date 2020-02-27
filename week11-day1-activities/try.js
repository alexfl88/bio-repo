var fs = require('fs');

// fs.writeFile('movies.txt', 'Pulp Fiction', function(err){
//     if(err) {
//         return console.log(err); 
//     }

//     console.log("Movies.txt was created!");
// });



// fs.readFile('movies.txt', 'utf8', function(err, data){
//     if(err) {
//         return console.log(err);
//     }

//     console.log(data);

// console.log(data.split(','));
// });



// fs.writeFile('movies.txt', 'Kill Bill', function(err){
//     if(err) {
//         return console.log(err); 
//     }

//     console.log("Movies.txt was created!");
// });

// var content = data.split(',');

// for(var i = 0; i < content.length; i++) {
//     console.log(content[i]);
// }

// content.forEach(function(element, i, array){
//     console.log(element);
// })


var data = process.argv[2];

fs.appendFile('movies.txt', 'John Wick', function(err){
    if(err){
        return console.log(err);
    }

    console.log("Something was added");
});


