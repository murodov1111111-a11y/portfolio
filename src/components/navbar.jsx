const Navbar = () => {
  return (
    <div className="w-full">
      <div className="firefox:bg-opacity-90 w-full sticky bg-opacity-30 backdrop-filter backdrop-blur-lg  border-b  p-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          
          <h1 className="font-bold text-[30px]">Murodov</h1>
        </div>
        <div>
          <ul className="flex gap-5 font-bold cursor-pointer text-[18px]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
