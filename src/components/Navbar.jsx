import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-white bg-[#E50914]' : 'text-black hover:text-[#E50914]'}`

export default function Navbar({ user, onLogout }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
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
        <div className="flex items-center gap-2">
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
      </div>
    </header>
  )
}
