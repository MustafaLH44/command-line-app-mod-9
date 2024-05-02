// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // requiring generateMarkdown file path and storing it as a variable globally so that we can use the method we need below.

// TODO: Create an array of questions for user input
// using inquirer package to prompt questions to user and creating a README.md file based on these imputs
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
    message: 'What is the description of your app?'
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
  writeToFile('README.md',readMeContent); // calling writeToFile function from below to actually handle generating the new file or throw an error message in case something isnt working
});
// calling generateMarkdown method from another js file and storing it in readMeContent variable and passing the questions array from above directly as an argument

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
