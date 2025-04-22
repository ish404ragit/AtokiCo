"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#001a2c] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&text=Contact+Us"
            alt="Contact Us"
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
            <h1 className="text-5xl font-bold">Contact</h1>
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-gray-300 hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span className="bg-blue-400 px-3 py-1 text-sm font-medium uppercase text-white">CONTACT</span>
            </div>
          </div>
        </div>
        <div className="h-6 w-full bg-blue-400/20"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Details */}
            <div className="bg-blue-400 p-8 text-white">
              <h2 className="mb-8 flex items-center text-xl font-bold">
                <span className="mr-2">—</span> Contact Details
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p>791‑1 Kamisago, Yachimata‑shi,</p>
                    <p>Chiba‑ken 289‑1125, Japan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+81-90-1227-3369</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Fax</p>
                    <p>+81-3-5395-7671</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>mail@atoki.jp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 shadow-md">
              <h2 className="mb-8 text-2xl font-bold">Message Us</h2>
              <div className="h-1 w-12 bg-blue-400 mb-6"></div>
              <p className="mb-6 text-sm text-gray-500">
                Your email address will not be published. Required fields are marked with *
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] w-full"
                  />
                </div>
                <div>
                  <Button type="submit" className="bg-black hover:bg-gray-800 text-white">
                    SEND MESSAGE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[400px] w-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Map would be embedded here</p>
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
