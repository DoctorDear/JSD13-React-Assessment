import Table from "./Table";

const AdminView = ({ members }) => {
  return (
    <div>
      <h1>Generation Thailand Home - Admin Section</h1>
      <Table members={members} />
    </div>
  );
};
export default AdminView;
