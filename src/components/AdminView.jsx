import Table from "./Table";

const AdminView = ({ members }) => {
  return (
    <div>
      <h1>Home - Admin Section</h1>
      <Table members={members} />
    </div>
  );
};
export default AdminView;
