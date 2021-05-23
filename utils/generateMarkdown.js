function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![](https://img.shields.io/badge/license-${license}-blue/)`;
    } else {
        return "";
    }
}

function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return `[${license}](https://choosealicense.com/licenses/mit/)`;
        case "Apache":
            return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
        case "GNU":
            return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
        case "ISC":
            return `[${license}](https://choosealicense.com/licenses/isc/)`;
        default:
            return "";
    }
}

function renderLicenseSection(license) {
    if (license !== "None") {
        return `## License

This project is covered under the ${license} license. Read more about it here: ${renderLicenseLink(license)}.
`;
    } else {
        return "";
    }
}

function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions other questions regarding this or other projects, check out [my GitHub](github.com/${
        data.github
    }) or send me an email at ${data.email}.

---
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
