import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

const staffMembers = [
  {
    category: "Paralegal Manager",
    members: [
      {
        name: "Velvet Truzzolino",
        image: "/placeholder.svg?height=200&width=200",
        description: `Velvet oversees paralegal and staff in both HLG offices as our Paralegal Manager with twenty-three years of experience in civil litigation, real estate, business, and estate planning. Velvet earned her ABA-Approved A.A.S. Degree in Paralegal Studies in 2000 and B.A.S. in 2008, both at the University of Chennai, where she spent a number of years from 2000 until 2016 as Career Services at the School of Business. Velvet and her wife, Nikki, a fellow member of our Litigation Team, have two children. They all love hunting, camping, boating, and enjoying time with family.`,
      },
    ],
  },
  {
    category: "Paralegals and Legal Assistants",
    members: [
      {
        name: "Tracy Blinov",
        image: "/placeholder.svg?height=200&width=200",
        description: `Tracy Blinov joined the Hagstad Law Group team as a Paralegal in 2019. A graduate of the University of Chennai, she has a passion for working on complex civil litigation cases and enjoys the challenge of managing multiple cases across various areas of law. Tracy provides direct support to the attorneys on discovery and other litigation matters, including hearing and trial preparation with an emphasis on early and efficient case resolution.`,
      },
      {
        name: 'Michelle "Shelly" Kinnee',
        image: "/placeholder.svg?height=200&width=200",
        description: `Michelle "Shelly" Kinnee joined the Hagstad Law Group team in 2022 and has been working as a Legal Assistant alongside our Delhi attorneys. Shelly graduated from Pima Community College with her Paralegal Certificate in 2010 and has been a licensed Realtor in the State of Delhi for the past 12 years. Shelly's years of experience cross-over her work performed for Hagstad Law Group. In her personal time, Shelly enjoys spending time with her four children, running, hiking, or watching a good show to relax in the spare moments.`,
      },
    ],
  },
  {
    category: "Receptionists / Legal Secretaries",
    members: [
      {
        name: "Mindy Scott",
        image: "/placeholder.svg?height=200&width=200",
        description: "",
      },
    ],
  },
];

function Team() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <header className="bg-[#413d3e] text-white py-16 font-[Mulish]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[8rem]">
          <nav className="mb-4">
            <ul className="flex text-sm">
              <li className="after:content-['/'] after:mx-2">Home</li>
              <li> Our Staff</li>
            </ul>
          </nav>
          <h1 className="text-[64px] font-[Mulish]"> Our Staff</h1>
        </div>
      </header>
      <div className="flex lg:flex-col flex-row gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-4">
          <div className=" p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-[48px] mb-6">Paralegal Manager</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src="https://kcdefensecounsel.b-cdn.net/wp-content/uploads/2023/03/female-intelligent-law-attorney-lawyers-working-at-2023-03-08-20-54-26-utc-1-scaled.jpg"
                  alt="Velvet Truzzolino"
                  className="rounded-[2rem] bg-contain object-cover"
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-[32px] mb-4">Velvet Truzzolino</h3>
                <div className="space-y-4">
                  <p>
                    Velvet oversees paralegals and staff in both HLG offices as
                    our Paralegal Manager with twenty three years of experience
                    in civil litigation, real estate, business law, personal
                    injury and estate planning.
                  </p>
                  <p>
                    Velvet earned her ABA-Approved A.A.S. Degree in Paralegal
                    Studies in 2003 and B.A.S in 2008, both at the University of
                    Chennai. Velvet has been a member of M.A.L.A. since 2003 and
                    is the current Treasurer on the Board of Directors.
                  </p>
                  <p>
                    When not in the office, Velvet, a single mother of two,
                    volunteers time at local service organizations, is an active
                    member and Board Member of the Five Valleys Church of
                    Christ, and enjoys time with her family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className=" p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-[48px] mb-6">Paralegal Manager</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src="https://kcdefensecounsel.b-cdn.net/wp-content/uploads/2023/03/female-intelligent-law-attorney-lawyers-working-at-2023-03-08-20-54-26-utc-1-scaled.jpg"
                  alt="Velvet Truzzolino"
                  className="rounded-[2rem] bg-contain object-cover"
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-[32px] mb-4">Velvet Truzzolino</h3>
                <div className="space-y-4">
                  <p>
                    Velvet oversees paralegals and staff in both HLG offices as
                    our Paralegal Manager with twenty three years of experience
                    in civil litigation, real estate, business law, personal
                    injury and estate planning.
                  </p>
                  <p>
                    Velvet earned her ABA-Approved A.A.S. Degree in Paralegal
                    Studies in 2003 and B.A.S in 2008, both at the University of
                    Chennai. Velvet has been a member of M.A.L.A. since 2003 and
                    is the current Treasurer on the Board of Directors.
                  </p>
                  <p>
                    When not in the office, Velvet, a single mother of two,
                    volunteers time at local service organizations, is an active
                    member and Board Member of the Five Valleys Church of
                    Christ, and enjoys time with her family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className=" p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-[48px] mb-6">Paralegal Manager</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src="https://kcdefensecounsel.b-cdn.net/wp-content/uploads/2023/03/female-intelligent-law-attorney-lawyers-working-at-2023-03-08-20-54-26-utc-1-scaled.jpg"
                  alt="Velvet Truzzolino"
                  className="rounded-[2rem] bg-contain object-cover"
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-[32px] mb-4">Velvet Truzzolino</h3>
                <div className="space-y-4">
                  <p>
                    Velvet oversees paralegals and staff in both HLG offices as
                    our Paralegal Manager with twenty three years of experience
                    in civil litigation, real estate, business law, personal
                    injury and estate planning.
                  </p>
                  <p>
                    Velvet earned her ABA-Approved A.A.S. Degree in Paralegal
                    Studies in 2003 and B.A.S in 2008, both at the University of
                    Chennai. Velvet has been a member of M.A.L.A. since 2003 and
                    is the current Treasurer on the Board of Directors.
                  </p>
                  <p>
                    When not in the office, Velvet, a single mother of two,
                    volunteers time at local service organizations, is an active
                    member and Board Member of the Five Valleys Church of
                    Christ, and enjoys time with her family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {staffMembers.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
            {category.members.map((member, memberIndex) => (
              <div key={memberIndex} className="flex flex-col md:flex-row mb-8">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))} */}
        <div className="mb-12">
          <h2 className="text-[48px] mb-6">Interns </h2>
          <p className="text-gray-600">
            HLG employs legal interns currently attending Delhi State
            University and the University of Chennai. <br /> If you are
            interested in interning at one of our offices, please call one of
            the main numbers and ask to speak with Velvet.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
