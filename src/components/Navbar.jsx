import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinkClass = ({ isActive }) =>
  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-[#E50914]' : 'text-black hover:text-[#E50914]'}`

export default function Navbar({ user, onLogout }) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={close}>
          <span className="text-2xl font-extrabold text-[#E50914]">RedRemit</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/send" className={navLinkClass}>Send Money</NavLink>
          <NavLink to="/airtime" className={navLinkClass}>Buy Data</NavLink>
          <NavLink to="/school-fees" className={navLinkClass}>School Fees</NavLink>
          <NavLink to="/electricity" className={navLinkClass}>Electricity</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/help" className={navLinkClass}>Help</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <NavLink to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#E50914]">Dashboard</NavLink>
              <button onClick={onLogout} className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-[#E50914]">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-[#E50914]">Log in</NavLink>
              <NavLink to="/register" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#E50914]">Sign up</NavLink>
            </>
          )}
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center px-3 py-2 border rounded-md text-black" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.75 6.75h16.5v1.5H3.75zm0 4.5h16.5v1.5H3.75zm0 4.5h16.5v1.5H3.75z"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/send" onClick={close} className={navLinkClass}>Send Money</NavLink>
            <NavLink to="/airtime" onClick={close} className={navLinkClass}>Buy Data</NavLink>
            <NavLink to="/school-fees" onClick={close} className={navLinkClass}>School Fees</NavLink>
            <NavLink to="/electricity" onClick={close} className={navLinkClass}>Electricity</NavLink>
            <NavLink to="/about" onClick={close} className={navLinkClass}>About</NavLink>
            <NavLink to="/help" onClick={close} className={navLinkClass}>Help</NavLink>
            <div className="pt-2 flex items-center gap-2">
              {user ? (
                <>
                  <NavLink to="/dashboard" onClick={close} className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#E50914]">Dashboard</NavLink>
                  <button onClick={()=>{ onLogout(); close(); }} className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-[#E50914]">Logout</button>
                </>
              ) : (
                <>
                  <NavLink to="/login" onClick={close} className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-[#E50914]">Log in</NavLink>
                  <NavLink to="/register" onClick={close} className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#E50914]">Sign up</NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
