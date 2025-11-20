import { useState } from 'react'
import { api } from '../lib/api'

export default function Electricity() {
  const [form, setForm] = useState({ meter_number: '', amount: '', currency: 'USD' })
  const [res, setRes] = useState(null)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault(); setError(''); setRes(null)
    try {
      const data = await api('/api/electricity', { method: 'POST', body: { ...form, amount: parseFloat(form.amount || '0') } })
      setRes(data)
    } catch (err) { setError(err.message) }
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-black">Pay electricity bills</h1>
        <p className="mt-2 text-black/80">Instantly buy ZESA/ZETDC tokens or pay postpaid electricity. Receipts and tokens are issued immediately.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <form onSubmit={onSubmit} className="md:col-span-2 p-5 border rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-semibold">Meter number</label>
                <input className="mt-1 w-full border rounded p-2" value={form.meter_number} onChange={e=>setForm({...form, meter_number:e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-semibold">Amount</label>
                <input type="number" step="0.01" className="mt-1 w-full border rounded p-2" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-semibold">Currency</label>
                <select className="mt-1 w-full border rounded p-2" value={form.currency} onChange={e=>setForm({...form, currency:e.target.value})}>
                  {['USD','ZAR','NGN','GHS'].map(c=> <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 rounded-md bg-[#E50914] text-white font-semibold">Pay now</button>
            {error && <p className="mt-3 text-[#E50914]">{error}</p>}
            {res && <div className="mt-4 p-3 border rounded"><p className="text-black">Request received. Estimated fees: <span className="font-semibold">{res.fees}</span>. Token: <span className="font-semibold">{res.token}</span></p></div>}
          </form>

          <aside className="p-5 border rounded-lg">
            <h3 className="font-semibold text-black">How tokens are sent</h3>
            <ol className="mt-2 list-decimal list-inside text-sm text-black/80 space-y-1">
              <li>Enter your meter number and amount.</li>
              <li>Confirm payment and we fetch your token instantly.</li>
              <li>Token appears on screen and is emailed to you.</li>
            </ol>
          </aside>
        </div>
      </div>
    </main>
  )
}
