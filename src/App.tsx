import { useObservable } from '@ngneat/react-rxjs';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { GetUserRepo } from './store/user.store';
import { useEffect } from 'react';
import ProjectsModal from './components/project/projects-modal.component';

export default function App() {

  const navigate = useNavigate()
  const [isLogin] = useObservable(GetUserRepo().isLogin$)

  useEffect(() => {
    if (!isLogin) {
      navigate("/login")
    }
  }, [isLogin])

  return (
    <div className="bg-slate-500 h-screen flex flex-col justify-between">
      {/* <nav className="mb-6">
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
      </nav> */}
      <div className=''>
        <Outlet />
      </div>
      <div className='bg-red-100 p-1 flex gap-4 px-6 border-t-2 border-black'>
        <div className='hover:underline hover:underline-offset-4 cursor-pointer hover:font-medium'>
          <Link to="/" >
            home
          </Link>
        </div>
        <div className='hover:underline hover:underline-offset-4 cursor-pointer hover:font-medium'>
          <Link to="/settings" >
            settings
          </Link>
        </div>
        <div className='hover:underline hover:underline-offset-4 cursor-pointer hover:font-medium'>
          <Link to="/help" >
            help
          </Link>
        </div>
        <div className='hover:underline hover:underline-offset-4 cursor-pointer hover:font-medium'>
          <Link to="/about" >
            about
          </Link>
        </div>
        <div className='flex-1 flex justify-end'>
          <ProjectsModal />
        </div>
      </div>
    </div>
  );
}