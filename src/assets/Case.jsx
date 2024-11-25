"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const caseCategories = [
  "All",
  "Business",
  "Civil Litigation",
  "Estate & Probate",
  "Real Estate",
];

const caseResults = [
  {
    category: "Business",
    title: "Successful Formation of Nonprofit and Business Phoenix, Arizona",
    description:
      "Our client approached us to form a nonprofit (501c3) to run their charitable initiative. They were unsure of whether to simultaneously also form a business to support the nonprofit. We walked them through a cohesive strategy that will enable both entities to prosper, filed the paperwork on their behalf, and guided them toward launching operations. Both entities continue to thrive.",
  },
];

function Case() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCases =
    activeCategory === "All"
      ? caseResults
      : caseResults.filter((caseItem) => caseItem.category === activeCategory);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-white font-[Mulish]">
        <header className="bg-[#413d3e] text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto mt-[8rem]">
              <nav className="mb-4">
                <ul className="flex text-sm">
                  <li className="after:content-['/'] after:mx-2">Home</li>
                  <li> Our Case</li>
                </ul>
              </nav>
              <h1 className="text-[64px] font-[Mulish]"> Our Case</h1>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {caseCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-white text-gray-800"
                      : "bg-[#413d3e] text-white hover:bg-[#413d3e] border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden border rounded-3xl"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full mb-2">
                    {caseItem.category}
                  </span>
                  <h2 className="text-[35px] text-gray-800 mb-2 leading-10">
                    {caseItem.title}
                  </h2>
                  <p className="text-gray-600 text-[15px]">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Case;
