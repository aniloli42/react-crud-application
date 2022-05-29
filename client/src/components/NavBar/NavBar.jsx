import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="py-4 px-6 flex gap-5 items-center bg-gray-800">
        <Link to="/">
          <h1 className="font-bold text-2xl text-white select-none">
            CRUD App
          </h1>
        </Link>
      </header>
    </>
  );
};
export default NavBar;
