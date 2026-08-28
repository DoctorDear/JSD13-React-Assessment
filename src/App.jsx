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

  console.log(members);
  return (
    <div className="bg-zinc-200">
      {/* <Navbar /> */}

      <button onClick={() => setView("home")}>Home</button>

      {view === "home" && <h1>Generation Thailand React - Assessment</h1>}
      {view === "user" && <UserView members={members} />}
      {view === "admin" && <AdminView members={members} />}
      <div className="flex gap-10">
        <div className="bg-white rounded-md ">
          <button onClick={() => setView("user")}>User Home Section</button>
        </div>
        <div className="bg-white rounded-md ">
          <button onClick={() => setView("admin")}>Admin Home Section</button>
        </div>
      </div>
    </div>
  );
};
export default App;
