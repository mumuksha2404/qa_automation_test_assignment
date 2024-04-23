# QA automation test assignment for Telus

This project aims to visit the telus.com website and use the search bar to input the keyword &quot;Internet.&quot; The objective is to select the 3rd option from the drop-down list by employing partial text matching. After submitting the query, it&#39;s crucial to compare the text in the search field with the heading of the search page. Additionally, ensure that a minimum of 6 results are displayed below, each containing clickable links. Finally, select the appropriate result to navigate further.

## Technical Specifications
1. Node vesion = v20.10.0
2. NPM version = 10.2.3
3. Nightwatch version = 3.6.0

## Tools Used
1. eslint v8.57.0 to format the js code as per the standards.
2. Chromedriver 123.0.6312.122 to support the running of test cases on chrome browser

## Commands
1. npm run test -> To start the nightwatch to execute all the test cases with UI (on browser).
2. npm run test-headless -> To start the nightwatch to execute all the test cases without UI.
3. npm run lint -> To display the list of changes that are required to be made in the js files as per the standards
4. npm run lint-fix -> To update the js files that are not as per the standard. It excludes the node_modules/ folder.

## Cron
Implemented a scheduled cron job within GitHub Actions to automate the deployment process, running once per day at 12 pm EDT or 4 pm UTC or 9:30 pm IST.

## Test Result
Test results can be seen on the command prompt as well as in the directory tests_output.
