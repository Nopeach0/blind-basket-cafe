
const quickLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

const hours = [
  { day: 'Mon – Fri', time: '7:30 am – 3:30 pm' },
  { day: 'Saturday', time: '8:00 am – 4:00 pm' },
  { day: 'Sunday', time: '8:00 am – 3:00 pm' },
]

export default function Footer() {
  return (
    <footer className="bg-warm-charcoal text-cream/70 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-cream/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex flex-col leading-none mb-6 group">
              <span className="font-serif text-cream text-2xl font-medium tracking-wide">
                Blind Basket
              </span>
              <span className="font-sans text-gold text-xs tracking-widest uppercase mt-0.5">
                Café
              </span>
            </a>
            <p className="font-sans text-cream/50 text-sm leading-relaxed font-light mb-6">
              A warm, refined brunch destination with multicultural flavour. Somewhere you'll want to come back to.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-sm border border-cream/15 flex items-center justify-center hover:border-gold/50 hover:text-gold transition-all duration-300 font-sans text-xs"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-sm border border-cream/15 flex items-center justify-center hover:border-gold/50 hover:text-gold transition-all duration-300 font-sans text-xs"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-cream text-xs tracking-widest uppercase font-medium mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-cream/50 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-sans text-cream text-xs tracking-widest uppercase font-medium mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="font-sans text-cream/50 text-sm font-light">{h.day}</span>
                  <span className="font-sans text-cream/80 text-sm">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-cream text-xs tracking-widest uppercase font-medium mb-5">
              Visit & Contact
            </h4>
            <ul className="space-y-3">
              <li className="font-sans text-cream/50 text-sm font-light leading-relaxed">
                [Address Placeholder]<br />
                Auckland, New Zealand
              </li>
              <li className="font-sans text-cream/50 text-sm font-light">
                +64 [Phone Placeholder]
              </li>
              <li className="font-sans text-cream/50 text-sm font-light">
                hello@blindbasketcafe.co.nz
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 font-sans text-xs text-gold tracking-wider uppercase font-medium hover:gap-3 transition-all duration-200"
            >
              Book a Table →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-cream/30 text-xs">
            © {new Date().getFullYear()} Blind Basket Cafe. All rights reserved.
          </p>
          <p className="font-sans text-cream/20 text-xs">
            Brunch · Coffee · Fusion · Auckland, New Zealand
          </p>
        </div>
      </div>
    </footer>
  )
}
