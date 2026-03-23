import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-indigo-950 border-b border-indigo-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Accessively logo"
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-extrabold uppercase tracking-wider font-sans text-white">
                  Accessively
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#about" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                About
              </Link>
              <Link href="#services" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Services
              </Link>
              <Link href="#why-choose-us" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Why Choose Us
              </Link>
              <Link href="#testimonials" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Testimonials
              </Link>
              <Link href="#contact" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Contact
              </Link>
              <Link href="/apply" className="border-transparent text-white hover:text-indigo-200 hover:border-indigo-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                Join Us
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}