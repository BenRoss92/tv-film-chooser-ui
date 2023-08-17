import watchlist from './testData/watchlist.json';
import "./App.css";

function App() {

  const contentItems = [
    {
      id: 1,
      title: 'Terminator 1',
    },
    {
      id: 2,
      title: 'Terminator 2',
    },
    {
      id: 3,
      title: 'Terminator 3',
    },
    {
      id: 4,
      title: 'Terminator 4',
    },
    {
      id: 5,
      title: 'Terminator 5',
    },
  ];

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
}

export default App;
