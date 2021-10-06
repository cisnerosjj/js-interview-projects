const DisplayInfo = ({ data, repositories }) => {

const repos = repositories.data

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Repositories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>
              {repos.map((repo) => {
                <div key={repo.name}>{repo.name}</div>
              }) }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayInfo;
