// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/* const Mit = 'https://img.shields.io/badge/License-MIT-yellow.svg';

const licenseImage = {
  Img0: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  Img1: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
  Img2: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
  Img3: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
  Img4: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  Img5: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  Img6: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
};


const licenseList = {
  name:'MIT License',
  name:'GNU Lesser General Public License v3.0',
  name:'Mozilla Public License 2.0',
  name:'GNU Affero General Public License v3.0',
  name:'The Unlicense',
  name:'Apache License 2.0',
  name:'GNU General Public License v3.0',
}; */
//licenseList.zero || licenseList.one || licenseList.two || licenseList.three || licenseList.four || licenseList.five || licenseList.six

const licenseList = [
  {
    name:'MIT License',
    image:'https://img.shields.io/badge/License-MIT-yellow.svg',
  },
  {
    name:'GNU Lesser General Public License v3.0',
    image:'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
  },
  {
    name:'Mozilla Public License 2.0',
    image:'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  },
  {
    name:'GNU Affero General Public License v3.0',
    image:'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
  },
  {
    name:'The Unlicense',
    image:'https://img.shields.io/badge/license-Unlicense-blue.svg',
  },
  {
    name:'Apache License 2.0',
    image:'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  },
  {
    name:'GNU General Public License v3.0',
    image:'https://img.shields.io/badge/License-GPLv3-blue.svg',
  },
];

/* for (var i = 0; i is less than the length of licenseList; i++){
  //check if license is equal to license[i].name
  // if so, return the image
 // else return an empty string
} */

function renderLicenseBadge(license) {
  if (license === licenseList.name){
    return licenseList.image
  }
  if (licenseList.name === licenseList.image) {
    return licenseList.image
  }
  else {license != licenseList.name}{
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
