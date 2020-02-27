// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'list',
        name: 'doingWhat',
        message: 'What are you doing in my house?',
        choices: ['I came for your cookies', 'Yeeeeet', 'I have a warrant for your arrest']

    },
    {
        type: 'checkbox',
        name: 'carrying',
        message: 'What is that in your hands?',
        choices: ['Napkins', 'Gun', 'Warrant', 'Sword']
    },
    {
        type: 'password',
        name: 'password',
        message: "I'll let you in if you know the password"
    },
    {
        type: 'confirm'
        name: 'confirm',
        message: 'Are you sure?',
        default: 'false'
    }
).then



// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
