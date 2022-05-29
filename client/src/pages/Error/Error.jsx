import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="w-full min-h-full h-96 max-h-screen  flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-gray-200 font-black text-7xl">Error 404</h2>
        <p className="text-xl text-gray-400">Page not found!</p>

        <Link to="/" className="py-2 px-6 bg-gray-700 rounded text-white mt-6">
          Go Home
        </Link>
      </div>
    </main>
  );
};
export default Error;
