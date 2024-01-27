import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const pathname = new URL(window.location.href).pathname
    setCurrentPath(pathname.slice(1)) // remove the first "/"
  }, [])

  return (
    <header className="fixed left-1/2 top-3 z-50 flex w-full max-w-7xl -translate-x-1/2 transform flex-col justify-between rounded-md bg-yellow-50/60  px-4 backdrop-blur-md md:flex-row md:gap-10 lg:mt-6">
      <div className="flex h-16 items-center justify-between lg:h-20">
        <div className="flex-shrink-0">
          <a href="/" title="Spruce & Sage" className="flex">
            <img
              className="mt-5 h-16 w-auto md:ml-16"
              src="/logo.png"
              alt="Spruce & Sage Cleaning "
            />
          </a>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="toggle inline-flex border border-orange-500 p-1 text-orange-500 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white focus:bg-orange-500 lg:hidden"
        >
          <svg
            className={` h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>

          <svg
            className={` h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`ml-auto mt-10 w-full flex-col gap-4 md:mt-0 md:flex md:flex-row md:items-center md:justify-end md:space-x-6 ${isMenuOpen ? 'hidden' : 'flex'}`}
      >
        <a
          href="/"
          className={`text-base font-semibold transition-all duration-200 hover:text-orange-500 ${currentPath === '' ? 'text-orange-500' : 'text-black'}`}
        >
          Home
        </a>

        <a
          href="/about"
          className={`text-base font-semibold transition-all duration-200 hover:text-orange-500 ${currentPath === 'about' ? 'text-orange-500' : 'text-black'}`}
        >
          About
        </a>

        <a
          href="/services"
          className={`text-base font-semibold transition-all duration-200 hover:text-orange-500 ${currentPath === 'services' ? 'text-orange-500' : 'text-black'}`}
        >
          Services
        </a>

        <a
          href="/contact"
          title="contact"
          className={`text-base font-semibold transition-all duration-200 hover:text-orange-500 ${currentPath === 'contact' ? 'text-orange-500' : 'text-black'}`}
        >
          Contact
        </a>

        <a
          href="tel:+4374465519"
          title="Call - Spruce & Sage Cleaning"
          className="hover:orange-400 flex items-center justify-center rounded-sm border-2 border-orange-400 px-5 py-2.5 text-base font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-400 hover:text-white "
          role="button"
        >
          Call - (437) 446 5519
        </a>
      </div>
    </header>
  )
}
