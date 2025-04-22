import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#001a2c] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Construction+Equipment"
            alt="Construction machinery"
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
            <h1 className="text-5xl font-bold">About</h1>
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-gray-300 hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span className="bg-blue-400 px-3 py-1 text-sm font-medium uppercase text-white">ABOUT</span>
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-blue-400/20"></div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold uppercase text-blue-400">ABOUT</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-gray-700">
                Atoki CO LTD is a trusted name and leading dealer of construction equipment and machinery. Our services
                include sales and renting all over the world. The company has vast experience in exports of heavy
                construction equipment, which includes all kinds and models of new, used and reconditioned equipment.
                The equipment includes wheel loaders, bulldozers, rollers, excavators, graders, cranes, dump trucks and
                all other kinds of construction machinery. Atoki CO LTD has served all over the world and is the leading
                construction companies operating in the world.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/logo.png" alt="Atoki CO LTD" width={300} height={120} className="h-auto w-auto max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Equipment+Illustration"
                alt="Equipment Illustration"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="mb-4 text-gray-700">
                Our company provides services to meet its customer expectations by importing heavy construction
                equipment such as wheel loaders, bulldozers, rollers, excavators, graders, cranes, dump trucks and all
                other kinds of construction machinery. Our simple procedure of on-time delivery of equipment ensures
                full satisfaction of our customers. Furthermore, our managerial staff quickly attends to all our
                customer inquiries about equipment by phone, fax, email and on-desk inquiry and are trained to respond
                to the satisfaction of our valued customers.
              </p>
              <p className="mb-4 text-gray-700">
                Interested in our high-quality machines, but bothered about the import and export procedure? Don't
                worry. With the help of our trade services, you will get a better communication with the manufacturer
                and a smoother trade procedure.
              </p>
              <p className="text-gray-700">As of January 2020, our company capital is valued at 16 million yen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold uppercase text-blue-400">MESSAGE FROM C.E.O</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-gray-700">
                We are working in construction equipment, road machinery, drilling equipment, tunneling and underground
                works equipment such as wheel loaders, bulldozers, rollers, excavators, graders, cranes and other kinds
                of heavy equipment. We are continuously looking to find those solutions and services that improve
                customer performance. Today products of our principals, world leaders in their technology, and our
                services enable customers to translate their investment into superior profits. Our diverse portfolio
                encompasses lifting and handling, heavy construction, mining, road construction, power generation and
                wide range of equipment and commodities for energy sector. Thank You.
              </p>
              <div className="mt-6">
                <p className="font-medium text-gray-900">H. Ishiro</p>
                <p className="text-sm text-gray-600">Atoki CO LTD</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Construction+Equipment"
                alt="Construction Equipment"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* President Message Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold uppercase text-blue-400">MESSAGE FROM PRESIDENT</h2>
          <div className="max-w-3xl">
            <p className="mb-4 text-gray-700">
              We believe that to achieve our mission we need to make our business a win-win game. We can only achieve
              this through sharing our success with our customer and principals. Our group has always operated with the
              aim of enabling the construction group bigger by providing best Japan machinery at very competitive
              pricing. Thank You
            </p>
            <div className="mt-6">
              <p className="font-medium text-gray-900">Haruna Miyoshi</p>
              <p className="text-sm text-gray-600">Atoki CO LTD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold uppercase">BOARD OF DIRECTORS</h2>
          <div className="mx-auto h-1 w-24 bg-blue-400 mb-12"></div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {directors.map((director) => (
              <div key={director.name} className="text-center">
                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=160&width=160&text=${director.name}`}
                    alt={director.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{director.name}</h3>
                <p className="text-gray-600">{director.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#001a2c] py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="Atoki CO LTD" width={120} height={48} className="h-20 w-auto" />
              <div>
                <h3 className="text-xl font-bold">We Help Industry To Utilize The</h3>
                <p className="text-2xl font-bold">Heavy Equipment Work Better</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center space-y-1">
                <p className="text-sm">Get Quick Support</p>
                <p className="text-xl font-bold">+81-90-1227-3369</p>
              </div>
              <Button className="bg-blue-400 hover:bg-blue-500">
                GET STARTED <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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

const directors = [
  {
    name: "H. Ishiro",
    title: "C.E.O",
  },
  {
    name: "Haruna Miyoshi",
    title: "President",
  },
  {
    name: "Hachiman Hattori",
    title: "Sales Manager",
  },
  {
    name: "Tomoko Riishi Katsuroda",
    title: "Accounts Manager",
  },
]
