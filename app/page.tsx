import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Play, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#001a2c] text-white min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://nippontrading.jp/wp-content/uploads/2021/03/antek-0625117191.jpg"
            alt="Construction machinery"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] text-center">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 w-full max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center space-y-8">
              <div className="flex items-center justify-center">
                <Image src="/logo.png" alt="Atoki CO LTD" width={220} height={88} className="h-auto w-56" />
              </div>
              <div className="space-y-4 max-w-xl">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  Heavy Equipment & <br />
                  Construction Machinery
                </h1>
                <p className="max-w-md text-lg">
                  Atoki CO LTD, headquartered in Chiba, Japan is a global supplier of new and used construction,
                  transportation, and handling equipment.
                </p>
              </div>
              <div className="h-4 w-full bg-blue-400/20">
                <div className="h-full w-1/3 bg-blue-400"></div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md bg-white text-black">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <ChevronRight className="h-5 w-5" />
                      <h3 className="text-lg font-semibold">Find your next machine</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Search className="h-5 w-5 text-gray-400" />
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excavators">Excavators</SelectItem>
                            <SelectItem value="loaders">Loaders</SelectItem>
                            <SelectItem value="dozers">Dozers</SelectItem>
                            <SelectItem value="graders">Graders</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tokyo">Tokyo</SelectItem>
                            <SelectItem value="osaka">Osaka</SelectItem>
                            <SelectItem value="nagoya">Nagoya</SelectItem>
                            <SelectItem value="international">International</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full bg-blue-400 hover:bg-blue-500">
                        FIND MY EQUIPMENT <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-blue-400/20"></div>
      </section>

      {/* Equipment Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-500">We have the right equipment for you</p>
            <h2 className="text-3xl font-bold">New & Used Construction Equipment For Sale</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-blue-400"></div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {equipmentCategories.map((category, index) => (
              <Link key={category.name} href="#" className="group">
                <div className="overflow-hidden rounded-lg bg-white text-center transition-all duration-300 hover:shadow-lg border border-gray-200">
                  <div className="mb-4 h-40 w-full overflow-hidden">
                    <div className="relative h-full w-full">
                      <Image
                        src={category.imageUrl || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="py-2 px-4 bg-gray-50 border-t border-gray-200">
                    <h3 className="font-semibold uppercase text-sm">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Construction+Site"
                alt="Construction site"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-blue-400 text-white">
                <Play className="h-6 w-6" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <p className="text-sm font-medium">Atoki CO LTD is your partner in the far east</p>
                <h2 className="text-3xl font-bold">Our process is highly pragmatic</h2>
                <div className="mt-4 h-1 w-24 bg-blue-400"></div>
              </div>

              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.title} className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <div className="col-span-3">
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-12 w-24">
                <Image
                  src={`/placeholder.svg?height=48&width=96&text=Partner+${i + 1}`}
                  alt={`Partner ${i + 1}`}
                  width={96}
                  height={48}
                  className="h-full w-full object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const equipmentCategories = [
  {
    name: "EXCAVATORS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/1-psv506wum8f9poio2khmc9jz2fkociwyuoouxk8zag.png",
  },
  {
    name: "LOADERS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/2-psv51iumas8w5sl1an7ldfghd30e937a19ymeo9wh4.png",
  },
  {
    name: "DOZERS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/3-psv52jibpbn2ql3scl21ko7gj3zpla8t6bek4grjqg.png",
  },
  {
    name: "GRADERS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/4-psv53hcijcxecjqmuzom2fo1wzcxadz5ayw1efddig.png",
  },
  {
    name: "DUMP TRUCKS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/5-psv54db0zq55bag7odhxf7lq42zek3i0rd2jpu1zmw.png",
  },
  {
    name: "ROLLERS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/6-psv55a7dmxe6ln4fc9pvchauwkh91i4mjvwjiip7l4.png",
  },
  {
    name: "CRANES",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/7-psv561gp54fhyc0tx3i1usf84qqw8q4ubmtmfjksko.png",
  },
  {
    name: "GENERATORS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/8-psv578p9vi2osea0wm6w1hifggts2swhtktyi9somg.png",
  },
  {
    name: "DRILLING MACHINES",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/9-psv580wfkj5agp52bydp4ae9a0yshq0fxgeiwkmvfs.png",
  },
  {
    name: "ATTACHMENTS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/10-psv58qa2p24166477rcmhlzpbfhp9jt70y0mv1l8rs.png",
  },
  {
    name: "FORKLIFTS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/11-psv59n6fc9d2gisevnkkevou3wzjqyfstgumnq8gq0.png",
  },
  {
    name: "TRUCKS",
    imageUrl:
      "https://nippontrading.jp/wp-content/uploads/elementor/thumbs/12-psv5bohu5c5fm3twzj9gtd6sfyy6fciv3jqi3b7r8o.png",
  },
]

const processSteps = [
  {
    title: "Assessment",
    description: "Conducting market research and assessing and inspecting equipment",
  },
  {
    title: "Export",
    description: "Exporting various heavy machinery to more than 70 countries around the globe",
  },
  {
    title: "Domestics",
    description: "Buying, selling and providing lease and rental services of heavy equipment",
  },
  {
    title: "Sustainability",
    description: "Recycling and scrapping old machinery for safe disposal and repurposing",
  },
]
