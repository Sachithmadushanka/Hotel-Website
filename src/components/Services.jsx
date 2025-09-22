import React from 'react';

// Import service images
import spaImg from '../assets/spa.jpg';
import gymImg from '../assets/gym.jpg';
import parkingImg from '../assets/parking.jpg';
import restaurantImg from '../assets/restaurant.jpg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Luxury Spa",
      image: spaImg,
      description: "Indulge in our world-class spa services featuring traditional and modern wellness treatments. Our experienced therapists offer massages, facials, and holistic therapies to rejuvenate your body and mind.",
      features: ["Full-body massages", "Facial treatments", "Aromatherapy", "Sauna & Steam room", "Wellness packages"],
      hours: "Daily 6:00 AM - 10:00 PM",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Modern Gym",
      image: gymImg,
      description: "Stay fit during your stay with our state-of-the-art fitness center. Equipped with the latest cardio machines, free weights, and strength training equipment for all fitness levels.",
      features: ["Cardio equipment", "Free weights", "Strength machines", "Personal training"],
      hours: "Daily 6:00 AM - 10:00 PM",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Secure Parking",
      image: parkingImg,
      description: "Enjoy peace of mind with our secure, covered parking facility. Available for all guests with 24/7 security monitoring and valet parking services upon request.",
      features: ["Covered parking", "24/7 security", "Valet service", "EV charging stations", "Reserved spaces"],
      hours: "24/7 Available",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Fine Dining Restaurant",
      image: restaurantImg,
      description: "Experience culinary excellence at our signature restaurant. Our award-winning chefs create exceptional dishes using the finest local and international ingredients.",
      features: ["International cuisine", "Local specialties", "Wine selection", "Private dining", "Room service"],
      hours: "Breakfast 6:30 AM - 10:30 AM, Dinner 6:00 PM - 11:00 PM",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block">
            <h2 className="mb-6 text-5xl font-bold tracking-tight text-transparent md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text">
              Our Services
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          </div>
          <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed text-gray-700">
            Discover our premium amenities and services designed to make your stay unforgettable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden transition-all duration-500 bg-white shadow-xl group rounded-2xl hover:shadow-2xl hover:scale-105"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Service Title Overlay */}
                <div className="absolute text-white bottom-4 left-4">
                  <h3 className="mb-1 text-2xl font-bold">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.hours}</p>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">Available Features:</h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;