import Hero from '../components/Hero'

function HowItWorks() {
  const steps = [
    { title: 'Create your account', text: 'Sign up with your email and phone. Verify in seconds and unlock all features.' },
    { title: 'Choose a service', text: 'Send money, buy data/airtime, pay school fees, or settle electricity bills.' },
    { title: 'Pay securely', text: 'Use cards or bank methods through our PCI‑compliant partners.' },
    { title: 'Track everything', text: 'Real‑time receipts, delivery confirmations, and clear status updates.' },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black text-center">How it works</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-5 border rounded-lg">
              <div className="w-8 h-8 rounded-full bg-[#E50914] text-white flex items-center justify-center font-bold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-black">{s.title}</h3>
              <p className="text-black/80 mt-1 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Send Money', text: 'Transfer to bank accounts and wallets with clear fees and fast delivery.', href: '/send' },
    { title: 'Buy Phone Data', text: 'Top up instantly across major networks like Econet, NetOne, Telcel, MTN, Airtel.', href: '/airtime' },
    { title: 'Pay School Fees', text: 'Settle tuition locally or abroad with proof of payment and tracking.', href: '/school-fees' },
    { title: 'Pay Electricity Bills', text: 'Buy tokens or pay postpaid electricity with instant receipts.', href: '/electricity' },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black text-center">Supported services</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {items.map((it) => (
            <a key={it.title} href={it.href} className="p-5 border rounded-lg hover:border-[#E50914]">
              <h3 className="font-semibold text-black">{it.title}</h3>
              <p className="text-black/80 mt-1 text-sm">{it.text}</p>
              <span className="inline-block mt-3 text-[#E50914] font-semibold">Get started →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    { name: 'Tariro • Harare', text: 'Money reached my family in minutes. Fees were exactly as shown.' },
    { name: 'Kunle • Lagos', text: 'Buying airtime for my parents is now instant and reliable.' },
    { name: 'Ama • Accra', text: 'School fees payments are simple, with clear proof of payment.' },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black text-center">What customers say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="p-5 border rounded-lg">
              <p className="text-black">“{q.text}”</p>
              <p className="mt-3 text-sm font-semibold text-[#E50914]">{q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <HowItWorks />
      <Services />
      <Testimonials />
    </main>
  )
}
