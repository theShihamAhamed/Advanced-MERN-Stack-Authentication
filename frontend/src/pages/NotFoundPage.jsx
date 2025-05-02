import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="text-center p-10 max-w-lg mx-auto bg-gray-800 bg-opacity-60 rounded-xl shadow-lg backdrop-blur-md">
      <h1 className="text-6xl font-extrabold text-sky-500 mb-4">404</h1>
      <p className="text-white text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold"
      >
        <ArrowLeft className="size-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
