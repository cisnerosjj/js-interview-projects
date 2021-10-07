const DisplayInfo = ({ data, repositories }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User name</th>
            <th>Organizations</th>
            <th>Repositories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>
              <a>{data.organizations_url}</a>
            </td>
            <td>
              {repositories?.data?.map((repo) => {
                return (
                  <li key={repo.name} className="position-relative">
                    <a
                      href={repo.html_url}
                      className=""
                    >
                      {repo.name}
                    </a>
                  </li>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayInfo;
