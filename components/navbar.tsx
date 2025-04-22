"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  // Function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Atoki CO LTD" width={150} height={60} className="h-12 w-auto" />
          </Link>

          {/* Hotline */}
          <div className="hidden md:flex flex-col">
            <span className="text-xs text-gray-500">Hotline</span>
            <span className="text-sm font-medium text-blue-400">+81-90-1227-3369</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "EQUIPMENT", path: "/equipment" },
              { name: "COMPANY", path: "/company" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium ${
                  isActive(item.path) ? "text-blue-400" : "text-gray-700 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-gray-200"></div>

          {isSearchOpen ? (
            <div className="relative flex items-center md:w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button onClick={() => setIsSearchOpen(true)} className="rounded-full p-2 text-gray-700 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-6 pt-6">
                {[
                  { name: "HOME", path: "/" },
                  { name: "ABOUT", path: "/about" },
                  { name: "EQUIPMENT", path: "/equipment" },
                  { name: "COMPANY", path: "/company" },
                  { name: "CONTACT", path: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-lg font-medium ${
                      isActive(item.path) ? "text-blue-400" : "text-gray-700 hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
