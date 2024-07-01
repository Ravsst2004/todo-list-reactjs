const Navbar = () => {
  const currentPage = location.pathname;

  return (
    <nav className="flex justify-between bg-blue-500 px-4 py-2">
      <h1 className="font-semibold text-slate-100">React Todo App</h1>
      <div className="flex gap-x-5 font-medium">
        <a
          href="/"
          className={`${
            currentPage === "/" ? "underline text-slate-100" : ""
          } underline-offset-2 decoration-2 decoration-slate-100`}
        >
          Todo
        </a>
        <a
          href="/available"
          className={`${
            currentPage === "/available" ? "underline text-slate-100" : ""
          } underline-offset-2 decoration-2 decoration-slate-100 `}
        >
          Available
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
