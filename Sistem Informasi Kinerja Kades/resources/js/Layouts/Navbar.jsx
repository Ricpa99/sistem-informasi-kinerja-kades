import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Footer from './Footer';
import Pagination from '@/Components/Pagination';
import { useForm, usePage } from '@inertiajs/react';



export default function Navbar({children}) {
  const link = usePage().component
  const {errors, setData, get} = useForm()
  const submit = (e) =>{
    e.preventDefault();
    get('/')
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg px-5 shadow-slate-200 min-h-20">
        <div className="flex-1">
          <a href='/' className="font-bold text-xl">Laravel</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control relative flex-col columns-2 flex justify-center w-full">
            <form onSubmit={submit}>
                <button type='submit' className="absolute right-0 rounded-r-lg bg-slate-50 hover:bg-slate-100 w-9 h-full p-2">
                  <SearchRoundedIcon className='max-md:w-5'/>
                </button>
                <input name='search' maxLength={100} 
                onChange={(e) => setData('search', e.target.value)}
                type="search" 
                placeholder="Search" 
                className="input input-bordered w-24 max-sm:text-sm md:w-auto" />
            </form>
            </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full flex flex-wrap justify-center items-start p-6">
          {children}
          <div className={`${link == 'Desa' ? 'hidden' : ''}`}>
          <Pagination component={link} />
          </div>
      </div>
      <Footer/>
    </>
  )
}
