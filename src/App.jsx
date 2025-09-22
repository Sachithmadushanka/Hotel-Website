import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Gallery from './components/Gallery'
import Rooms from './components/Rooms'
import Services from './components/Services'

function App() {
  // Scroll to top when component mounts (page loads/reloads)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <Gallery />

      {/* Rooms Section */}
      <Rooms />

      {/* Services Section */}
      <Services />
    </div>
  )
}

export default App
