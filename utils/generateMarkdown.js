// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const Mit = 'https://img.shields.io/badge/License-MIT-yellow.svg'

function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return Mit
  }
  else {license != 'MIT License'}{
    return ('')
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

//![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
//![alttext](src)
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table of Contents

 * [License](#License)

 * [Contact info](#UserName)

 * [Description](#Description)

 * [Usage](#Usage)

 * [Contributors](#contributors)

  ## License

  ![${data.License}](${renderLicenseBadge(data.License)})

  ${data.License}

  ## Description

  ${data.Description}

  ## Usage

  ${data.Usage}

  ## Contact Info

  ${data.UserName}
  
  ${data.Email}

  ## Contributors

  ${data.Contributors}

`;
}

module.exports = generateMarkdown;
