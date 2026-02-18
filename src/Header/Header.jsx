function Header() {
  return (
    <>
      <header className="bg-black text-green-500 p-4 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Mon protofolio</h1>
          <nav className="space-x-4">
            <a
              href="#aboutme"
              className="hover:text-green-300 hover:border-b-2 border-green-300 hover:text-lg transition-all duration-200 "
            >
              AboutMe
            </a>
            <a
              href="#skill"
              className="hover:text-green-300 hover:border-b-2 border-green-300 hover:text-lg transition-all duration-200 "
            >
              Competence
            </a>
            <a
              href="#project"
              className="hover:text-green-300 hover:border-b-2 border-green-300 hover:text-lg transition-all duration-200 "
            >
              Project
            </a>
            <a
              href="#contactme"
              className="hover:text-green-300 hover:border-b-2 border-green-300 hover:text-lg transition-all duration-200 "
            >
              Contact Me
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
