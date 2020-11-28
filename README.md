# Sprint 1 - Module 2 : React Lifecycle Lesson Plan

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2001%20-%20Advanced%20React/Module%202%20-%20The%20React%20Lifecycle)

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
* 🐙 [Module Project](https://github.com/LambdaSchool/React-Github-User-Card)
* 🐙 [Module Project Solution]()

----

## Guided Project Slack Message
> 1. Clone without forking the following repo: https://github.com/LambdaSchool/web-guided-project-lifecycle
> 2. Navigate into both the review and followAlong folders and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
>
> git fetch && git reset --hard origin/lecture
>
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> Unit 3 | Sprint 1 | **Module 1: React Lifecycle**
> _______________________________________________________
> Zoom Link : *insert zoom link*
> Slido: *insert slido link*
> Guided Project: https://github.com/LambdaSchool/web-guided-project-lifecycle
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

## Lifecycle Methods Chart
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Pokemon (cont.)
Starting Sangbox: https://codesandbox.io/s/n3o80olx5m
Solution Sangbox: https://codesandbox.io/s/k0804z52p5

1. In `App.js`, add a console.log in the constructor that logs "constructor running".
Show this being logged in the console.
2. Add a console.log in the `render` function that logs "render running". Show the
console.
3. Go to `Pokemon.js`, and add a console.log in the component, above the return. Show
the console. You should see these three logs in sequential order. 
4. Add a `componentDidMount` function in `App.js`. Explain that this is where we will
eventual set data to state from an API call, but explain that for this app, we will just
set our data we;ve imported to state, and pretend it's coming from an API.
  - In the state object, set the pokemon property to and empty array - `pokemon: []`
  - In componentDidMount, set the data to state - `this.setState({ pokemon: data })`
5. Add a console.log in the CDM (componentDidMount) function that log "CDM running". Show
the console.
6. Notice that render and Pokemon.js logged again. That's because we are setting state in
CDM. A setState call triggers a re-render for that component, and those logs run again. 
You can refresh at this point, and walk through the whole process, one log at a time.
7. Add a `componentDidUpdate` function. This takes in `prevProps` and `prevState` 
(the previous props and previous state before the new data came in). We can watch for our
data to change on state and props with this lifecycle method. Add an `if` statement
to watch for the `pokemon` property on state to change. Add a console.log inside the
if statement to indicate that we get into the if statement.
8. Add an erroneous if state (something like prevProps.userID !== this.props.userID) to
explain that this block will never run because props.userID will never change in this 
particular app. But if we had a userID prop, we could use this if block to watch for
userID to change, then run an API call to fetch the user with that userID once it is 
passed in as a prop.

## Earthquake
Sandbox: https://codesandbox.io/s/ry6p8j7qq4

9. Open to `App.js` - It is rendering an `EarthquakesContainer` component
10. Open `EarthquakesContainer.js`. Things to look at:
  - No constructor 🤯. It's okay, we don't _need_ to have a constructor if we only have
state in the constructor
  - CDM is fetching initial data, and setting it to state (Don't worry about the syntax
for fetching data, like the .then(). We'll learn that next week.)
  - Render Function is rendering a `EarthquakesMap` component
11. Open `EarthquakesMap.js`. Let's look at `componentDidUpdate` here:
  - It is checking for the data in `this.props.quakes` to change
  - When that data changes, it runs the `loadMap` function
  - In the app, click on the two date dropdowns on the left, and choose dates for the
last week. Click the button. Notice how the map reloads? That's because clicking the 
button fetched new data, which changes the data on `this.props.quakes` which will run
the `loadMap` function, which reloads the map. Pretty awesome!


## Build the dogs app
Solution sandbox: https://codesandbox.io/s/r5w7r2lr1o

12. Open a new sandbox
13. Change `App` to a class component. 
14. Add a `state` object without the constructor:

```javascript
state = {
  doggos: [],
};
```

15. Add a CDM function, and inside it, fetch data from the dogs API. Give this code to 
the students, since we haven't covered fetching data yet.

```javascript
fetch('https://dog.ceo/api/breed/husky/images')
  .then(res => res.json())
  .then(dogs => this.setState({ doggos: dogs.message }))
  .catch(err => console.log('noooo'));
```

16. Display the doggos from state:

```javascript
render() {
  return (
    <div className="App">
      <h1>Hello Doggos</h1>
      <div className="doggos">
        {this.state.doggos.map(doggo => (
          <img width="200" src={doggo} key={doggo} alt={doggo} />
        ))}
      </div>
    </div>
  );
}
```

#### If extra time - build out CDU
17. Add the property 'doggosText' to the state object
18. Add a form to the render

```javascript
render() {
  console.log('rendering');
  return (
    <div className="App">
      <h1>Hello Doggos</h1>
      <input
        type="text"
        value={this.state.doggoText}
        onChange={this.handleChanges}
      />
      <button onClick={this.fetchDoggos}>Fetch doggos</button>
      <div className="doggos">
        {this.state.doggos.map(doggo => (
          <img width="200" src={doggo} key={doggo} alt={doggo} />
        ))}
      </div>
    </div>
  );
}
```

19. Add the handleChanges function for the input
20. Add a `fetchDoggos` function for the button (See solution sandbox - backticks break
this notes page because it's written in markdown...)
21. Notice that in the function, we are setting state. Which will run CDU and render
22. Add the CDU function, and check to see if what was typed in was a 'chihuahua'. If so
refetch the data for husky (See solution again for this function)


### Module Project Review
* [https://github.com/LambdaSchool/React-Github-User-Card](https://github.com/LambdaSchool/React-Github-User-Card)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 3:30 - 4:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
[Class Component React Github User Card](https://github.com/LambdaSchool/React-Github-User-Card)

Here is a review of today's material.

Key Terminology
* 📝 *term* - [description](#)

Key Concepts
* 📝 *concept* - [description](#)