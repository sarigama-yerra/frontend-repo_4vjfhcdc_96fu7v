export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-black mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-[#E50914]">About Us</a></li>
            <li><a href="/help" className="hover:text-[#E50914]">Help Center</a></li>
            <li><a href="/" className="hover:text-[#E50914]">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-black mb-3">Products</h4>
          <ul className="space-y-2">
            <li><a href="/send" className="hover:text-[#E50914]">Send Money</a></li>
            <li><a href="/airtime" className="hover:text-[#E50914]">Buy Data</a></li>
            <li><a href="/school-fees" className="hover:text-[#E50914]">Pay School Fees</a></li>
            <li><a href="/electricity" className="hover:text-[#E50914]">Pay Electricity</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-black mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#E50914]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#E50914]">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#E50914]">Licensing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-black mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>Email: support@redremit.app</li>
            <li>Phone: +1 555 0100</li>
            <li>Address: 123 Fintech Way</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-black flex justify-between">
          <p>© {new Date().getFullYear()} RedRemit. All rights reserved.</p>
          <p className="text-[#E50914] font-semibold">Fast. Secure. Global.</p>
        </div>
      </div>
    </footer>
  )
}
