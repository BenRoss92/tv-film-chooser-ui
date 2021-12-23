import './App.css';

function App() {

  const contentItems = [
    {
      id: 1,
      title: 'Terminator 1',
      runtime: 60
    },
    {
      id: 2,
      title: 'Terminator 2',
      runtime: 70
    },
    {
      id: 3,
      title: 'Terminator 3',
      runtime: 80
    },
    {
      id: 4,
      title: 'Terminator 4',
      runtime: 90
    },
    {
      id: 5,
      title: 'Terminator 5',
      runtime: 100
    },
  ];

  const contentRows = contentItems.map((contentItem) => 
    <tr key={contentItem.id}>
      <td>
        {contentItem.title}
      </td>
      <td>
        {contentItem.runtime}
      </td>
    </tr>
  );

  return (
    <div className="content-table-container">
      <table>
        <thead>
        <tr>
          <th className="table-heading-title">
            Title
          </th>
          <th>
            Runtime (mins)
          </th>
        </tr>
        </thead>
        <tbody>
          {contentRows}
        </tbody>
      </table>
      </div>
  );
}

export default App;
