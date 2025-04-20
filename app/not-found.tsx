import Image from "next/image"
import Link from "next/link"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-blue-950 h-[300px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=300&width=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        />
        <div className="container mx-auto px-4 z-10">
          <div className="flex justify-center mb-8">
            <div className="flex gap-6">
              <Image src="/placeholder.svg?height=40&width=40" alt="Icon 1" width={40} height={40} />
              <Image src="/placeholder.svg?height=40&width=40" alt="Icon 2" width={40} height={40} />
              <Image src="/placeholder.svg?height=40&width=40" alt="Icon 3" width={40} height={40} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white text-center">404 - Page Not Found</h1>
          <div className="flex justify-center mt-8">
            <div className="bg-yellow-500 px-4 py-2 text-white font-medium">ERROR</div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="w-full h-6 bg-yellow-500 bg-opacity-30 flex items-center">
        <div className="container mx-auto">
          <div className="border-t-2 border-dashed border-yellow-500 w-full"></div>
        </div>
      </div>

      {/* 404 Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=250&width=250&text=404"
                alt="404 Illustration"
                width={250}
                height={250}
                className="mx-auto"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-8 text-lg">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-yellow-500 text-white px-6 py-3 rounded flex items-center justify-center font-medium hover:bg-yellow-600 transition-colors"
              >
                <Home className="mr-2" size={18} />
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="bg-gray-900 text-white px-6 py-3 rounded flex items-center justify-center font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Support <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-8">Browse Our Equipment Categories</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["EXCAVATORS", "LOADERS", "DOZERS", "GRADERS", "DUMP TRUCKS", "ROLLERS"].map((item, index) => (
              <Link
                key={index}
                href={`/equipment/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-md p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-medium">{item}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <Image
                key={index}
                src={`/placeholder.svg?height=40&width=100&text=PARTNER`}
                alt={`Partner ${index + 1}`}
                width={100}
                height={40}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
