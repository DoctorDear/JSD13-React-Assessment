import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
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
      <Navbar setView={setView} />
      {view !== "owner" && (
        <div className="text-3xl font-bold">
          <h1>Generation Thailand</h1>
        </div>
      )}
      {view === "home" && (
        <div className="text-2xl font-medium">
          <h1>React - Assessment</h1>
        </div>
      )}
      {view === "user" && (
        <div className="text-2xl font-medium">
          <h1>Home - User Section</h1>
        </div>
      )}
      {view === "admin" && (
        <div className="text-2xl font-medium">
          <h1>Home - Admin Section</h1>
        </div>
      )}

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
      {view === "owner" && (
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl">
            11 Chirasak Tapphae (เดียร์) - JSD13
          </h1>
          <div className="avatar">
            <div className="w-60 rounded">
              <img alt="Owner-Profile-Picture" src="src\assets\Owner-pic.jpg" />
            </div>
          </div>
          <div>
            <h2 className="font-bold mt-3">Short Biography:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              laboriosam magni nemo quam nostrum atque, molestiae, ut corrupti
              ducimus corporis ab nobis nesciunt? Esse placeat maxime
              dignissimos molestias consequatur fugiat.
            </p>
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
