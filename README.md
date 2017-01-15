# angular-pokedex

A single page application that uses AngularJS and NodeJS to display a Pokedex which consists of different Pokemons and their details!

# Dev requirements

- install npm (npm is installed initially on installation of NodeJS)
- install bower using `npm install bower -g`
- install grunt-cli using `npm install grunt-cli -g`

# Setting up our environment

1.) Clone the repository - https://github.com/shadowcat08/angular-pokedex.git <br>
2.) `cd angular-pokedex` <br>
3.) Make sure that bower and npm is installed on your dev since we used a Yeoman Generator (visit http://yeoman.io/ for more info) <br> 
4.) `bower install` (this will install all bower dependencies) <br>
5.) `npm install` (this will install all npm dependencies) <br>

# Running our server

Our server runs on NodeJS using ExpressJS and this will serve as our backend and provide the application data <br>
Simply open another terminal and run this command and a message will appear running our serve on port 9001
```
 node server.js
```
# Starting our application

The application uses Grunt ( a javascript build tool ) which will serve our application on port 9000
Make sure that the grunt-cli is installed then run this command on another terminal
```
  grunt serve
```
# Our Application & Features

Our application goal is to create a mock Pokedex where to display different Pokemons with details, here are some of its features.

  - Scroll down to view all pokemons in list view
  - Click the cards to view the details of the pokemon to see its status
  - You can use the filters and search bar to search the pokemon you want.
  - You can hover over the Skills/Moves part to see the Skill Information
  
 Here is our screencap of our application
 
 ![alt tag](https://github.com/shadowcat08/angular-pokedex/blob/master/app/images/snip.PNG)
 
# Testing

Running `grunt test` will run the unit tests with karma.

# Changelog 

Recent changes can be viewed on Github on the [Releases Page](https://github.com/shadowcat08/angular-pokedex/releases)
 
