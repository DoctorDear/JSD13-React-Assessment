const Navbar = ({ setView }) => {
  return (
    <div>
      <nav
        className="flex justify-end gap-6 text-lg font-bold border-b border-zinc-400 px-8 py-4 mb-10
      "
      >
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("owner")}>Owner</button>
      </nav>
    </div>
  );
};
export default Navbar;
