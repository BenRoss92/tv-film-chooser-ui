import './App.css';

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

  const contentRows = contentItems.map((contentItem) => 
    <tr key={contentItem.id}>
      <td>
        {contentItem.title}
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
