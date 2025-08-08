import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactPage() {
  return (  <section id="contacts" className="min-h-screen">
    <div className="min-h-screen bg-white">
      <div
        className="grid h-full w-full
                      grid-cols-[.25fr_repeat(4,1fr)_.25fr]
                      grid-rows-5
                      gap-px
                      bg-gray-300
                      text-neutral-800
                      font-mono
                      text-base
                      md:text-lg
                      lg:text-xl
                      xl:text-2xl
                      "
      >
        {/* Left Gutter */}
        <div className="bg-neutral-100" style={{ gridArea: "1 / 1 / 6 / 2" }}></div>

        {/* Right Gutter */}
        <div className="bg-neutral-100" style={{ gridArea: "1 / 6 / 6 / 7" }}></div>

        {/* Top Row Headers */}
        <div
          className="flex items-center justify-center bg-neutral-100 p-4 text-center"
          style={{ gridArea: "1 / 2 / 2 / 3" }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Get in Touch</h2>
        </div>
        <div
          className="flex items-center justify-center bg-neutral-100 p-4 text-center"
          style={{ gridArea: "1 / 3 / 2 / 5" }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Elxtron</h1>
        </div>
        <div
          className="flex items-center justify-center bg-neutral-100 p-4 text-center"
          style={{ gridArea: "1 / 5 / 2 / 6" }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Reach Out</h2>
        </div>

        {/* Main Content Area - Contact Form and Info */}
        <div className="flex flex-col justify-center bg-neutral-100 p-4" style={{ gridArea: "2 / 2 / 5 / 4" }}>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Send us a message</h3>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-base md:text-lg">
                Name
              </Label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-base md:text-lg">
                Email
              </Label>
              <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message" className="text-base md:text-lg">
                Message
              </Label>
              <Textarea id="message" placeholder="Your message here..." rows={5} className="mt-1" />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          <div className="mt-6 space-y-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">Our Details</h3>
            <p className="text-base md:text-lg">Email: info@elxtron.com</p>
            <p className="text-base md:text-lg">Phone: +1 (123) 456-7890</p>
            <p className="text-base md:text-lg">Address: 123 Tech Lane, Innovation City, TX 78701</p>
          </div>
        </div>

        {/* Main Content Area - Map */}
        <div className="flex items-center justify-center bg-neutral-100 p-4" style={{ gridArea: "2 / 4 / 5 / 6" }}>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Location Map"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Bottom Area */}
        <div
          className="flex items-center justify-center bg-neutral-100 p-4 text-center"
          style={{ gridArea: "5 / 2 / 6 / 6" }}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            {"We look forward to hearing from you and collaborating on your next big idea!"}
          </p>
        </div>
      </div>{" "}
      {/* End of the main grid div */}
      <footer className="bg-neutral-800 text-neutral-100 py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Elxtron</h3>
            <p className="text-sm">&copy; {new Date().getFullYear()} Elxtron. All rights reserved.</p>
            <p className="text-sm">Designed and Built by z3r0</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <nav className="flex flex-row space-x-4">
              <Link href="/" className="hover:underline text-sm">
                Home
              </Link>
              <Link href="/about" className="hover:underline text-sm">
                About
              </Link>
              <Link href="/services" className="hover:underline text-sm">
                Services
              </Link>
              <Link href="/contact" className="hover:underline text-sm">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div></section>
  )
}
