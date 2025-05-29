import { featuresData } from "@/app/constants/types/features";
import FeaturesCard from "../ui/FeaturesCard";

export default function Features() {
  return (
    <section 
      id="features" 
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {featuresData.header.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {featuresData.header.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresData.features.map((feature, index) => (
            <FeaturesCard 
              key={feature.title} 
              feature={{
                ...feature,
                delay: index * 0.1
              }} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}