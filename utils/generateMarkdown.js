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


/* function renderLicenseBadge(license) {
  if (license === licenseList.name){
    return licenseList.image
  }
  else {license != licenseList.name}{
    return ('')
  };
  
}; */


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = ("https://opensource.org/licenses/MIT");

  if (license === 'MIT License'){
    return licenseLink
  }
  else {licese != 'MIT License'}{
    return ('')
  };
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
