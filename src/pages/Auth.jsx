import { useState } from 'react'
import { api, setToken } from '../lib/api'

export function Login({ onAuth }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault(); setError('')
    try {
      const res = await api('/api/auth/login', { method: 'POST', body: { email, password } })
      setToken(res.token); onAuth(res.user)
    } catch (err) { setError(err.message) }
  }
  return (
    <main className="bg-white min-h-screen flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-md p-6 border rounded-lg">
        <h1 className="text-2xl font-extrabold text-black">Log in</h1>
        <input className="mt-4 w-full border rounded p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="mt-3 w-full border rounded p-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="mt-4 w-full px-4 py-2 rounded-md bg-[#E50914] text-white font-semibold">Continue</button>
        {error && <p className="mt-3 text-[#E50914]">{error}</p>}
        <p className="mt-3 text-sm">No account? <a href="/register" className="text-[#E50914] font-semibold">Sign up</a></p>
      </form>
    </main>
  )
}

export function Register({ onAuth }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault(); setError('')
    try {
      const res = await api('/api/auth/register', { method: 'POST', body: { name, email, phone, password } })
      setToken(res.token); onAuth(res.user)
    } catch (err) { setError(err.message) }
  }
  return (
    <main className="bg-white min-h-screen flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-md p-6 border rounded-lg">
        <h1 className="text-2xl font-extrabold text-black">Create your account</h1>
        <input className="mt-4 w-full border rounded p-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="mt-3 w-full border rounded p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="mt-3 w-full border rounded p-2" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
        <input type="password" className="mt-3 w-full border rounded p-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="mt-4 w-full px-4 py-2 rounded-md bg-[#E50914] text-white font-semibold">Sign up</button>
        {error && <p className="mt-3 text-[#E50914]">{error}</p>}
        <p className="mt-3 text-sm">Have an account? <a href="/login" className="text-[#E50914] font-semibold">Log in</a></p>
      </form>
    </main>
  )
}
