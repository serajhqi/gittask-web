import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="p-6">
      <nav className="mb-6">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 hover:text-blue-700">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This is where the routed components will be rendered */}
    </div>
  );
}