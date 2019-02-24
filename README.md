# react-state-preserve
A tiny application regarding the various ways to preserve state of react application on page refresh and navigation

## Correct Implementation
Using the localstorage of the browsers, we can preserve the state of a react application. We can store the values of the concerned state parameters into the localstorage on every state update. Also, in the componentDidMount lifecycle mthod we can get the value of the state paramters and alter the state accordingly.

Hovewer, this should only be done for non-private data paramters.

## Incorrect Implementation
On every state update we can make a call to the server and store the value of the state paramters in a db. We can re-fetch the value on every page refresh or navigation.

This approach would be ideal for private data that needs to remain secure.

However, in case of UI-related states, like the open/close state of a sidebar or a navbar, this would mean an extra call to the datatbase, resulting in delayed changes at the frontend due to network latency.
It would as a result hinder the user experience and make the whole process slow

## Event Bubbling
According to [https://javascript.info/bubbling-and-capturing](https://javascript.info/bubbling-and-capturing), "When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors".
Hence, if there is a click event on an element and its parent, the event on the child will occur first and then the one on the parent. However, in order to stop that from happening, we can use the stopPropagation() function available on the event object.

## Installation Instructions
* Clone the repository.
* Navigate to the client directory and run npm install.
* Navigate to the server directory and run npm install.
* Add your DB configurations in a config.js file in the server directory. Use config.bak.js for reference. This is necessary for the second implementation to work properly.
