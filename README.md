# Sprint 1 - Module 2 : React Lifecycle Lesson Plan

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2001%20-%20Advanced%20React/Module%202%20-%20The%20React%20Lifecycle)

### [Previous Lesson Plan](https://github.com/LambdaSchool/Web-ComponentLifecycle-GuidedProject)

----

## Objectives

By the end of this module, learners should be able to:
* Describe the three phases of the React Component Lifecycle
* Properly explain what the 'constructor' and 'render' methods do and what thier place is in the React Component Lifecycle
* use componentDidMount to set a component's state.

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/LambdaSchool/web-guided-project-lifecycle)
* 🐙 [Guided Project Solution](https://github.com/LambdaSchool/web-guided-project-lifecycle-solution)
* 🐙 [Module Project](https://github.com/LambdaSchool/web-module-project-lifecycle)
* 🐙 [Module Project Solution](https://github.com/LambdaSchool/web-module-project-lifecycle-solution)

----

## Guided Project Slack Message
1. Clone without forking the following repo: https://github.com/LambdaSchool/web-guided-project-lifecycle
2. Navigate into both the review, pokemon and doggos folders and run npm i to load dependences.

:point_right: Technical issues spinning up the project? Please head over to the help channel!
:point_right: If you fall behind during lecture and wish to catch up:

git fetch && git reset --hard origin/lecture

:point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
**Unit 3 | Sprint 2 | Module 2: React Lifecycle**
_______________________________________________________
> Zoom Link : *insert zoom link*
>
> Slido: *insert slido link*
>
> Guided Project: https://github.com/LambdaSchool/web-guided-project-lifecycle
>
> Module Project: https://github.com/LambdaSchool/React-Github-User-Card

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

#### What are the three phases of a React component's lifecycle?
* **Mounting, Updating, Unmounting**
* Mounting, Rendering, Unrendering
* Propogating, Rerender, Unmounting
* Updating, Propogating, Unmounting

#### What is NOT a purpose of the constructor function in class components?
* setting initial state
* binding methods to the class
* **fetching initial data from an API**
* calling super()

#### During the Updating Phase, which would cause the render function to run?
* **state or props being updated**
* triggering a DOM event
* refreshing the page
* starting an API call

#### In which component lifecycle method would you fetch initial data?
* render()
* componentWillUnmount()
* componentDidUpdate()
* **componentDidMount()**

## Guided Project Outline

### Introduce Module:
* In the previous lesson we mapped out the basic functioning of a component.
* There is one more feature that we did not include and that is whatever useEffect does.
* Define React Lifecycle.

### Open Review Code:
* Open review code.
* Discuss what useEffect does.
* Add in console.logs
* Discuss when different console.logs excecute.
* Highlight that there are different paths of execution.
* Build a flowchart showing the progression of code for mount.
* Build a flowchart showing progression of code for update.

### Lifecycle Methods:
* Highlight that lifecycle methods are the base building blocks controlling this type of code.
* Highlight that injecting code into parts of the lifecycle of a component is a key part of React.
* Open diagram of lifecycle (here)[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
* Highlight Mounting, Update, and Unmounting phases.

### Build Class Based Lifecycle:
* Return to review code.
* Add console.logs for state build and render.
* Add componentDidMount
* Add componentDidUpdate
* Add prevProps, PrevState arguments.
* Show that we have a similar update path.
* Compare apps.

### Break

### Show Lifecycle Methods is context:
* Open Pokemon application
* Review Code
* Add in componentDidMount
* Add componentDidUpdate(prevProps, prevState)

### Show how nested components are called:
* Add rendering console to pokemon
* Ask students what will be displayed
* Highlight that subcomponents will be rendered before parent components are completely mounted.

### Using componentDidMount with async calls:
* Return to index.js
* Note that data is being added directly to the component.
* Ask about the use of useEffect previously (api calls)
* Note ComponentDidMount does the same.
* Add empty array to state to demonstrate this and setTimeout within componentDidMount.

### Demonstrate componentDidUpdate arguments
* Show prevProps and prevState as arguments of componentDidUpdate.
* Show how these things change when state / props are updated.

### Highlight state setup without the constructor:
* Show the new way of assigning state without the constructor.

### Break

### Building an app using componentDidMount and componentDidUpdate:
* Open Doggos Solution
* Show that we can get any dog breed we want
* Show that when we try to get chihuahua we get husky instead.
* Show https://dog.ceo/dog-api
* Note that we will be building this app from the ground up.

### Build basic HTML and state:
* Build App class component
* Discuss the need for state within our original app.
* Build out the axios call of our dog api in componentDidMount.
* Note the response is a list of links to images
* Set State for dogs
* Add console.logs to show render path.

### Display API call results:
* Add in map on dogs that allows for display of images.
* Add in fixed width to make it easier to see.

### Adding search form:
* Discuss the need to add in a form.
* Map out form needs:
    * Add HTML
    * Add in onChange
    * Add in onSubmit
    * Add in state for holding the the input value
    * **Breakout groups for form creation.**
    * Review breakout code

### Adding API Call for search:
* Show that we can use a variable to pass in breed to api call.
* Discuss the value of making service code seperate (seperation of concerns)
* make seperate fetchDogs method and use everywhere.

### Using componentDidUpdate / Filtering for chihuahua:
* Note the functioning of two properties in componentDidUpdate
* Note that we can catch if state changes explicitly
* Note that we can catch if new state is something sepecific
* Make a new call if chihuahua is the state.

### Module Project Review
* [https://github.com/LambdaSchool/React-Github-User-Card](https://github.com/LambdaSchool/React-Github-User-Card)

## Breakout Slack Messages
Form Construction Breakout Instructions:
*********************************************************
1. Open index.js.
2. Add HTML search form.
3. Add in state to App.js hold form input text.
4. Add onChange event flow to trigger needed to update state.
4. Add onSubmit event flow to trigger the display of the inputText state to the console.

Feel free to make use of our review materials or any other reference to help you.

You have 10mins to complete this task. Good luck!

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 2:30 - 3:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks!

Module Project
Class Component React Github User Card : https://github.com/LambdaSchool/React-Github-User-Card)
Class Slides : https://docs.google.com/presentation/d/1XMqnuxSv2qh1vWfvV-AvqtVZmaZOYP1llu0RrbbHEwo/edit?usp=sharing

Here is a review of today's material.

Key Terminology
* 📝 *ComponentDidMount* - [The React.Component derived method that is triggered after a component initially mounts.](https://linguinecode.com/post/understanding-react-componentdidmount)
* 📝 *ComponentDidUpdate* - [The React.Component derived method that is triggered any time a component update props or state.](https://dev.to/cesareferrari/how-to-use-componentdidupdate-in-react-30en)
* 📝 *ComponentWillUnmount* - [The React.Component derived method that is triggered when a component is removed from the DOM.](https://learn.co/lessons/react-component-mounting-and-unmounting)

Key Concepts
* 📝 *React Lifecycle* - [The overall flow of code execution throughout the birth, operation and death of a React component.](https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b)
