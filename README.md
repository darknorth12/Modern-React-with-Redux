Section 2: Content building using JSX 

    create functional React component
    variable reference
    htmlFor, className

    A component is a function or class that produces HTML to show user (using JSX) and handles feedback from the user (using event handles).
       
    JSX is a dialect of JS. Babel converts Jsx to normal JS. (babeljs.io)
    Internally Jsx is converted to React.createElement() function call.

Section 3: Communicating with Props
    
    passing props
    props.children 
    reusable components

Section 4 & 5: class based component and state in react component

   create class based component
   state in class based component

   "State" is a JS object that contains data relevant to a component
   Updating "state" on a component causes the component to (almost) instantly rerender
   State must be initialized when a component is created (usually in constructor)
   State can  only be updated using the function "setState"