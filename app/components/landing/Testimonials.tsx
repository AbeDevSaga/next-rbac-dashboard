import { testimonyData } from "@/app/constants/types/testimony";
import TestimonyCard from "../ui/TestimonyCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {testimonyData.header.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {testimonyData.header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonyData.testimonies.map((testimony, index) => (
            <TestimonyCard
              key={`${testimony.name}-${index}`}
              testimony={{
                ...testimony,
                delay: index * 0.1,
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
