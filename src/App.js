import { useEffect, useState } from "react";
import watchlist from './testData/watchlist.json';
import "./App.css";

function App() {

  // const initialTitleEntities = [];

  // const [ titleEntities, setTitleEntities ] = useState(initialTitleEntities);

  // useEffect(() => {
  //   	fetch("http://localhost:3000/title-entities").then((result) => {

  //       if (!result.ok) {
  //         throw new Error(`Request failed with status code: ${result.status}`);
  //       }

  //       return result.json();
  //     }).then((entities) => {
  //       setTitleEntities(entities);
  //     });
  // }, []);

  // What data will we get from tmdb when we "click" on an item in the list of suggestions that tmdb gives us?
  // 

  // Created a fake watchlist from a TV Series query and a Movie query combined into a list:
  // Movie query:
    // Endpoint: https://api.themoviedb.org/3/movie/892511?language=en-US
    // Reference: https://developer.themoviedb.org/reference/movie-details
  // TV series query:
    // Endpoint: https://api.themoviedb.org/3/tv/9962?language=en-US
    // Reference: https://developer.themoviedb.org/reference/tv-series-details
  // N.B. Titles are stored under different keys depending on the type of item being queried.
  // A detailed TV Series query uses "name" and a detailed Movie query uses "title". So we render either if they exist.
  const titles = watchlist.map((item) => (
    <tr key={item.id}>
      <td>{item.name || item.title}</td>
    </tr>
  ));

  return (
    <div className="content-table-container">
      <table>
        <thead>
          <tr>
            <th className="table-heading-title">Title</th>
          </tr>
        </thead>
        <tbody>{titles}</tbody>
      </table>
    </div>
  );

  // We want to add state to this functional component. So we use the built-in React State hook (useState).
  // We can then use state inside of our functional components (a.k.a 'function components') without having to write a class

  // Declare a new state variable to represent the list of films - called 'title-entities'
  // Declare a new state variable to represent the loading state - called 'loading'

  // A state variable preserves a value between function calls. React will keep a reference to this value even after re-rendering the component again.

  // Pass in an initial state to useState to set an initial state

  // useState returns an array containing a state variable and a function to update the state - destructure this array and assign it to variables - call them 'titleEntities' and 'setTitleEntities'

  // Update the film list by calling the setTitleEntities function.

  // When state is updated in the component, React will re-render the component.

  // Call useState multiple times on different lines, when you want to define different initial states and different functions for updating different bits of state (e.g. one line for the loading state, another line for the titleEntities state, etc.)

  // use the Effect React Hook (useEffect) for fetching the titleEntities from the fake API endpoint
    // Make sure that you only perform this fetch once by adding an empty list of dependencies (an empty array) as a final argument in useEffect.

  // The Effect React Hook is used for creating a 'side effect' (e.g. a network call, updating a DOM element, setting up a subscription to something).

  // useEffect is what you could use instead of componentDidMount

  // We want to perform an effect (e.g. fetch the list of films and display them) AFTER React has initially updated the DOM the first time.

  // We want (similarly to componentDidMount) to perform our network request and displaying of the updated film list AFTER render() is called (not before - render happens immediately).

  // Our useEffect callback will get called by React automatically after render() is called, and is run after every subsequent render
    // - To remember: effects happen AFTER render. The DOM is guaranteed to be updated before an effect is run.

  // useEffect does NOT block any initial rendering from happening.

  // If you're setting up a subscription (e.g. to an Rx observable), make sure you add a cleanup function








  // start with an initial state of having the list of films be an empty array

  // start with an initial state - 'loading' being set to true

  // fetch the list of films from the endpoint
    // after you get the list of films successfully:
      // Set the list of films to be the array received from the network request
      // set the 'loading' state to be false
  
  // if the list of films is populated and loading is not true, render the table with the list of films inside of it

  // Handle what happens if there is an error with fetching the data - how would we show an error message? e.g. the server running our UI could load just fine, but there could be e.g. an issue with our database or the server running our backend might be down

  // e.g. see https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a

  // return <div>List of films!</div>


}

export default App;
