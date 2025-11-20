import { useState } from 'react'
import { api } from '../lib/api'

export default function SchoolFees() {
  const [form, setForm] = useState({ school: 'Placeholder International School', student_name: '', student_id: '', amount: '', currency: 'USD', proof: null })
  const [res, setRes] = useState(null)
  const [error, setError] = useState('')

  const schools = ['Placeholder International School','City Academy (Placeholder)','Green Valley College (Placeholder)']

  const onSubmit = async (e) => {
    e.preventDefault(); setError(''); setRes(null)
    try {
      // Payment + instruction; proof is kept locally as part of record in a real system
      const data = await api('/api/school-fees', { method: 'POST', body: { school: form.school, student_name: form.student_name, student_id: form.student_id, amount: parseFloat(form.amount || '0'), currency: form.currency } })
      setRes(data)
    } catch (err) { setError(err.message) }
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-black">Pay school fees</h1>
        <p className="mt-2 text-black/80">Pay tuition for supported institutions and receive a clear receipt. Upload proof of payment for reconciliation where required.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <form onSubmit={onSubmit} className="md:col-span-2 p-5 border rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-semibold">School</label>
                <select className="mt-1 w-full border rounded p-2" value={form.school} onChange={e=>setForm({...form, school:e.target.value})}>
                  {schools.map(s=> <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold">Student name</label>
                <input className="mt-1 w-full border rounded p-2" value={form.student_name} onChange={e=>setForm({...form, student_name:e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-semibold">Student ID</label>
                <input className="mt-1 w-full border rounded p-2" value={form.student_id} onChange={e=>setForm({...form, student_id:e.target.value})} required />
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
              <div className="col-span-2">
                <label className="block text-sm font-semibold">Upload proof of payment (optional)</label>
                <input type="file" className="mt-1 w-full" onChange={e=>setForm({...form, proof:e.target.files?.[0]||null})} />
                <p className="text-xs text-black/60 mt-1">Files are submitted to the school when required. For demo, uploads are not persisted.</p>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 rounded-md bg-[#E50914] text-white font-semibold">Pay now</button>
            {error && <p className="mt-3 text-[#E50914]">{error}</p>}
            {res && <div className="mt-4 p-3 border rounded"><p className="text-black">Request received. Estimated fees: <span className="font-semibold">{res.fees}</span>. Status: {res.status}</p></div>}
          </form>

          <aside className="p-5 border rounded-lg">
            <h3 className="font-semibold text-black">Processing time</h3>
            <p className="text-sm text-black/80 mt-2">Most tuition payments clear within 24–48 hours. You and the school receive confirmations and a downloadable receipt.</p>
          </aside>
        </div>
      </div>
    </main>
  )
}
