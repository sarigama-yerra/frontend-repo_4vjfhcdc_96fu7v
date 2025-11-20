import { useEffect, useState } from 'react'
import { api } from '../lib/api'

function KycUploader() {
  const [docType, setDocType] = useState('id_card')
  const [file, setFile] = useState(null)
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault(); setMsg('')
    if (!file) { setMsg('Select a file first'); return }
    const fd = new FormData()
    fd.append('doc_type', docType)
    fd.append('file', file)
    try {
      const res = await api('/api/kyc/upload', { method: 'POST', formData: fd })
      setMsg(`Uploaded. Status: ${res.status}`)
    } catch (err) { setMsg(err.message) }
  }

  return (
    <div className="p-5 border rounded-lg">
      <h3 className="font-semibold text-black">KYC verification</h3>
      <p className="text-sm text-black/80 mt-1">Upload a government ID or proof of residence. Your status will update after review.</p>
      <form onSubmit={submit} className="mt-3 grid md:grid-cols-3 gap-3">
        <select className="border rounded p-2" value={docType} onChange={e=>setDocType(e.target.value)}>
          <option value="id_card">ID card</option>
          <option value="passport">Passport</option>
          <option value="driver_license">Driver license</option>
          <option value="proof_of_residence">Proof of residence</option>
        </select>
        <input type="file" className="border rounded p-2" onChange={e=>setFile(e.target.files?.[0]||null)} />
        <button className="px-4 py-2 rounded-md bg-[#E50914] text-white font-semibold">Upload</button>
      </form>
      {msg && <p className="mt-2 text-sm">{msg}</p>}
    </div>
  )
}

export default function Dashboard() {
  const [items, setItems] = useState([])
  const [profile, setProfile] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const load = async () => {
    try {
      const me = await api('/api/user/me')
      setProfile(me); setName(me.name || ''); setPhone(me.phone || '')
      const data = await api('/api/dashboard/recent')
      setItems(data.items || [])
    } catch (err) {
      // not logged in
    }
  }

  useEffect(()=>{ load() },[])

  const saveProfile = async (e) => {
    e.preventDefault()
    await api('/api/user/me', { method: 'PUT', body: { name, phone } })
    await load()
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-black">Your dashboard</h1>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <section className="md:col-span-2 p-5 border rounded-lg">
            <h3 className="font-semibold text-black">Recent activity</h3>
            <div className="mt-3 divide-y">
              {items.length === 0 && <p className="text-black/80">No activity yet.</p>}
              {items.map(it => (
                <div key={it._id} className="py-3 flex justify-between">
                  <div>
                    <p className="text-black font-semibold capitalize">{it.type.replace('_',' ')}</p>
                    <p className="text-sm text-black/80">{new Date(it.created_at).toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-black font-semibold">{it.amount} {it.currency}</p>
                    <p className="text-sm text-black/80">Fees: {it.fees}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="p-5 border rounded-lg">
              <h3 className="font-semibold text-black">Profile settings</h3>
              <form onSubmit={saveProfile} className="mt-3 space-y-3">
                <input className="w-full border rounded p-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
                <input className="w-full border rounded p-2" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
                <button className="px-4 py-2 rounded-md bg-[#E50914] text-white font-semibold">Save</button>
              </form>
            </div>
            <KycUploader />
          </aside>
        </div>
      </div>
    </main>
  )
}
