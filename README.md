# General Assembly Project 3 : Pepino - built for developpers.
## Goal - to build a full-stack RESTful application. A group project: Collaborators: Siddant Gurung, James Benson, Begona Fernandez

### Timeframe
7 days

## Technologies used
* React.js
* Node.js
* JavaScript (ES6) / HTML5 / SCSS
* Git / GitHub
* MongoDB & Mongoose
* BCrypt & Session Auth
* Bulma CSS Framework
* Chai/Mocha/Supertest
* Bluebird
* request-promise/axios

## External APIs
* npms.io
* FileStack.js

## Our Application: Pepino - built for developpers
<img width="1439" alt="Screenshot 2019-03-21 at 12 36 58" src="https://user-images.githubusercontent.com/9445433/54752442-09bd5b80-4bd6-11e9-80ee-64854e71fc00.png">

A hosted version of this app can be found at https://wdi-pepino.herokuapp.com

### Website overview
This website allows developers to both keep track of their projects, as of the different packages they need to build them, and find other users or projects.

Other users can be found on the Discover Users tab. This page lists all the users showing their bio, the number of projects they have uploaded so far, the name of their latest one and how many comments they have done. The search bar can be used to find an specific user. This will be done automatically while you type every second.

<img width="1440" alt="Screenshot 2019-03-21 at 12 55 21" src="https://user-images.githubusercontent.com/9445433/54753675-8a318b80-4bd9-11e9-8da7-2f1b0508d7ef.png">

The profile details and all their visible projects are available on their user profile page.

<img width="1440" alt="Screenshot 2019-03-21 at 13 05 05" src="https://user-images.githubusercontent.com/9445433/54753851-f9a77b00-4bd9-11e9-96c4-d135f0d44268.png">

If it is a project the user is looking for a list with all the projects in the system is on the Dicover Projects. This page has the same functionality as the Discover Users page.

<img width="1437" alt="Screenshot 2019-03-21 at 13 12 15" src="https://user-images.githubusercontent.com/9445433/54754248-f95baf80-4bda-11e9-845c-33f3f19d28bb.png">

Once the user is logged in projects can be added. Packages can be searched for and added to the project. All changes done to the project are saved every few seconds. Comments can be made on projects and on packages.

![pepino3](https://user-images.githubusercontent.com/9445433/54758412-0630d100-4be4-11e9-8b1a-824ccd0332cc.gif)

### Process
The development process started with wireframes to workout the functionality that we wanted and what models we would need. As we had three distinct areas we decided that each one of us would work on all the different aspects of one given area, from creating the models and controllers to creating the React.js components and testing.

Work was carried out on branches of the code depository for each feature. This was merged with the Development branch of the code and any merge conflicts were fixed as a group. Features were tested on the Development branch before being merged with the Master branch.

Tasks were managed and assigned through the task manager Trello. We performed daily stand-ups to keep track of progress.

### Individual inputs / wins
I was in charge of the side of the website that dealt with the project functionality. For me the greatest win was creating a project edit form with the look and feel of a normal view page. If the user was not logged in or was not the owner of the project being viewed all the fields of the form are disabled and it does not look like a form. However, if they are logged in and the owner then they just need to click on a field to make it active. 

### Challenges
This was the a group project and this introduced the potential to create conflicts when merging code and also maintaining a consistent project vision. We minimised merge conflicts by working on different features but when these happened we resolved them as a group.
 
 ### Future Features
 If we had more time we would like to have made the site even more social with the ability to like a project and follow users.






