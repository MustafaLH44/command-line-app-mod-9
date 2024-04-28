// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="Apache"){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }else if(license==="Boost"){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }else{
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

* [Description](#description)
* [Instruction](#instruction)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
  

  ## Description
  ${data.description}

  ## Instruction
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
