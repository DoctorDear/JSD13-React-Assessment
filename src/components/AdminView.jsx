import { useState } from "react";
import Table from "./Table";

const AdminView = ({ members, createMember, deleteMember }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createMember({
      name: name,
      lastname: lastname,
      position: position,
    });
    setName("");
    setLastname("");
    setPosition("");
  };
  return (
    <div>
      <div>
        <div className="font-bold">
          <h1>Create User Here</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center gap-4">
          <input
            className="input validator"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="input validator"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="input validator"
          />
          <button type="submit" className="btn bg-blue-500 text-white mt-4">
            Create
          </button>
        </form>
      </div>
      <Table members={members} deleteMember={deleteMember} />
    </div>
  );
};
export default AdminView;
