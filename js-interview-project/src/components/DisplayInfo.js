const DisplayInfo = ({ data, repositories }) => {
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
              {repositories?.data?.map((repo) => {
                return <a href={repo.html_url}>{repo.name}</a>;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayInfo;
