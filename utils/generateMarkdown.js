// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  var images;

  switch(license) {
    case 'MIT License':
      images = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'GNU Lesser General Public License v3.0':
      images = 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
      break;
    case 'Mozilla Public License 2.0':
      images = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
      break;
    case 'GNU Affero General Public License v3.0':
      images = 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
      break;
    case 'The Unlicense':
      images = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      break;
    case 'Apache License 2.0':
      images = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case 'GNU General Public License v3.0':
      images = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    default:
      images = '';
  }
  return images;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link;

  switch(license) {
    case 'MIT License':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU Lesser General Public License v3.0':
      link = 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'Mozilla Public License 2.0':
      link = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'GNU Affero General Public License v3.0':
      link = 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'The Unlicense':
      link = 'https://opensource.org/licenses/ISC';
      break;
    case 'Apache License 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU General Public License v3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    default:
      link = '';
  }
  return link;
}; 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README

//![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
//![alttext](src)
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table of Contents

 [License](#License)

 [Contact info](#UserName)

 [Description](#Description)

 [Usage](#Usage)

 [Contributors](#contributors)

  ## License

  ![${data.License}](${renderLicenseBadge(data.License)})
  (${renderLicenseLink(data.license)})

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
