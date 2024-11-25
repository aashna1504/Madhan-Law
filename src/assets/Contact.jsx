import React from "react";
import { MapPin, Phone } from "lucide-react";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-100 font-[Mulish] ">
        <header className="bg-[#413d3e] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[8rem]">
            <nav className="mb-4">
              <ul className="flex text-sm">
                <li className="after:content-['/'] after:mx-2">Home</li>
                <li>Contact Us</li>
              </ul>
            </nav>
            <h1 className="text-[64px] font-[Mulish]">Contact Us</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-[48px] mb-4 font-[Mulish]">
                Got Legal Needs?
                <p className="font-[Playfair]">Tell Us About Them!</p>
              </h2>
              <p className="mb-4">
                We are delighted to assist you and address any questions or
                inquiries regarding our services or business.
              </p>
              <p className="mb-4">
                Feel free to contact us at (406) 296-6435 in Montana, (623)
                233-0728 in Arizona, or simply complete the form by providing
                your information and message. We will respond promptly to your
                query.
              </p>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Map"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-[#ececec] rounded-lg shadow-md p-6 ">
                <img
                  src="/placeholder.svg?height=50&width=150"
                  alt="Hagstad Law Group Logo"
                  width={150}
                  height={50}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2">
                      Which HLG office location would you like to contact? *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="office" className="mr-2" />{" "}
                        Montana
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="office" className="mr-2" />{" "}
                        Arizona
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Name *</label>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-1/2 px-3 py-2 border rounded"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-1/2 px-3 py-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Cell Phone *</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">
                      How may we be of service? *
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border rounded"
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Send confirmation email with the submitted responses to
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded mt-2"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="border p-4 rounded">
                      <p>I'm not a robot</p>
                      {/* Replace with actual reCAPTCHA component */}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <p className="text-sm text-gray-600 mb-4">
              * Communication through our website does not establish an
              attorney-client relationship between you and Hagstad Law Group,
              PLLC.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Montana</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>(406) 296-6435</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Arizona</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>(623) 233-0728</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
