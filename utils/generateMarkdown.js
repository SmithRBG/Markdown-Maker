// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const Mit = 'https://img.shields.io/badge/License-MIT-yellow.svg';

const licenseImage = {
  Img0: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  Img1: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
  Img2: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
  Img3: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
  Img4: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  Img5: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  Img6: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  Img7: '',
};


const licenseList = {
  zero:'MIT License',
  one:'GNU Lesser General Public License v3.0',
  two:'Mozilla Public License 2.0',
  three:'GNU Affero General Public License v3.0',
  four:'The Unlicense',
  five:'Apache License 2.0',
  six:'GNU General Public License v3.0',
};

function renderLicenseBadge(license) {
  if (license === licenseList.zero || licenseList.one || licenseList.two || licenseList.three || licenseList.four || licenseList.five || licenseList.six){
    return Mit
  }
  else {license != licenseList[7]}{
    return ('')
  };
};

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
