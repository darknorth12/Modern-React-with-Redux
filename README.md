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

**Important** debouncing using useEffect in React =>
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

Section 15 : deployment with vercel and Netlify

Section 16 : Introduction to Redux

        Redux is a state management library
        makes creating complex applications easier
        not explicitly designed to work with React

        Redux cycle =>
        Action Creator -> Action -> dispatch -> Reducers -> State
        https://codepen.io/Darknorth12/pen/zYNEemR
        https://codepen.io/sgrider/pres/oQjBvG

Section 17 : Integrating React with Redux

        appliation hierarachy => Provider -> App -> Connect -> SongList

        if file is named index.js then only import the folder webpack will automaticatically take the index file

        songs app => example of using react, redux, and react-redux

Section 18 : Async actions with redux-thunk; action creators' rules; API requests using redux

        redux-thunk -> middleware to help us make requests in a redux application

        General Data Loading with Redux =>
          1. Component gets rendered onto the screen
          2. Component's 'componentDidMount' lifecycle or useEffect method gets called
          3. we call action creator from 'componentDidMount' or useEffect
          4. Action creator runs code to make an API request
          5. API responds with data
          6. Action creator returns an 'action' with the fetched data on the 'payload' property
          7. Some reducer sees the action, return the data off the 'payload'
          8. Because we generated some new state object, redux/react-redux cause the React app to be rerendered

        General Principles =>
            Componemts are generally responsible for fetching data they need by calling an action creator (Steps 1-3 from General Data Loading with Redux)

            Action creators ar responsible for makeing API requests (Steps 4-6 from General Data Loading with Redux)

            We get feteched data into a component by generating new state in our redux store, then getting that ino our component through mapStateToProps Steps 7-8 from General Data Loading with Redux)

        Error: Actions must be plain objects. Use custom middleware for async actions. (due to async await)
        Reason: 1. Action creators must return plain JS objects with a type property.
                2. By the time our action gets to a reducer, we won't have fetched our data.

        redux cycle with async action creator =>
            Action Creator -(Produces an)-> Action -(Gets fed to)-> dispatch -(forwards action to)-> Middleware -(sends action to)-> Reducers -(creates new)-> State

        Middleware in redux =>
            function that gets called with every action we dispatch
            has ability to stop, modify or make changes to actions
            tons of open source middleware exist

        Normal Rules =>
            1. Action creators must return action objects.
            2. Actions must have a 'type' property
            3. Actions can optionally have a 'payload'

        Rules with Redux Thunk =>
            1. Action creators can return action objects or functions
            2. If an action gets returned, then it must have a 'type' property
            3. If an action gets returned, then it can optionally have a 'payload'

Section 19: Redux Store Design

    Rules of Reducers:
        Must return any value except 'undefined'
        produces 'state' or data to be used inside of the app using only previous state and the action (reducers are pure function)
        Must not return reach 'out of itself' to decide what value to return
        Must not mutate its input 'state' argument

    lodash =>
    _.omit()
    _.memoize()

    export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts());
        const userIds = _.uniq(_.map(getState().posts, "userId"));
        userIds.forEach((id) => dispatch(fetchUser(id)));
    };

     _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();

    /* Memoization approach */
    export const fetchUser = (id) => (dispatch) => {
      _fetchUser(id, dispatch);
    };

    const _fetchUser = _.memoize(async (id, dispatch) => {
      const response = await jsonPlaceholder.get(`/users/${id}`);
      dispatch({ type: "FETCH_USER", payload: response.data });
    });

Section 20: Navigation using React-router

    npm i --save react-router-dom

    import { BrowserRouter, Route, Link } from "react-router-dom";

    const PageOne = () => {
      return (
        <div>
          PageOne <Link to="/pagetwo">navigate to page two</Link>
        </div>
      );
    };
    const PageTwo = () => {
      return (
        <div>
          PageTwo<Link to="/">navigate to page one</Link>
        </div>
      );
    };

    const App = () => {
      return (
        <div>
          <BrowserRouter>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
          </BrowserRouter>
        </div>
      );
    };


    other types of router HashRouter, MemoryRouter

Section 21: Handling Authentication with React

    <script src="https://apis.google.com/js/api.js"></script>

Section 22: Redux-Dev-Tools

    import { createStore, applyMiddleware, compose } from "redux";

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store=createStore(reducers,composeEnhancers(applyMiddleware()))

    http://localhost:3000/?debug_session=<any_string>=> to retain redux devtool steps on reloading the page as well. You can create separate sessions as well by giving different string value.

Section 23: Redux-form

    npm install redux-form --legacy-peer-deps
    https://redux-form.com/8.3.0/examples/simple/

Section 24: Rest-based React apps, programatic navigation, api creation using json-server

    JSON-server => simple rest server library
    api/package.json => "server": "json-server -p 3001 -w db.json" to run the server

    programmatic navigation from non-component
        history.js => import { createBrowserHistory } from "history";
                      export default createBrowserHistory();

        App.js => import history from 'history.js'
                  <Router history={history}>

        non-component js file => import history from 'history.js'
                                 history.push("/path")

        PUT request: update all properties of a record
        PATCH request: update some properties of a record

Section 25 : React Portals

    There is a issue in creating modal with react.

    **important** stacking context (css)
         one way to create a stacking context is give {position:relative, z-index:0} to parent element of modal.

    Portal make the component direct child of body element or any other element.

    eg => ReactDOM.createPortal(<Component />, document.querySelector("#modal))

Section 26: Implementing Streaming video using node-media-server

    https://github.com/illuspas/Node-Media-Server
