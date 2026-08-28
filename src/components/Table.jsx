const Table = ({ members }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((mem) => (
            <tr key={mem.id}>
              <td>{mem.name}</td>
              <td>{mem.lastname}</td>
              <td>{mem.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
