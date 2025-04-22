import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function CompanyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#001a2c] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Company"
            alt="Company"
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
            <h1 className="text-5xl font-bold">Company</h1>
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-gray-300 hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span className="bg-blue-400 px-3 py-1 text-sm font-medium uppercase text-white">COMPANY</span>
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-blue-400/20"></div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Company Overview</h2>
              <div className="mb-6 h-1 w-24 bg-blue-400"></div>
              <p className="mb-4 text-gray-700">
                Atoki CO LTD is a leading global supplier of construction equipment, established in 1985 with a vision
                to provide high-quality machinery to construction companies worldwide. With over 35 years of experience
                in the industry, we have built a reputation for reliability, expertise, and exceptional service.
              </p>
              <p className="mb-4 text-gray-700">
                Our headquarters in Chiba, Japan serves as the central hub for our international operations, allowing us
                to efficiently source and distribute equipment to more than 70 countries around the world. We specialize
                in both new and used construction machinery, offering a comprehensive range of options to meet diverse
                customer needs.
              </p>
              <p className="text-gray-700">
                At Atoki CO LTD, we pride ourselves on our deep industry knowledge, extensive network of suppliers, and
                commitment to customer satisfaction. Our team of experts carefully inspects and evaluates each piece of
                equipment to ensure it meets our high standards before it reaches our customers.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Company+Headquarters"
                alt="Company Headquarters"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Our+Mission"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Mission & Vision</h2>
              <div className="mb-6 h-1 w-24 bg-blue-400"></div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Mission</h3>
                <p className="text-gray-700">
                  Our mission is to provide high-quality construction equipment and exceptional service to our customers
                  worldwide, enabling them to complete their projects efficiently and effectively. We strive to be a
                  trusted partner in the construction industry, offering reliable machinery and expert advice to help
                  our customers succeed.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Vision</h3>
                <p className="text-gray-700">
                  Our vision is to be the global leader in construction equipment supply, recognized for our commitment
                  to quality, innovation, and customer satisfaction. We aim to expand our reach to new markets while
                  maintaining the highest standards of service and building lasting relationships with our customers and
                  partners.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold">Core Values</h3>
                <ul className="space-y-2">
                  {[
                    "Quality and Reliability",
                    "Customer Satisfaction",
                    "Integrity and Transparency",
                    "Innovation and Continuous Improvement",
                    "Global Perspective with Local Understanding",
                  ].map((value) => (
                    <li key={value} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-blue-400" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-3xl font-bold">Our History</h2>
          <div className="mx-auto mb-12 h-1 w-24 bg-blue-400"></div>

          <div className="space-y-8">
            <div className="relative border-l-2 border-blue-400 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400"></div>
              <h3 className="mb-2 text-xl font-semibold">1985 - Foundation</h3>
              <p className="text-gray-700">
                Atoki CO LTD was established in Chiba, Japan, initially focusing on domestic construction equipment
                sales.
              </p>
            </div>

            <div className="relative border-l-2 border-blue-400 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400"></div>
              <h3 className="mb-2 text-xl font-semibold">1990 - International Expansion</h3>
              <p className="text-gray-700">
                The company began exporting used construction equipment to Southeast Asian countries, marking the
                beginning of our international operations.
              </p>
            </div>

            <div className="relative border-l-2 border-blue-400 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400"></div>
              <h3 className="mb-2 text-xl font-semibold">2000 - Global Reach</h3>
              <p className="text-gray-700">
                By the turn of the millennium, Atoki CO LTD had established a presence in over 30 countries, with a
                growing reputation for quality and reliability.
              </p>
            </div>

            <div className="relative border-l-2 border-blue-400 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400"></div>
              <h3 className="mb-2 text-xl font-semibold">2010 - Diversification</h3>
              <p className="text-gray-700">
                The company expanded its services to include equipment rental, parts supply, and maintenance services,
                offering comprehensive solutions to customers.
              </p>
            </div>

            <div className="relative border-l-2 border-blue-400 pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400"></div>
              <h3 className="mb-2 text-xl font-semibold">2020 - Present</h3>
              <p className="text-gray-700">
                Today, Atoki CO LTD operates in more than 70 countries, with a diverse portfolio of construction
                equipment and a commitment to sustainable practices and digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-3xl font-bold">Our Leadership Team</h2>
          <div className="mx-auto mb-12 h-1 w-24 bg-blue-400"></div>

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
                <p className="mt-2 text-sm text-gray-500">{director.description}</p>
              </div>
            ))}
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
    title: "Chief Executive Officer",
    description:
      "With over 30 years of experience in the construction industry, H. Ishiro has led Atoki CO LTD to become a global leader in equipment supply.",
  },
  {
    name: "Haruna Miyoshi",
    title: "President",
    description:
      "Haruna brings strategic vision and operational excellence to Atoki CO LTD, focusing on sustainable growth and customer satisfaction.",
  },
  {
    name: "Hachiman Hattori",
    title: "Sales Manager",
    description:
      "Hachiman leads our global sales team, developing strong relationships with customers and partners around the world.",
  },
  {
    name: "Tomoko Riishi Katsuroda",
    title: "Accounts Manager",
    description:
      "Tomoko ensures financial stability and transparency, managing the company's finances with precision and foresight.",
  },
]
