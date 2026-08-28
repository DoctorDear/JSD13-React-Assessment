import { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";
const App = () => {
  const [members, setMembers] = useState([]);
  const [view, setView] = useState("home");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(
          "https://6a904f6cff2484963a5df376.mockapi.io/api/v1/members",
        );
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetch data", error);
      }
    };
    fetchMembers();
  }, []);

  const createMember = async (newMember) => {
    try {
      const response = await fetch(
        "https://6a904f6cff2484963a5df376.mockapi.io/api/v1/members",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMember),
        },
      );
      const data = await response.json();
      setMembers([...members, data]);
    } catch (error) {
      console.error("Error creating member", error);
    }
  };

  const deleteMember = async (id) => {
    try {
      const response = await fetch(
        `https://6a904f6cff2484963a5df376.mockapi.io/api/v1/members/${id}`,
        {
          method: "DELETE",
        },
      );
      setMembers(members.filter((mem) => mem.id !== id));
    } catch (error) {
      console.error("Error removing member", error);
    }
  };

  return (
    <div className="container mx-auto p-6 text-center bg-zinc-200">
      {/* navbar  */}
      <nav className="flex gap-6 text-lg text-center">
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("owner")}>Owner</button>
      </nav>

      {view !== "owner" && <h1>Generation Thailand</h1>}
      {view === "home" && <h1>React - Assessment</h1>}
      {view === "user" && <h1>Home - User Section</h1>}
      {view === "admin" && <h1>Home - Admin Section</h1>}

      {view !== "owner" && (
        <div className="flex justify-center gap-10 m-8">
          <div className="btn">
            <button onClick={() => setView("user")}>User Home Section</button>
          </div>
          <div className="btn">
            <button onClick={() => setView("admin")}>Admin Home Section</button>
          </div>
        </div>
      )}

      {view === "user" && <UserView members={members} />}
      {view === "admin" && (
        <AdminView
          members={members}
          createMember={createMember}
          deleteMember={deleteMember}
        />
      )}
    </div>
  );
};
export default App;
