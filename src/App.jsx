import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/bg.jpg')`
          }}
        >
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WELCOME TO HOTEL DEWORA
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              A Peaceful Stay, A Memorable Journey
            </p>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Experience Luxury and Comfort
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our world-class amenities, exceptional service, and beautiful accommodations 
              that make Hotel Dewora the perfect choice for your stay.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
