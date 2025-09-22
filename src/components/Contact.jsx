import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Standard Room'
  });

  const roomTypes = [
    'Standard Room',
    '2-Person Room',
    '4-Person Room',
    'Family Room',
    'Deluxe Suite',
    'Presidential Suite'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppBooking = () => {
    const { name, checkIn, checkOut, roomType } = formData;
    
    if (!name || !checkIn || !checkOut) {
      alert('Please fill in all required fields');
      return;
    }

    const message = `Hello Hotel Dewora! 

I would like to make a booking with the following details:

👤 Name: ${name}
📅 Check-in Date: ${checkIn}
📅 Check-out Date: ${checkOut}
🏨 Room Type: ${roomType}

Please confirm availability and provide booking details.

Thank you!`;

    const whatsappNumber = '+94771234567'; // Replace with actual hotel WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {/* Animated floating elements */}
          <div className="absolute w-4 h-4 delay-100 bg-white rounded-full top-10 left-10 opacity-60 animate-bounce"></div>
          <div className="absolute w-3 h-3 delay-300 rounded-full top-20 right-20 bg-cyan-400 opacity-70 animate-pulse"></div>
          <div className="absolute w-2 h-2 delay-500 bg-blue-300 rounded-full opacity-50 top-32 left-1/3 animate-ping"></div>
          <div className="absolute w-3 h-3 delay-700 bg-purple-300 rounded-full bottom-20 left-20 opacity-60 animate-bounce"></div>
        </div>
        
        {/* Gradient orbs with animations */}
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/15 blur-3xl animate-pulse"></div>
        <div className="absolute delay-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 text-sm font-medium text-blue-300 border rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 backdrop-blur-sm">
              ✨ Get In Touch
            </span>
          </div>
          <h2 className="mb-8 text-6xl font-bold md:text-7xl">
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">
              Contact &
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text">
              Booking
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-300">
            Experience luxury at Hotel Dewora. Reach out to us or make an instant booking via WhatsApp
          </p>
          <div className="w-32 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Enhanced Contact Info */}
          <div className="space-y-8">
            {/* Enhanced Contact Cards */}
            <div className="p-8 transition-all duration-500 border shadow-2xl bg-white/5 backdrop-blur-xl rounded-3xl border-white/10 hover:border-purple-400/50 group">
              <div className="flex items-center justify-center mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-white">Get In Touch</h3>
              </div>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center p-5 space-x-4 transition-all duration-300 transform bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl hover:from-blue-500/20 hover:to-blue-600/20 hover:scale-105 group-hover:shadow-xl">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl group-hover:scale-110">
                    <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">+94 77 123 4567</p>
                    <p className="font-medium text-blue-300">📞 Available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center p-5 space-x-4 transition-all duration-300 transform bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 rounded-2xl hover:from-cyan-500/20 hover:to-cyan-600/20 hover:scale-105 group-hover:shadow-xl">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl group-hover:scale-110">
                    <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">info@hoteldewora.com</p>
                    <p className="font-medium text-cyan-300">✉️ Quick response</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start p-5 space-x-4 transition-all duration-300 transform bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl hover:from-purple-500/20 hover:to-purple-600/20 hover:scale-105 group-hover:shadow-xl">
                  <div className="flex items-center justify-center transition-transform duration-300 shadow-lg w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl group-hover:scale-110">
                    <svg className="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold leading-tight text-white">
                      123 Ocean View Drive
                    </p>
                    <p className="text-white">Colombo 03, Sri Lanka</p>
                    <p className="font-medium text-purple-300">📍 Prime location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Map */}
            <div className="p-6 transition-all duration-500 border shadow-2xl bg-white/5 backdrop-blur-xl rounded-3xl border-white/10 hover:border-blue-400/50 group">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-bold text-white">🗺️ Find Our Location</h3>
              </div>
              <div className="overflow-hidden transition-shadow duration-500 bg-gray-800 shadow-inner aspect-video rounded-2xl group-hover:shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7278030355315!2d79.84421431477284!3d6.918466894995825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259684e2f83bb%3A0x3b1e7107b1f4b8e2!2sColombo%2003%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Booking Form */}
          <div className="space-y-8">
            {/* Enhanced WhatsApp Booking */}
            <div className="p-8 transition-all duration-500 border shadow-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-xl rounded-3xl border-green-400/20 hover:border-green-400/40 group">
              <div className="mb-8 text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 shadow-2xl bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl animate-pulse"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-green-500 to-green-600 rounded-3xl">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-3xl font-bold text-white">💬 Instant Booking</h3>
                <p className="text-gray-300">Book directly via WhatsApp - Quick & Easy!</p>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">
                    👤 Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-white placeholder-gray-400 transition-all duration-300 border bg-white/10 border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm hover:bg-white/15"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Check-in */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">
                    📅 Check-in Date *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm hover:bg-white/15"
                    required
                  />
                </div>

                {/* Check-out */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">
                    📅 Check-out Date *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm hover:bg-white/15"
                    required
                  />
                </div>

                {/* Room Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white">
                    🏨 Room Type
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm hover:bg-white/15"
                  >
                    {roomTypes.map((type) => (
                      <option key={type} value={type} className="text-white bg-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Enhanced Book Button */}
                <button
                  onClick={handleWhatsAppBooking}
                  className="relative w-full px-6 py-5 overflow-hidden font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:opacity-20"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="text-lg">🚀 Book via WhatsApp</span>
                  </div>
                </button>

                <div className="p-4 border bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border-green-400/20">
                  <p className="text-sm leading-relaxed text-center text-gray-300">
                    ✨ Fill details above and click to open WhatsApp with your booking info ready to send!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;