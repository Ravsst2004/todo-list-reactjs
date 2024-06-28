const Navbar = () => {
  return (
    <nav className="flex justify-between bg-fourth px-4 py-2">
      <h1 className="font-semibold">React Todo App</h1>
      <div className="flex gap-x-5 font-medium">
        <a href="">Todo</a>
        <a href="">Add</a>
      </div>
    </nav>
  );
};

export default Navbar;
