// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =inquirer
.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your application?'
  }
  ,{
    type: 'input',
    name: 'description',
    message: 'What is the description of your app,'
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'What is your apps Installations Instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is you app Usage?',
  },
    {
      type: 'list',
      name: 'license',
      message: 'Which is the License information?',
      choices: ['Apache', 'Boost', 'BSD'],
    },
  {
    type: 'input',
    name: 'contributing',
    message: 'What is the contributing?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What is the Tests for your app?',
  }
])
.then((questions) => {
  const readMeContent = generateMarkdown(questions);
  console.log(readMeContent);
  writeToFile('README.md',readMeContent);
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./output/${fileName}`, data, (err) =>
  err ? console.log(err) : console.log('Successfully created README.md!')
);
};
  

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
