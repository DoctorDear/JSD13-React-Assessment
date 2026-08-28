const Table = ({ members, deleteMember }) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((mem) => (
            <tr key={mem.id}>
              <td>{mem.name}</td>
              <td>{mem.lastname}</td>
              <td>{mem.position}</td>
              <td>
                <button
                  className="btn bg-red-700 text-white"
                  onClick={() => deleteMember(mem.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
