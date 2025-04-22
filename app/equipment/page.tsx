import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EquipmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#001a2c] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Equipment"
            alt="Equipment"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="flex space-x-4">
              <Image src="/placeholder.svg?height=50&width=50" alt="Icon 1" width={50} height={50} />
              <Image src="/placeholder.svg?height=50&width=50" alt="Icon 2" width={50} height={50} />
              <Image src="/placeholder.svg?height=50&width=50" alt="Icon 3" width={50} height={50} />
            </div>
            <h1 className="text-5xl font-bold">Equipment</h1>
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-gray-300 hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span className="bg-blue-400 px-3 py-1 text-sm font-medium uppercase text-white">EQUIPMENT</span>
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-blue-400/20"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-grow">
              <Input type="text" placeholder="Search equipment..." className="pl-10 pr-4 py-2 w-full" />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex space-x-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excavators">Excavators</SelectItem>
                  <SelectItem value="loaders">Loaders</SelectItem>
                  <SelectItem value="dozers">Dozers</SelectItem>
                  <SelectItem value="graders">Graders</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                  <SelectItem value="osaka">Osaka</SelectItem>
                  <SelectItem value="nagoya">Nagoya</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-400 hover:bg-blue-500">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex w-full flex-wrap justify-start space-x-2 bg-transparent">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger
                value="excavators"
                className="data-[state=active]:bg-blue-400 data-[state=active]:text-white"
              >
                Excavators
              </TabsTrigger>
              <TabsTrigger value="loaders" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
                Loaders
              </TabsTrigger>
              <TabsTrigger value="dozers" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
                Dozers
              </TabsTrigger>
              <TabsTrigger value="graders" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
                Graders
              </TabsTrigger>
              <TabsTrigger
                value="dump-trucks"
                className="data-[state=active]:bg-blue-400 data-[state=active]:text-white"
              >
                Dump Trucks
              </TabsTrigger>
              <TabsTrigger value="rollers" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
                Rollers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {equipmentItems.map((item) => (
                  <Link key={item.id} href={`/equipment/${item.id}`} className="group">
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=192&width=300&text=${item.name}`}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 bg-blue-400 px-3 py-1 text-sm font-medium text-white">
                          {item.condition}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
                        <div className="mb-2 flex items-center text-sm text-gray-500">
                          <span className="mr-4">Year: {item.year}</span>
                          <span>Hours: {item.hours}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-blue-400">${item.price.toLocaleString()}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have similar content filtered by category */}
            <TabsContent value="excavators" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {equipmentItems
                  .filter((item) => item.category === "Excavator")
                  .map((item) => (
                    <Link key={item.id} href={`/equipment/${item.id}`} className="group">
                      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=192&width=300&text=${item.name}`}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 bg-blue-400 px-3 py-1 text-sm font-medium text-white">
                            {item.condition}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="mb-2 text-lg font-semibold">{item.name}</h3>
                          <div className="mb-2 flex items-center text-sm text-gray-500">
                            <span className="mr-4">Year: {item.year}</span>
                            <span>Hours: {item.hours}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-blue-400">${item.price.toLocaleString()}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#001a2c] py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold">Looking for a specific machine?</h2>
              <p className="mt-2 text-gray-300">
                Contact us with your requirements and we'll help you find the perfect equipment.
              </p>
            </div>
            <Button className="bg-blue-400 hover:bg-blue-500">
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
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

const equipmentItems = [
  {
    id: 1,
    name: "Komatsu PC200-8 Excavator",
    category: "Excavator",
    condition: "Used",
    year: 2018,
    hours: 3500,
    price: 85000,
  },
  {
    id: 2,
    name: "Caterpillar 320D Excavator",
    category: "Excavator",
    condition: "Used",
    year: 2017,
    hours: 4200,
    price: 78000,
  },
  {
    id: 3,
    name: "Hitachi ZX330 Excavator",
    category: "Excavator",
    condition: "Used",
    year: 2019,
    hours: 2800,
    price: 110000,
  },
  {
    id: 4,
    name: "Komatsu WA380-8 Wheel Loader",
    category: "Loader",
    condition: "Used",
    year: 2020,
    hours: 1500,
    price: 145000,
  },
  {
    id: 5,
    name: "Caterpillar 950GC Wheel Loader",
    category: "Loader",
    condition: "Used",
    year: 2019,
    hours: 2200,
    price: 130000,
  },
  {
    id: 6,
    name: "Komatsu D65PX-18 Dozer",
    category: "Dozer",
    condition: "Used",
    year: 2018,
    hours: 3100,
    price: 165000,
  },
  {
    id: 7,
    name: "Caterpillar D6T Dozer",
    category: "Dozer",
    condition: "Used",
    year: 2017,
    hours: 3800,
    price: 155000,
  },
  {
    id: 8,
    name: "Komatsu GD655-6 Motor Grader",
    category: "Grader",
    condition: "Used",
    year: 2019,
    hours: 2000,
    price: 180000,
  },
]
