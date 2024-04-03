/**
 * web apis are provided by browser may give error when used while running in nodejs
 * server side  language
 * to run:
 *    go to req directory
 *    node Filename.extension
 *    dir -list all files/dirs in specified dir
 * 
 * npm - node package manager
 * yarn is like npm but most used is npm
 * its like playstore
 * all apps(packages) are not installed
 * when we require certain apps(packages) we install and use
 * 
 * installation  : npm install <package-name>
 * uninstall      : npm uninstall <package-name>
 * 
 * nodemon package -- when u code u run once and if u change the file 
 * u need not rerun the file it will update on its own
 * --packages stored in node modules
 * 
 * to run using nodemon
 * npx nodemon <filename.extension>
 * 
 * package.json will include the dependencies of the file
 * i.e package along with the version
 * if u install any other package it will add it to dependencies
 * 
 * in backend of project package.json should be created manually as it is best practice
 * commands to create package.json
 *    npm init    ->create and ask for versions to the developer
 *    npm init -y ->create along with setting up default values
 * 
 * dependencies -- the packages listed in this is must for the app to run
 * dev-dependencies -- the packages listed in this is not must for the app to run 
 * but for dev ease 
 * to add in dev dependencies cmnd is 
 *      npm install <package like nodemon> --save-dev
 * 
 * const variable_tostorepackage = require('pACKAGENAME')  =>IMPORTING PACKAGE
 */

//package-lock and node modules should not be pushed
//.gitignore is used to store these files to be ignored

