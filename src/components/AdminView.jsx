import { useState } from "react";
import Table from "./Table";

const AdminView = ({ members, createMember }) => {
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border bg-white"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border bg-white"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border bg-white"
          />
          <button type="submit" className="border bg-white">
            Create
          </button>
        </form>
      </div>
      <Table members={members} />
    </div>
  );
};
export default AdminView;
