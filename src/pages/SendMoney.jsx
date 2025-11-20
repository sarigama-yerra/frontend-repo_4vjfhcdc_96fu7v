import { useState } from 'react'
import { api } from '../lib/api'

export default function SendMoney() {
  const [form, setForm] = useState({ amount: '', currency: 'USD', recipient_name: '', recipient_country: '', recipient_bank: '', recipient_account: '', note: '' })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(''); setResult(null)
    try {
      const data = await api('/api/send-money', { method: 'POST', body: {
        amount: parseFloat(form.amount || '0'),
        currency: form.currency,
        recipient_name: form.recipient_name,
        recipient_country: form.recipient_country,
        recipient_bank: form.recipient_bank || null,
        recipient_account: form.recipient_account || null,
        note: form.note || null,
      } })
      setResult(data)
    } catch (err) {
      setError(err.message)
    }
  }

  const currencies = ['USD','EUR','GBP','ZAR','NGN']

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-black">Secure money transfer</h1>
        <p className="mt-2 text-black/80">Move funds globally with bank‑grade encryption and full compliance.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <form onSubmit={onSubmit} className="md:col-span-2 p-5 border rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">Amount</label>
                <input type="number" step="0.01" className="mt-1 w-full border rounded p-2" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-semibold">Currency</label>
                <select className="mt-1 w-full border rounded p-2" value={form.currency} onChange={e=>setForm({...form, currency:e.target.value})}>
                  {currencies.map(c=> <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold">Recipient name</label>
                <input className="mt-1 w-full border rounded p-2" value={form.recipient_name} onChange={e=>setForm({...form, recipient_name:e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-semibold">Recipient country</label>
                <input className="mt-1 w-full border rounded p-2" value={form.recipient_country} onChange={e=>setForm({...form, recipient_country:e.target.value})} required />
              </div>
              <div>
                <label className="block text-sm font-semibold">Bank</label>
                <input className="mt-1 w-full border rounded p-2" value={form.recipient_bank} onChange={e=>setForm({...form, recipient_bank:e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold">Account number / Wallet</label>
                <input className="mt-1 w-full border rounded p-2" value={form.recipient_account} onChange={e=>setForm({...form, recipient_account:e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold">Note (optional)</label>
                <textarea className="mt-1 w-full border rounded p-2" value={form.note} onChange={e=>setForm({...form, note:e.target.value})} />
              </div>
            </div>
            <button className="mt-4 px-6 py-3 rounded-md bg-[#E50914] text-white font-semibold">Continue</button>
            {error && <p className="mt-3 text-[#E50914]">{error}</p>}
            {result && <div className="mt-4 p-3 border rounded"><p className="text-black">Request received. Estimated fees: <span className="font-semibold">{result.fees}</span>. Status: {result.status}</p></div>}
          </form>

          <aside className="p-5 border rounded-lg">
            <h3 className="font-semibold text-black">Fees & limits</h3>
            <p className="text-sm text-black/80 mt-2">Transparent fees starting from 2%. Exact fees shown before you pay. Daily transfer limits depend on your verification level.</p>
            <h3 className="mt-6 font-semibold text-black">Compliance & security</h3>
            <p className="text-sm text-black/80 mt-2">We use strong encryption, secure authentication, and follow global AML/KYC standards to keep your money safe.</p>
          </aside>
        </div>
      </div>
    </main>
  )
}
