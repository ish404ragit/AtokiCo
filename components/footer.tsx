import Image from "next/image"
import Link from "next/link"
import { Phone, VoicemailIcon as Fax, MapPin, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=60&width=180&text=NIPPON"
                alt="Nippon Trading"
                width={180}
                height={60}
              />
            </div>
            <h3 className="text-lg font-semibold mb-4">NIPPON TRADING CO., LTD.</h3>
            <p className="text-gray-400 mb-6">
              Global supplier of new and used construction, transportation, and handling equipment.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-500 transition-colors">
                <Youtube size={16} />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">USEFUL LINKS</h3>
            <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
            <ul className="space-y-4">
              {["Home", "About", "Equipment", "Company", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center">
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">GET IN TOUCH</h3>
            <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 mt-1">
                  <Phone size={18} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-400">Support</p>
                  <p>+81-90-5891-5891</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 mt-1">
                  <Fax size={18} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-400">Fax</p>
                  <p>+81-3-3295-7071</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 mt-1">
                  <MapPin size={18} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p>2-36-12 Higashinihonbashi, Toshima, Tokyo, Japan</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 mt-1">
                  <Mail size={18} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>mail@nippontrading.jp</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-500 text-center">All Rights Reserved © Designed by Qemitech</div>
        </div>
      </div>
    </footer>
  )
}
