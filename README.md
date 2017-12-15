
[![Build Status](https://travis-ci.com/pearson-ux/pearson-glp-platform.svg?token=yRiZW31ciCX2AwmRD34E&branch=master)](https://travis-ci.com/pearson-ux/pearson-glp-platform)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To learn more about Create React App, check out the [documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This platform is a playground and used for prototyping in a React App environment.  When you use this platform you will have access to the following:

 - Redux
 - React Router 4
 - Pearson API Services (Coming Soon)
 - Elements SDK
 - Configurable to pull in styling from a custom PatternLab project.

There is no right or wrong way to play on the playground, however we do have a few recommendations while building.

## **Requirements:**


A basic knowledge of HTML, CSS and Javascript. We also recommend you understand the following:

 - React Js (required)
 - Redux (optional)
 - Router 4 (optional)

You dont need to know Redux or Router to play. We recommend it if you are building a complex prototype.

**Level Up**: If you are looking to level up your skills we recommend the following resources.

 - https://www.udemy.com/react-redux/
 - https://reacttraining.com/react-router/web/guides/philosophy
 - https://reactjs.org/tutorial/tutorial.html

## Getting Started
To get started clone this repository and install the project dependencies:

    $ npm install

To run the application:

    $ npm start

Running the application will fire off a local server, serving your application at `http://localhost:3000`

**Important:** This app uses Webpack to bundle and serve files, however it is managed by Create React App.  To keep it simple these configurations have been hidden from you.  If you would like to hack the configurations you can do so by running `$ npm run eject` As noted in the [Create React App documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject), running eject is a one way process.  Once you do it, there is no going back.  So use this with caution.



## Folder Structure

After install the folders and files should look something like this:

    ./pearson-glp-platform
	    - node_modules/
	    - public/
	    - react-templates/
	    - src/
		    - actions/
		    - assets/
		    - components/
		    - containers/
		    - epubs/
		    - helpers/
		    - pearson/
		    - reducers/
		    - routes/
	    - .gitignore
	    - .travis.yml
	    - gulpfile.js
	    - package.json

**A closer look**

 `node_modules/` - If you are new to NPM, this is where your project dependancies are saved and used.  You will not need this folder.

`public/` - Static files webpack uses to build your app.  It is required to have an `index.html` file.  This is your base template file.

`react-templates/` - Three boilerplate templates you can use to help build a component.

 - Stateless (dumb) Component Template
 - State held (smart) Component Template
 - Redux Component Template


----------


**Tip:**  Always start with a dumb component and if you find the need a mutable state held container you can easily convert it.


----------


`src/` - You'll spend most of your time here building the application.

`./src/actions/` - For use in Redux apps only.  This is where you keep the actions you build to pass through a Reducer.

`./src/assets/` - Project asset folder to store application CSS, Images and fonts.

`./src/components/` - The location of all of your stateless components.  Its good practice to keep these separated from the smart components.


----------


**Tip:** an example component has been created to get you started.  You can use this as your starting point, just delete what you want and start building!


----------


`./src/containers/` - The location of all your state held smart components, including Redux managed components.

`./src/epubs/` - A collection of epubs you can use to import into your application

`./src/helpers/` - Write all your JS helper functions in here and share them as needed.


----------


**Tip:** [Lodash](https://lodash.com/docs/) is included in this application.  You can import it into your application with the following line at the top of your file: `import _ from 'lodash'`


----------


`./src/pearson/` - since most Pearson components need additional configurations for the component to work, its best to import them into a seperate file, with the configurations you need.

`./src/reducers/` - For use in Redux apps only.  We'll be storing our reducer files here.

`./src/routes/` - For use in multipage apps only.  Most prototypes you build will only need to be single page, but If you need multiple pages this is where the route configurations will go.

`./src/App.js` - Utility file used to wrap your project in redux and direct to the main route.  You probably wont need to touch this.

`./src/Index.js` - This file is required and is the webpack entrypoint.  You probably wont need to touch this.





`.gitignore` - ignore any files you don't want git to track.

`.travis.yml` - travis configurations.

`gulpfile.js` -  This is where youll tell travis where to deploy the app on push.


----------


**Example:** - change the remote path to the name of the project

    gulp.task('default', function () {
        return gulp.src('build/**/*')
            .pipe(sftp({
                host: '159.203.121.101',
                user: 'root',
                remotePath: '/home/webroot/name-of-project'
            }));
    });

    This will deploy to : http://45.55.127.237/name-of-project

## Building The Application

Every time you commit and push your files using GIT, Travis will build your project and serve it to the URL you specified in the gulpfile.js.

The server does not serve the files from a root location, so you must specify the correct folder path.  In your package.json file you'll need to change the following line of code:

      "homepage": "http://45.55.127.237/name-of-project/"

