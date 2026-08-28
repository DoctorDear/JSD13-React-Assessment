const Navbar = ({ setView }) => {
  return (
    <div>
      <nav className="flex justify-end gap-6 text-lg text-center font-bold border-b-zinc-700">
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("owner")}>Owner</button>
      </nav>
    </div>
  );
};
export default Navbar;
