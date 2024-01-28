### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a front-end library developed and sponsored by Facebook that enables you to create reusable components that incorporate, JS, CSS and HTML that are rendered inside of your application. You can use it in static sites, mobile apps and desktop applications or even add it into existing apps.

- What is Babel?
  Babel is a JS code compiler that converts ECMAScript 2015+ into a backwards compatible version of JS in current and older browsers.

- What is JSX?
  JSX stands for JavaScript XML. It allows us to write HTML in React.

- How is a Component created in React?
  A component is created by inserting a JS function into your app.js and adding a return statement to customize what you want it to look like. At the end of the file it is exported so it can be reused throughout your application.

- What are some differences between state and props?
  Props stand for properties which are immutable read-only data that is passed between components. State is the data that is specific to a component and is mutable.

- What does "downward data flow" refer to in React?
  It is the idea that parent components pass data down to their children via props.

- What is a controlled component?
  It is a component that is handled by React parent components rather than being managed by the DOM.

- What is an uncontrolled component?
  An uncontrolled component has control of their own state and the data is handled by the DOM.

- What is the purpose of the `key` prop when rendering a list of components?
  A key prop gives each element in an array a unique identifier so each item in the array is rendered as new.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  It confuses React and will cause a console error.

- Describe useEffect. What use cases is it used for in React components?
  The useEffect hook tells React that the component needs to do something after render. It is used in cases where a message would be displayed after a button is clicked or when a component requires cleanup after an event.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  The useRef hook allows you to reference a value that isn't needed for rendering. It does not rerender a component if the ref value is changed.

- When would you use a ref? When wouldn't you use one?
  You could use a ref to manipulate the DOM, to play/pause a video or to give focus a text input.

- What is a custom hook in React? When would you want to write one?
  A custom hook lets you share stateful logic but not state itself. Writing a custom hook is needed when you need to create a customization for your app such as to show network status or if the user is online or not.
