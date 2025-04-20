import Image from "next/image"
import { Search, MapPin, ArrowRight, Play } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-blue-950 h-[500px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        />
        <div className="container mx-auto px-4 z-10 flex justify-between items-center">
          <div className="max-w-xl text-white">
            <div className="flex gap-6 mb-8">
              <Image src="/placeholder.svg?height=40&width=40" alt="Icon 1" width={40} height={40} />
              <Image src="/placeholder.svg?height=40&width=40" alt="Icon 2" width={40} height={40} />
              <Image src="/placeholder.svg?height=40&width=40" alt="Icon 3" width={40} height={40} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Heavy Equipment & Construction Machinery</h1>
            <p className="mb-6">
              Nippon Trading Co., Ltd., headquartered in Tokyo, Japan is a global supplier of new and used construction,
              transportation, and handling equipment.
            </p>
            <div className="h-2 w-40 bg-yellow-500 mt-4"></div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Find your next machine →</h3>

            <div className="mb-4">
              <div className="flex items-center border rounded-md p-3 mb-3">
                <Search className="text-gray-400 mr-2" size={18} />
                <select className="w-full bg-transparent outline-none text-gray-600">
                  <option>Select Category</option>
                </select>
              </div>

              <div className="flex items-center border rounded-md p-3 mb-4">
                <MapPin className="text-gray-400 mr-2" size={18} />
                <select className="w-full bg-transparent outline-none text-gray-600">
                  <option>Select Location</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-yellow-500 text-white py-3 rounded-md font-medium flex items-center justify-center">
              FIND MY EQUIPMENT <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Equipment Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gray-500 mb-2">We have the right equipment for you</p>
            <h2 className="text-3xl font-bold mb-2">New & Used Construction Equipment For Sale</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Process"
                width={500}
                height={400}
                className="rounded-md"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-orange-500 rounded-full p-4 cursor-pointer">
                  <Play className="text-white" size={24} />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <p className="text-gray-600 mb-2">Nippon Trading is your partner in the far east</p>
              <h2 className="text-3xl font-bold mb-3">Our process is highly pragmatic</h2>
              <div className="h-1 w-16 bg-yellow-500 mb-8"></div>

              <div className="space-y-6">
                {[
                  {
                    title: "Assessment",
                    description: "Conducting market research and assessing and inspecting equipment",
                  },
                  {
                    title: "Export",
                    description: "Exporting various heavy machinery to more than 50 countries around the globe",
                  },
                  {
                    title: "Domestics",
                    description: "Buying, selling and providing lease and rental services of heavy equipment",
                  },
                  {
                    title: "Sustainability",
                    description: "Recycling and scraping old machinery for safe disposal and repurposing",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex border-l-2 border-gray-200 pl-6 py-2">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
