import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-gray-800 border-b border-gray-700">
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 text-gray-900 font-bold">
            HJ
          </span>
          <span className="text-white font-semibold tracking-wide truncate">
            Mueblería Hermanos Jota
          </span>
        </Link>

        <img
          src="/avatar.svg"
          alt="Avatar de usuario"
          className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-600"
        />
      </div>
    </header>
  );
}

export default Navbar;
