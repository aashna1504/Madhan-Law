import React from "react";
import { Brain, TrendingUp, DollarSign } from "lucide-react";
function Trust() {
  return (
    <div className="">
      <section className="relative  text-white overflow-hidden font-[Mulish]">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/druohnmyv/image/upload/v1726684201/646c5c2bdd0ef57c21329655_why_sgtgcs.jpg"
            alt="Lawyer writing with a pen"
            className="w-full h-full object-cover rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-45 rounded-t-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-[50px] sm:text-5xl font-[Mulish]">
            Why Put Your
            <span className="block italic font-[Playfair]">Trust In Us?</span>
          </h2>

          <div className="mt-[7rem] grid gap-8 md:grid-cols-3 ">
            <div className="flex flex-col">
              <div className="rounded-full p-3 mb-4">
                <Brain className="h-9 w-9" />
              </div>
              <h3 className="text-[32px] mb-2">Experienced</h3>
              <p className="text-gray-300 text-[19px]">
                A team of lawyers with extensive experience and a proven track
                record of success
              </p>
            </div>

            <div className="flex flex-col">
              <div className="p-3 mb-4">
                <TrendingUp className="h-9 w-9" />
              </div>
              <h3 className="text-[32px] mb-2">Approachable</h3>
              <p className="text-gray-300 text-[19px]">
                A focus on results, with a no-nonsense approach to getting
                clients the best possible outcome
              </p>
            </div>

            <div className="flex flex-col ">
              <div className="p-3 mb-4">
                <DollarSign className="h-9 w-9" />
              </div>
              <h3 className="text-[32px] mb-2">Affordable</h3>
              <p className="text-gray-300 text-[19px]">
                Affordable and flexible fee structures, including contingency
                and flat-fee arrangements
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trust;
