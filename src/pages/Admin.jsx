import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function Admin() {
  const [users, setUsers] = useState([])
  const [kyc, setKyc] = useState([])
  const [txs, setTxs] = useState([])
  const [error, setError] = useState('')

  const load = async () => {
    try {
      const u = await api('/api/admin/users')
      setUsers(u.items || [])
      const k = await api('/api/admin/kyc')
      setKyc(k.items || [])
      const recent = await api('/api/dashboard/recent') // reuse recent for sample
      setTxs(recent.items || [])
    } catch (err) { setError(err.message) }
  }

  const setKycStatus = async (id, status) => {
    await api(`/api/admin/kyc/${id}/status?status=${status}`, { method: 'POST' })
    await load()
  }

  useEffect(()=>{ load() },[])

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-black">Admin dashboard</h1>
        {error && <p className="mt-2 text-[#E50914]">{error}</p>}

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <section className="p-5 border rounded-lg">
            <h3 className="font-semibold text-black">User management</h3>
            <div className="mt-3 space-y-2 max-h-80 overflow-auto">
              {users.map(u => (
                <div key={u._id} className="p-3 border rounded">
                  <p className="font-semibold text-black">{u.name}</p>
                  <p className="text-sm text-black/80">{u.email} • {u.phone}</p>
                  <p className="text-xs text-black/60">Role: {u.role} • KYC: {u.kyc_status}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-5 border rounded-lg">
            <h3 className="font-semibold text-black">KYC documents</h3>
            <div className="mt-3 space-y-2 max-h-80 overflow-auto">
              {kyc.map(k => (
                <div key={k._id} className="p-3 border rounded">
                  <p className="font-semibold text-black">{k.doc_type}</p>
                  <p className="text-sm text-black/80">User: {k.user_id}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={()=>setKycStatus(k._id,'approved')} className="px-3 py-1 rounded bg-[#E50914] text-white text-sm">Approve</button>
                    <button onClick={()=>setKycStatus(k._id,'rejected')} className="px-3 py-1 rounded border border-[#E50914] text-[#E50914] text-sm">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="p-5 border rounded-lg">
            <h3 className="font-semibold text-black">Transactions monitoring</h3>
            <div className="mt-3 space-y-2 max-h-80 overflow-auto">
              {txs.map(t => (
                <div key={t._id} className="p-3 border rounded">
                  <p className="font-semibold text-black capitalize">{t.type.replace('_',' ')}</p>
                  <p className="text-sm text-black/80">{t.amount} {t.currency} • Fees {t.fees}</p>
                  <p className="text-xs text-black/60">{new Date(t.created_at).toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 border rounded">
              <h4 className="font-semibold text-black">Payment settings</h4>
              <p className="text-sm text-black/80 mt-1">Placeholders for Stripe/Flutterwave API keys and webhooks. Configure providers per country and route fallbacks.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
