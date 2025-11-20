import Spline from '@splinetool/react-spline'

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
        <div className="h-[380px] md:h-[460px] rounded-xl overflow-hidden border" style={{background:'linear-gradient(180deg,#fff, #ffffff)'}}>
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
