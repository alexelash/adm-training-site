# About
Externally hosted assets for Administrate University and Learning Campus. Content is hosted and built on [Skilljar CMS.](https://www.skilljar.com/)

## URLs
| Environment | URL                                             |
|-------------|-------------------------------------------------|
| Learning Campus (internal)     | https://learn.getadministrate.com/             |
| University (customer-facing)  | https://university.getadministrate.com/               |
| Skilljar CMS  | https://app.skilljar.com/             |

## How to Build
To build the packages, follow these steps:

```bash
# Open a terminal (Command Prompt or PowerShell for Windows, Terminal for macOS or Linux)

# Ensure Git is installed
# Visit https://git-scm.com to download and install console Git if not already installed

# Clone the repository
git clone git@github.com:Administrate/skilljar-adm-training-site.git

# Navigate to the project directory
cd skilljar-adm-training-site

# Make sure that you have at least v9.6.6 of NPM
npm -v

# Make sure that you have at least v20.2.0 of NODE
node -v

# Install dependencies
npm install

# Once you have all node_modules installed you can compile the project
npm run watch 
```
