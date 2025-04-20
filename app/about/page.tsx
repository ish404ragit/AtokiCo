import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold text-white text-center">About</h1>
          <div className="flex justify-center mt-8">
            <div className="bg-yellow-500 px-4 py-2 text-white font-medium">ABOUT</div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="w-full h-6 bg-yellow-500 bg-opacity-30 flex items-center">
        <div className="container mx-auto">
          <div className="border-t-2 border-dashed border-yellow-500 w-full"></div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">ABOUT</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <p className="mb-4">
                  Nippon Trading Co., Ltd. is a trusted name and leading dealer of construction equipment and machinery.
                  Our services include sales and renting all over the world. The company has vast experience in exports
                  of heavy construction equipment, which includes all kinds and models of new, used and reconditioned
                  equipment. The equipment includes wheel loaders, bulldozers, rollers, excavators, graders, cranes,
                  dump trucks and all other kinds of construction machinery.
                </p>
                <p>
                  Nippon Trading Co., Ltd. has served all over the world to all the leading construction companies
                  operating in the world.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Construction Equipment"
                  width={500}
                  height={300}
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <Image
                  src="/placeholder.svg?height=250&width=300&text=EQUIPMENT"
                  alt="Equipment Illustration"
                  width={300}
                  height={250}
                  className="w-full h-auto"
                />
              </div>
              <div className="lg:w-2/3">
                <p className="mb-4">
                  Our company provides services to meet its customer expectations by importing heavy construction
                  equipment such as wheel loaders, bulldozers, rollers, excavators, graders, cranes, dump trucks and all
                  other kinds of construction machinery. Our simple procedure of on-time delivery of equipment ensures
                  full satisfaction of our customers.
                </p>
                <p className="mb-4">
                  Furthermore, our managerial staff quickly attends to all our customer inquiries about equipment by
                  phone, fax, email and in-desk inquiry and promptly respond to the satisfaction of our valued
                  customers.
                </p>
                <p className="mb-4">
                  Interested in our high quality machines, but bothered about the import and export procedures? Don't
                  worry. With the help of our trade services, you will get a better communication with the manufacturer
                  and a smoother trade procedure.
                </p>
                <p>As of January 2010, our company capital is valued at 10 million yen.</p>
              </div>
            </div>
          </div>

          {/* Message from CEO */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">MESSAGE FROM C.E.O</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <p className="mb-4">
                  We are working in construction equipment, road machinery, drilling equipment, tunneling and
                  underground works equipment such as wheel loaders, bulldozers, rollers, excavators, graders, cranes
                  and dump trucks. We have focused on leveraging these assets to deliver the best quality products and
                  services to our valued customers.
                </p>
                <p className="mb-4">
                  Today products of our principals, world leaders in their technologies, and our services enable
                  customers to translate their investment into superior returns. Our products include construction,
                  mining and packaging, dairy and gas compression systems, construction equipment and wider range of
                  equipment and commodities for energy sector.
                </p>
                <p className="mb-4">Thank You</p>
                <p className="font-semibold">H. Ishino</p>
                <p>Nippon Trading Co., Ltd</p>
              </div>
              <div className="lg:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=CEO"
                  alt="CEO"
                  width={400}
                  height={300}
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Message from President */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">MESSAGE FROM PRESIDENT</h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="mb-4">
                We believe that to achieve our mission we need to make our business a win-win game. We can only achieve
                this through sharing our success with our customer and principals. Our group has always operated with
                the aim of enabling the construction group bigger by providing best Japan machinery in very competitive
                pricing.
              </p>
              <p className="mb-4">Thank You</p>
              <p className="font-semibold">Haruhiro Kurashiki</p>
              <p>Nippon Trading Co., Ltd.</p>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-2">BOARD OF DIRECTORS</h2>
            <div className="flex justify-center mb-12">
              <div className="h-1 w-24 bg-yellow-500"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "H. Ishino", title: "C.E.O" },
                { name: "Haruhiro Kurashiki", title: "President" },
                { name: "Hariharu Hattory", title: "Sales Manager" },
                { name: "Tomoko Nishi-Katsuzawa", title: "Accounts Manager" },
              ].map((director, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 mx-auto rounded-full overflow-hidden w-32 h-32 bg-gray-200">
                    <Image
                      src={`/placeholder.svg?height=128&width=128&text=${director.name.split(" ")[0]}`}
                      alt={director.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-yellow-500 font-semibold">{director.name}</h3>
                  <p className="text-gray-600">{director.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl font-bold mb-2">We Help Industry To Utilize The</h3>
              <h3 className="text-white text-xl font-bold">Heavy Equipment Work Better</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center text-white">
                <div className="mr-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Phone Icon"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm">Get Quick Support</p>
                  <p className="font-bold">+81-90-2455-6253</p>
                </div>
              </div>
              <button className="bg-yellow-500 text-white px-6 py-3 rounded flex items-center font-medium">
                GET STARTED <ArrowRight className="ml-2" size={16} />
              </button>
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
