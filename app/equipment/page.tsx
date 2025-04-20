import Image from "next/image"
import Link from "next/link"

export default function EquipmentPage() {
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
          <h1 className="text-4xl font-bold text-white text-center">Equipment</h1>
          <div className="flex justify-center mt-8">
            <div className="bg-yellow-500 px-4 py-2 text-white font-medium">EQUIPMENT</div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="w-full h-6 bg-yellow-500 bg-opacity-30 flex items-center">
        <div className="container mx-auto">
          <div className="border-t-2 border-dashed border-yellow-500 w-full"></div>
        </div>
      </div>

      {/* Equipment Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Our Equipment Categories</h2>
          <div className="flex justify-center mb-12">
            <div className="h-1 w-24 bg-yellow-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "EXCAVATORS", image: "/placeholder.svg?height=150&width=200" },
              { name: "LOADERS", image: "/placeholder.svg?height=150&width=200" },
              { name: "DOZERS", image: "/placeholder.svg?height=150&width=200" },
              { name: "GRADERS", image: "/placeholder.svg?height=150&width=200" },
              { name: "DUMP TRUCKS", image: "/placeholder.svg?height=150&width=200" },
              { name: "ROLLERS", image: "/placeholder.svg?height=150&width=200" },
              { name: "CRANES", image: "/placeholder.svg?height=150&width=200" },
              { name: "GENERATORS", image: "/placeholder.svg?height=150&width=200" },
              { name: "DRILLING MACHINES", image: "/placeholder.svg?height=150&width=200" },
              { name: "ATTACHMENTS", image: "/placeholder.svg?height=150&width=200" },
              { name: "FORKLIFTS", image: "/placeholder.svg?height=150&width=200" },
              { name: "TRUCKS", image: "/placeholder.svg?height=150&width=200" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-md overflow-hidden shadow-sm group">
                <Link href={`/equipment/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="p-4 flex justify-center">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={200}
                      height={150}
                      className="transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-gray-100 py-3 text-center font-medium">{item.name}</div>
                </Link>
              </div>
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
