import Image from "next/image"

export default function CompanyPage() {
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
          <h1 className="text-4xl font-bold text-white text-center">Company</h1>
          <div className="flex justify-center mt-8">
            <div className="bg-yellow-500 px-4 py-2 text-white font-medium">COMPANY</div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="w-full h-6 bg-yellow-500 bg-opacity-30 flex items-center">
        <div className="container mx-auto">
          <div className="border-t-2 border-dashed border-yellow-500 w-full"></div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Company Overview</h2>

            <div className="grid gap-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=COMPANY"
                    alt="Company Office"
                    width={500}
                    height={300}
                    className="rounded-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="mb-4">
                    Nippon Trading Co., Ltd. is committed to providing high-quality construction equipment and machinery
                    to customers worldwide. We aim to be the leading supplier of new and used construction equipment,
                    offering exceptional service and competitive pricing.
                  </p>
                  <p>
                    Our mission is to enable the construction industry to work more efficiently by providing reliable
                    equipment and excellent customer service.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 md:order-2">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=GLOBAL"
                    alt="Global Operations"
                    width={500}
                    height={300}
                    className="rounded-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2 md:order-1">
                  <h3 className="text-xl font-semibold mb-4">Global Operations</h3>
                  <p className="mb-4">
                    With headquarters in Tokyo, Japan, Nippon Trading Co., Ltd. has established a strong global
                    presence, serving customers in over 50 countries. Our extensive network allows us to source and
                    deliver equipment efficiently to meet our customers' needs.
                  </p>
                  <p>
                    We maintain strong relationships with manufacturers and suppliers worldwide, ensuring we can provide
                    the best equipment at competitive prices.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=VALUES"
                    alt="Company Values"
                    width={500}
                    height={300}
                    className="rounded-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Quality - We provide only the highest quality equipment</li>
                    <li>Integrity - We conduct business with honesty and transparency</li>
                    <li>Customer Focus - We prioritize customer satisfaction in everything we do</li>
                    <li>Innovation - We continuously seek better ways to serve our customers</li>
                    <li>Sustainability - We promote environmentally responsible practices</li>
                  </ul>
                </div>
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
