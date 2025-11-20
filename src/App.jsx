import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SendMoney from './pages/SendMoney'
import Airtime from './pages/Airtime'
import SchoolFees from './pages/SchoolFees'
import Electricity from './pages/Electricity'
import About from './pages/About'
import Help from './pages/Help'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import { Login, Register } from './pages/Auth'
import { getToken, setToken } from './lib/api'

function useUser() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const raw = localStorage.getItem('user')
    if (raw) setUser(JSON.parse(raw))
  }, [])
  const onAuth = (u) => { localStorage.setItem('user', JSON.stringify(u)); setUser(u) }
  const onLogout = () => { localStorage.removeItem('user'); localStorage.removeItem('token'); setUser(null) }
  return { user, onAuth, onLogout }
}

export default function App() {
  const { user, onAuth, onLogout } = useUser()
  const location = useLocation()

  useEffect(()=>{ document.documentElement.style.backgroundColor = '#FFFFFF' },[])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar user={user} onLogout={onLogout} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<RequireAuth user={user}><SendMoney /></RequireAuth>} />
          <Route path="/airtime" element={<RequireAuth user={user}><Airtime /></RequireAuth>} />
          <Route path="/school-fees" element={<RequireAuth user={user}><SchoolFees /></RequireAuth>} />
          <Route path="/electricity" element={<RequireAuth user={user}><Electricity /></RequireAuth>} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/dashboard" element={<RequireAuth user={user}><Dashboard /></RequireAuth>} />
          <Route path="/admin" element={<RequireAuth user={user}><Admin /></RequireAuth>} />
          <Route path="/login" element={<Login onAuth={onAuth} />} />
          <Route path="/register" element={<Register onAuth={onAuth} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

function RequireAuth({ children, user }) {
  if (!user) {
    return (
      <main className="bg-white min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-black">Please log in</h2>
          <p className="mt-2 text-black/80">You need an account to use this feature.</p>
          <div className="mt-4 flex gap-3 justify-center">
            <a href="/login" className="px-6 py-2 rounded-md bg-[#E50914] text-white font-semibold">Log in</a>
            <a href="/register" className="px-6 py-2 rounded-md border border-[#E50914] text-[#E50914] font-semibold">Sign up</a>
          </div>
        </div>
      </main>
    )
  }
  return children
}
