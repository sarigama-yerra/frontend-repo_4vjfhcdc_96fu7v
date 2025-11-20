export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Fast, low‑fee international transfers in minutes
          </h1>
          <p className="mt-4 text-lg text-black/80">
            Move money across borders with transparent pricing, instant notifications, and bank‑grade security. Send to bank accounts, mobile wallets, or cash pickup locations.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/send" className="px-6 py-3 rounded-md bg-[#E50914] text-white font-semibold">Send Money</a>
            <a href="/register" className="px-6 py-3 rounded-md border border-[#E50914] text-[#E50914] font-semibold">Create account</a>
          </div>
        </div>
        {/* Decorative panel replacing the black object */}
        <div className="h-[380px] md:h-[460px] rounded-xl overflow-hidden border relative">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute -top-10 -right-16 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: '#E50914' }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: 'linear-gradient(180deg, rgba(229,9,20,0.06), rgba(229,9,20,0.14))' }} />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-white/70 backdrop-blur border">
                <p className="text-sm text-black/70">Avg. fee</p>
                <p className="text-xl font-bold text-black">0.9%</p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 backdrop-blur border">
                <p className="text-sm text-black/70">Delivery</p>
                <p className="text-xl font-bold text-black">Minutes</p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 backdrop-blur border">
                <p className="text-sm text-black/70">Coverage</p>
                <p className="text-xl font-bold text-black">100+ countries</p>
              </div>
              <div className="p-4 rounded-lg bg-white/70 backdrop-blur border">
                <p className="text-sm text-black/70">Security</p>
                <p className="text-xl font-bold text-black">Bank‑grade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
