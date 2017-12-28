

[![Build Status](https://travis-ci.com/pearson-ux/pearson-glp-platform.svg?token=yRiZW31ciCX2AwmRD34E&branch=master)](https://travis-ci.com/pearson-ux/pearson-glp-platform)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To learn more about Create React App, check out the [documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

This platform is a playground and used for prototyping in a React App environment.  When you use this platform you will have access to the following:

 - Redux
 - React Router 4
 - Pearson API Services (Coming Soon)
 - Elements SDK
 - Configurable to pull in styling from a custom PatternLab project.

There is no right or wrong way to play on the playground, however we do have a few recommendations while building and we'll go through them below.

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


## Using the EPub Add-On
You can use our epub components to simulate a text book experience.  With this add-on you can wrap the components in a react container and create custom components around it, without ever altering the epubs themselves.  Your essestially creating your own textboox experience.

 In order to do this, you will need some basic understanding of [React Router 4](https://reacttraining.com/react-router/web/guides/philosophy).

**Step 1 of 3**

Start by cloning, installing, and running the application.  Next create a custom stateless route component.  This component will stitch the book together using router.  First create file called 'YourEpubRoutes.js' (or whatever you want) and import the router and navigation controls.

    import React from 'react';
    import { HashRouter, Route, Switch } from 'react-router-dom';
    import NavControls from '../epubs/feldman/NavControls';
    
Next import the epub pages you want to include.  The books are located in the .`/src/epubs/` directory.

    import Page_1 from '../epubs/feldman/chapter-eight/Page_1';
    import Page_2 from '../epubs/feldman/chapter-eight/Page_2';
    import Page_3 from '../epubs/feldman/chapter-eight/Page_3';
    
Next, add your custom routes to an array.  You can call the path anything you want, but its strongly advised to use language similar to the file architecture in `.src/epubs/`

    	const routes = [
    	{
    		path: '/chapter-eight/1',
    		component: Page_1
    	},
    	{
    		path: '/chapter-eight/2',
    		component: Page_2
    	},
    	{
    		path: '/chapter-eight/3',
    		component: Page_3
    	},
    	{
    		path: '/chapter-eight/4',
    		component: Page_1
    	}
    ];

Next well create a function that maps through the array and creates the actual routes.

    const FeldmanRoutes = routes.map((route, i) => {
    	return <Route key={i} path={route.path} render={route.component} />;
    });

Finally, well create the component and add the .jsx

    const YourEpubRoutes = props => {
        return (
            <HashRouter basename={'/myBook'}>
                <div>
                    <NavControls
                        basePath={props.match}
                        currentPath={props.currentPath}
                        numberOfPages={routes.length}
                        hash={props.hash}
                        query={props.query}
                    />
                    <Switch>{FeldmanRoutes}</Switch>
                </div>
            </HashRouter>
        );
    };
    
    export default YourEpubRoutes;

Here is a gist of what the file should look like: [myEpub.js](https://gist.github.com/davodey/2f6f57f78e7aedcfcd97b07d91c389a2)

**Step 2 of 3**

Now well want to create the wrapper component that holds the contents of the book you just created.  

Create a new component file and call it something like 'myBook.js' and import the routes you just created.

    import React from 'react';
    import YourEpubRoutes from './yourEpubRoutes'

Next create the component and wrap the routes with some div tags.  You can customize this however you like, even add other components to this file.

    const myBook = props => {
        return (
            <div className="revel">
                <div className="chapter">
                    <YourEpubRoutes
                        match={props.match.path}
                        currentPath={props.history.location.pathname}
                        hash={props.location.hash}
                        query={props.location.search}
                    />
                </div>
            </div>
        );
    };
    
    export default myBook;

Important: in order for the navigation to work correctly you must have the following props on your Routing component:

    match={props.match.path}
    currentPath={props.history.location.pathname}
    hash={props.location.hash}
    query={props.location.search}

Here is another gist of what this file should look like: [myBook.js](https://gist.github.com/davodey/ec36dcff40e5b4bba4488b4742d022f4)

**Step 3**

Finally were going to add the route to the main application.  Open up `./src/routes/index.js` and import the myBook component:

    import myBook from '../components/MyBook';

Then add the following to the MainRoute component.

	<Route path={'/myBook} component={MyBook} />
Thats it you just added a custom textbook using the epub add-on.

You should be able to go to the following URL and view your book:

http://localhost:3000/#/myBook/chapter-eight/1


## Importing styles from an existing Pattern Lab
Importing a custom pattern lab stylesheet into this platform is is easy.  In your package.json file youll need to change the following line of code:

      "elements-patternlab": "git+ssh://git@github.com:repo-location"
      
If you don't know the repo location path you can find it by going to the Github repository.  Click 'clone or download', then click the link 'use ssh'


## Getting data from an API

The platform returns data from an API or a Realtime Firebase database.  Data from an API is called with a GET request, run through a Redux reducer, and is stored as state in the Redux global store. 

To get started open `./src/actions/getApiData.js` and change the apiUrl to your API endpoint.  

    const apiUrl =
    	'https://cardinal-react-two.firebaseio.com/conversations/a6c4e48d-a80a-455e-b432-c2b962c4c775.json';

Next, pass in any parameters that might be required.  This could be an authentication token, or any other property the api needs to return data.

		params: {
			token: 'a59674f5-f9ae-41f2-b30d-9438fd87b6db',
		}

The data will be returned as an object wherever your Redux store is connected.  We have it setup in our example on `./src/components/Home.js`  The object is: apiData and can be passed into other React components with `{this.props.apiData}`

## Connecting to Firebase

The platform is also configured to get data from a Realtime Firebase database.

To get started open `./src/helpers/firebase.js`

Change the following configurations to match your instance

    const config = {
    	apiKey: 'AIzaSyDclxEoyu_V4hUfILx8rAPtPQ08TMIIxKA',
    	authDomain: 'pearson-glp-platform-demo.firebaseapp.com',
    	databaseURL: 'https://pearson-glp-platform-demo.firebaseio.com',
    	projectId: 'pearson-glp-platform-demo',
    	storageBucket: '',
    	messagingSenderId: '964759043519'
    };

Once you connect your database, an object will be available wherever your Redux store is connected.    We have it setup in our example on `./src/components/Home.js`  The object is: firebaseData and can be passed into other React components with `{this.props.firebaseData}`  This object `Home.js` will update in realtime as the database gets updated.  

## Posting to the database

coming soon...





