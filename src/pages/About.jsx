export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-black">About RedRemit</h1>
        <p className="mt-4 text-black/80">We are on a mission to make cross‑border payments simple, transparent, and lightning fast. Our platform connects local rails with global partners so you can move money to the people and services you care about.</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black">Our values</h2>
          <ul className="list-disc list-inside mt-2 text-black/80 space-y-1">
            <li>Transparency — clear pricing and live status updates.</li>
            <li>Security — strong encryption, secure authentication, continuous monitoring.</li>
            <li>Reliability — resilient infrastructure and global payout coverage.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black">Security details</h2>
          <p className="text-black/80 mt-2">We protect accounts with modern cryptography, session security, and device checks. Payments are processed via PCI‑compliant providers with tokenized card flows and 3‑D Secure where available.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black">Licensing statement</h2>
          <p className="text-black/80 mt-2">Licensing and regulatory permissions vary by market. Placeholder: RedRemit operates under appropriate local authorizations where required. Final licensing details will be published before general availability.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-black">Anti‑fraud</h2>
          <p className="text-black/80 mt-2">We combine automated monitoring with expert review to detect and stop suspicious activity. Please report any concerns to fraud@redremit.app.</p>
        </section>
      </div>
    </main>
  )
}
