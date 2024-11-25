import React from "react";
import { Star } from "lucide-react";
const reviews = [
  {
    platform: "Google",
    icon: "G",
    color: "text-blue-500",
    rating: 5,
    count: 30,
  },
  { platform: "Yelp", icon: "", color: "text-red-500", rating: 5, count: 6 },
  { platform: "Avvo", icon: "A", color: "text-blue-700", rating: 5, count: 13 },
  { platform: "Other", icon: "", color: "text-red-700", rating: 4, count: 30 },
  {
    platform: "Nextdoor",
    icon: "",
    color: "text-green-500",
    rating: 0,
    count: 20,
    label: "Faves",
  },
];
const testimonials = [
  {
    text: "Great experience. Very communicative, pleasant, and knowledgeable all the way from the legal secretary to the paralegal to the attorney. Everyone was on the same page at the same time, very refreshing. Everything was done online as I was in NY and my transactions were for the state of AZ. TYVM",
    author: "Christine Alber",
  },
  {
    text: "My appointment with David and his staff was relaxing and informative. The process has resulted in a better understanding of why we must consider a living trust. The offer of a free consultation was beneficial since it provided both parties with an understanding of our needs. The finished binder layout gives one a clear overview of what was accomplished.",
    author: "Ross Jones",
  },
  {
    text: "We have used HagEstad Law Group for multiple services for our business. We found them to be very professional, thorough, affordable, and knowledgeable. I would recommend HagEstad Law offices to anyone in need of legal counsel regarding their business.",
    author: "Talhia F",
  },
];
function Testimonial() {
  return (
    <div>
      <div className="bg-gray-100 py-12 font-[Mulish] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[48px] font-[Playfair]">Our Clients</h2>
          <h3 className="text-[48px] mb-8">Speak Out</h3>

          <div className="flex flex-wrap gap-4 mb-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-full px-4 py-2 shadow"
              >
                {review.icon && (
                  <span className={`font-bold ${review.color} mr-2`}>
                    {review.icon}
                  </span>
                )}
                <div className="flex items-center">
                  {review.rating > 0
                    ? Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))
                    : null}
                  <span className="ml-2 text-sm text-gray-600">
                    {review.count} {review.label || "reviews"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-[2rem] shadow">
                <blockquote className="text-gray-600 mb-4 text-[18px]">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-gray-800 font-semibold">
                  {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
