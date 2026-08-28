import Table from "./Table";

const UserView = ({ members }) => {
  return (
    <div>
      <h1>Home - User Section</h1>
      <Table members={members} />
    </div>
  );
};
export default UserView;
