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
State can only be updated using the function "setState"

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

Section 11: Youtube practice app

Section 12: Understanding Hooks in React

     Hooks are the way to write reusable code, instead of more classic techniques like inheritance

     useState => function that let you state in a functional component
     useEffect => function that lets you use something like lifecycle methods in a functional component
     useRef => function that lets you create a 'ref' in a functional component

     Primitive Hooks => useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef,
                        useImperativeHandle, useLayoutEffect, useDebugValue

     We can also make custom hooks using these primitive hooks

     useEffect =>
        We can configure the hook to run some code automatically in on of the three scenarios:

        1. When the component is rendered for the first time only.
           useEffect(() => {}, []);

        2. When the component is rendered for the first time and whenever it rerenders.
           useEffect(() => {});

        3. When the component is rendered for the first time and (after every rerenders if data has changed since last render).
           useEffect(() => {}, [data]);
    
    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span> : XSS Attack

    166 lecture => important => useEffect's Cleanup Function

**Important**    debouncing using useEffect in React =>
                        useEffect(() => {
                                 const timer = setTimeout(() => {
                                 if (searchTerm) getSearchResults();
                                 }, 500);
                                 return () => clearTimeout(timer);
                                }, [searchTerm]);


Section 13: Navigation
    
        window.location.pathname
        window.history.pushState({},'','/route') => changes only url

        create new event and propagate across =>
            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
        
        listen to new event and remove
            window.addEventListener("popstate", onLocationChange);
            window.removeEventListener("popstate", onLocationChange);
        
        for default behaviour on pressing click with ctrl key(windows) or cmd key (macOS) =>
            if (e.metaKey || e.ctrlKey) return;
    
Section 14: Custom Hooks

        Best way to create reusable code in a React project (besides components)
        Created by  extracting hook-related code out of a function component
        custom hooks always make use of at least one primitive hook internally
        Each custom hook should have one purpose 

        Process of creating Reusable Hooks:
            Identify each line of code related to some single purpose
            Identify the inputs to that code
            Identify The outputs to that code
            Extract all of the code into a separate function, receiving the inputs as arguments, and returning the outputs
    
