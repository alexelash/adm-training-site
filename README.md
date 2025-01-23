# About
Externally hosted assets for Administrate University and Learning Campus. Content is hosted and built on [Skilljar CMS.](https://www.skilljar.com/)

## URLs
| Environment | URL                                             |
|-------------|-------------------------------------------------|
| Learning Campus (internal)     | https://learn.getadministrate.com/             |
| University (customer-facing)  | https://university.getadministrate.com/               |
| Skilljar CMS  | https://app.skilljar.com/             |

## Working with the code

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

# Install dev dependencies
npm install

# Install the gulp command line utility
npm install --global gulp-cli

# Test Gulp
gulp
```

## Additional Info
To build minified versions of css and js files in the `public` folder (production-ready code used by both sites), use the following gulp tasks:

```bash
# Navigate to the project directory
cd skilljar-adm-training-site

# Watch and minify changed js and css files with Gulp
gulp watch
```
