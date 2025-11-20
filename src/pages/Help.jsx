export default function Help() {
  const faqs = [
    { q: 'How long do transfers take?', a: 'Most transfers are completed within minutes. Some pay‑outs may take up to 24 hours depending on local rails and verification.' },
    { q: 'What are your fees?', a: 'Fees start from 1.5–2% depending on the service and destination. All fees are shown upfront before you pay.' },
    { q: 'What are the limits?', a: 'Limits depend on your verification level. Start with basic limits, then increase by completing KYC and providing additional information.' },
    { q: 'Refund policy', a: 'If a transfer cannot be delivered, we will cancel and refund to your original payment method. Processing times may vary by provider.' },
    { q: 'Compliance', a: 'We comply with AML/CFT requirements. We may request additional information to verify source of funds and transaction purpose.' },
  ]

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-black">Help Center / FAQ</h1>
        <div className="mt-8 space-y-6">
          {faqs.map((f,i)=> (
            <div key={i} className="p-5 border rounded-lg">
              <h3 className="font-semibold text-black">{f.q}</h3>
              <p className="text-black/80 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
