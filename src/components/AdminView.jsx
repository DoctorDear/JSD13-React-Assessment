import { useState } from "react";
import Table from "./Table";

const AdminView = ({ members, createMember, deleteMember, updateMember }) => {
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
    <div className="flex flex-col gap-8 my-6">
      <div className="flex flex-col items-start w-fit mx-auto gap-3">
        <h2 className="font-bold text-lg text-black">Create User Here</h2>
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
          <button type="submit" className="btn bg-blue-500 text-white ">
            Create
          </button>
        </form>
      </div>
      <Table
        members={members}
        deleteMember={deleteMember}
        updateMember={updateMember}
      />
    </div>
  );
};
export default AdminView;
