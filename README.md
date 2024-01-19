# Testa_Battery_React

Almost all React application UIs consist of a composition of components. For example, a weather app consists of a component that displays a local name, a component that displays the current temperature, and a graph component that represents a five-day forecast. For this reason, it is a good idea to decompose the UI into component units before developing the React app.

# The layout of this application is shown below

1.3.1 Container and Presentational Components
In the above mentioned component tree, we can see that it is classified as Container Component and Presentational Component.

This is a useful pattern that can be used when developing an application with React. It is easier to reuse by dividing components into two categories.


* Container Component (stateful component):
 - Are concerned with how things work.
 - In general, except for some wrapping divs, they do not have their   own DOM markup and have no style.
 - Provide data and actions to presentational or other container components.
 - Are often stateful, as they tend to serve as data sources.
 
* Presentational Component (stateless component):
 - Are concerned with how things look.
 - Usually have some DOM markup and styles of their own.
 - Receive data and callbacks exclusively via props.
 - Rarely have their own state (when they do, it’s UI state rather than data).


 ## TeslaBattery Container :
 In our app, the TeslaBattery component is responsible for creating and managing data and state as container component, passing it to other Presentational Components, Performing a callback function and changing its sate.

 ## State of application 
 We need to think about what state is requited to be managed in our app, if you look at the final app GIF image at the top of this article, the state values are :
    // Carstats(object array) : An array of battery numerical value objects by car model according to the currently selected condition value(speed, temperature, climate, wheel)
    // config(object): currently selcted conditions object(speed :55, temperature 20 , climate: aricon on , wheel : 19)


That is the single source of truth for our app. Now we will add the constructor method to the TeslaBattery container and set the initial value so that we can manage this state value and pass it to the subcomponent. The TeslaCarcomponent accepts the wheelsize input through props and reenders the Tesla car image and spins the wheels

In render(), the code in the form const {a, b} = c is ES6 Object Destructuring. It Takes the required value out of the object and makes a reference to it.
------------------------------------
Conceptually,the React component is like a JavaScript function and receives an arbitrary input called 'popd' and retuns a React element that describes what should be shown.

## TeslaStats Component : 
Now we are going to build the TeslaStats component. Create the src/components/TeslaStats directory, file TeslaStats.js.
--TeslaStats is also presentational component that receives state, and it takes a list of arrays containing model values by props and renders them.
First, let's consider how to transform a list in JAVASCRIP, The following code uses the map() function to take a numbers  array and return a double value.
This code print [2,4,6,8,10] to the console.
const number = [2,4,6,8,10]
const doubled = numbers.map((number)=> number * 2);
console.log(doubled);

Converting an array to a list in React is almost identiccal. Here we use the JavaScript map function to iterate through the props.carstats array.

For each iteration, it returns a <li> element containing the model and a <li> element surrounding the <p> tag containing miles.
Finally, it returns the listItems array in the <ul> element.

## Tesla component Styles :

That task that this componetn performs is to iterate through the props.carstats array and bind a particular class to an element based on stat.model. You can then replace the background image to display the Tesla model.

## Reusable TeslaCounter Component

Tesla Speed and external temperature controls should be reusable components, so i will make them a generic Counter component that allows for other metadata such as step, minimum, maximum, and title and units(mph / degrees).
Also, Unlike the components we have created so far, we need an action to change the state value.