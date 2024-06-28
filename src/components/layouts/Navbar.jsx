const Navbar = () => {
  const currentPage = location.pathname;

  return (
    <nav className="flex justify-between bg-fourth px-4 py-2">
      <h1 className="font-semibold">React Todo App</h1>
      <div className="flex gap-x-5 font-medium">
        <a
          href="/"
          className={`${
            currentPage === "/" ? "underline text-second" : ""
          } underline-offset-2 decoration-2 decoration-second `}
        >
          Todo
        </a>
        <a
          href="/add"
          className={`${
            currentPage === "/add" ? "underline text-second" : ""
          } underline-offset-2 decoration-2 decoration-second `}
        >
          Add
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
