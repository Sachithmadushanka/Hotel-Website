import React from 'react';

const About = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6 tracking-tight">
              About Hotel Dewora
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Where luxury meets comfort, and every moment becomes a cherished memory
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over two decades, Hotel Dewora has been a beacon of hospitality excellence. 
              Founded with a vision to create more than just accommodation, we've crafted a 
              sanctuary where guests experience the perfect blend of luxury, comfort, and 
              personalized service.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence has made us a preferred destination for travelers 
              seeking exceptional experiences. From our elegantly appointed rooms to our 
              world-class amenities, every detail is designed with your comfort in mind.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-lg leading-relaxed">
                "To provide extraordinary hospitality experiences that exceed expectations, 
                creating lasting memories for every guest who walks through our doors."
              </p>
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">Hospitality from the Heart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;