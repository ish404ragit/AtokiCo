"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Search, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32">
              <Image
                src="/placeholder.svg?height=40&width=120&text=NIPPON"
                alt="Nippon Trading"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Contact Info */}
          <div className="hidden md:flex items-center text-sm">
            <div className="bg-yellow-100 rounded-full p-2 mr-3">
              <Phone size={16} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Get Quick Support</p>
              <p className="font-semibold">+81902456253</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "EQUIPMENT", path: "/equipment" },
                { name: "COMPANY", path: "/company" },
                { name: "CONTACT", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`font-medium text-sm ${
                      (pathname === item.path) || (item.path === "/" && pathname === "/")
                        ? "text-yellow-500"
                        : "text-gray-700 hover:text-yellow-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-yellow-500">
              <Search size={20} />
            </button>
            <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <ul className="space-y-4">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "EQUIPMENT", path: "/equipment" },
              { name: "COMPANY", path: "/company" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block py-2 px-4 ${
                    (pathname === item.path) || (item.path === "/" && pathname === "/")
                      ? "text-yellow-500"
                      : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-4 py-2 px-4">
            <div className="bg-yellow-100 rounded-full p-2 mr-3">
              <Phone size={16} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Get Quick Support</p>
              <p className="font-semibold">+81902456253</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
