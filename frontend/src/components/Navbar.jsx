const Navbar = () => {
  return (
    <nav className="bg-primary md:px-14 p-4 max-w-screen mx-auto text-secondary fixed top-0 right-0 left-0">
      <div className="text-lg container flex mx-auto justify-between md:justify-center items-center font-medium">
        <div className="flex space-x-14 items-center">
          <a className="text-2xl font-semibold flex items-center space-x-3 text-tartiary" href="/">
            <p>IZUMI</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
