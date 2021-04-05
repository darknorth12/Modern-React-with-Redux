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

Section 6: Class component: lifecycle methods

       constructor -> render -> content visible on screen -> componentDidMount (called only once after first render) -> Sit and wait till the component update -> componentDidUpdate -> componentWillUnmount

       constructor => Good place to do one-time setup
       render => avoid doing anything except returning JSX
       componentDidMount => Good place to do data-loading
       componentDidUpdate => Good place to do more data-loading when state/props changes
       componentWillMount => Good place to do cleanup (especially non-react stuffs)

       other lifecycle methods (rarely used) => shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate

       Intiazing state outside the constructor is equivalent to intialize state inside the constructor, babel converts the code

       Default Props can declared in the functional component by assigning defaultProps. eg: 
              const Spinner = (props) => {return <div>{props.message}</div>};
              Spinner.defaultProps = {message : 'dummyMessage'} 

       Avoid conditionals in Render, use helper functions instead

Sectiion 7, 8 & 9 : Handling user inputs, making api requests, rendering list of elements
    
    controlled and uncontrolled form elements
    Axios

Section 10 : React Refs, Dynamic height of image, grid css
    
    imageRef = React.createRef() => ref={imageRef} => gives access to a single DOM element.
    WE create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props.


    