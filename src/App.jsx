import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/resort-umbrellas.jpg')`
          }}
        >
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              WELCOME TO HOTEL DEWORA
            </h1>
            <p className="mb-8 text-xl font-light md:text-2xl">
              A Peaceful Stay, A Memorable Journey
            </p>
            
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Experience Luxury and Comfort
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Discover our world-class amenities, exceptional service, and beautiful accommodations 
              that make Hotel Dewora the perfect choice for your stay.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />
    </div>
  )
}

export default App
