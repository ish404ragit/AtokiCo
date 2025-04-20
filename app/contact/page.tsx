"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Printer, Mail, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would be where you'd handle the form submission
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Message sent successfully!")
  }

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
          <h1 className="text-4xl font-bold text-white text-center">Contact</h1>
          <div className="flex justify-center mt-8">
            <div className="bg-yellow-500 px-4 py-2 text-white font-medium">CONTACT</div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="w-full h-6 bg-yellow-500 bg-opacity-30 flex items-center">
        <div className="container mx-auto">
          <div className="border-t-2 border-dashed border-yellow-500 w-full"></div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Details */}
            <div className="md:w-1/3 bg-yellow-500 text-white p-8 rounded-md">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2">—</span> Contact Details
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Head Office</h3>
                    <p>2-36-12 Higashi-Otsuka,</p>
                    <p>Toshima, Tokyo 170-0005,</p>
                    <p>Japan</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p>+81-90-5891-5891</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Printer size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fax</h3>
                    <p>+81-3-3295-7071</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>mail@nippontrading.jp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3 bg-white p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-bold mb-2">Message Us</h2>
              <div className="h-1 w-12 bg-yellow-500 mb-6"></div>
              <p className="text-gray-500 mb-6">
                Your email address will not be published. Required fields are marked with *
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium flex items-center hover:bg-gray-800 transition-colors"
                >
                  SEND MESSAGE <ArrowRight className="ml-2" size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="h-[400px] relative">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Map would be displayed here</p>
            <p className="text-gray-400 text-sm">Google Maps or other map integration</p>
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
