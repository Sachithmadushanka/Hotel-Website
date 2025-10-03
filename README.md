# DEWORA Hotel Website

A modern, luxurious hotel website built with React.js, showcasing premium accommodations, world-class facilities, and seamless booking experience for DEWORA Hotel.

## 🏨 About DEWORA

DEWORA Hotel represents the pinnacle of hospitality excellence, offering guests an unforgettable experience with luxurious accommodations, exceptional service, and world-class amenities. Our website provides an elegant digital gateway for guests to explore our offerings and make reservations effortlessly.


## ✨ Features

### 🏠 **Homepage**
- Stunning hero banner with hotel branding and captivating background imagery
- Compelling tagline and call-to-action elements
- Smooth navigation and modern design aesthetics

### ℹ️ **About Us**
- Comprehensive hotel story and brand values
- Professional presentation of hotel's unique selling points
- Engaging content that builds trust and credibility

### 🛏️ **Rooms & Suites**
- Showcase of distinctive room categories
- High-resolution images and detailed descriptions
- Transparent pricing information
- Interactive room selection experience

### 🏊 **Facilities & Services**
- Complete overview of premium amenities:
  - Swimming Pool & Aquatic Center
  - Full-Service Spa & Wellness Center
  - State-of-the-Art Fitness Center
  - Fine Dining Restaurant & Bar
  - High-Speed Wi-Fi Throughout
  - Complimentary Parking
  - 24/7 Concierge Service

### 📸 **Gallery**
- Professional photo collection 
- Interactive grid layout or elegant slider presentation
- Showcases hotel's architecture, rooms, and amenities

### 📞 **Contact & Booking**
- Complete contact information (phone, email, address)
- Interactive map integration for easy location access
- **Innovative WhatsApp Booking System**:
  - User-friendly booking form
  - Captures guest details (Name, Check-in/Check-out dates, Room type)
  - Generates pre-filled WhatsApp message for instant communication
  - Direct connection to hotel reservations team

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 19.1.1
- **Build Tool**: Vite 7.1.6
- **Styling**: Modern CSS3 with responsive design
- **Code Quality**: ESLint for consistent code standards
- **Development**: Hot Module Replacement (HMR) for efficient development

## 📁 Project Structure

```
DEWORA-Website/
├── public/                    # Public assets
├── src/
│   ├── assets/               # Static assets
│   │   ├── bg.jpg           # Hero section background image
│   │   └── room1.jpg        # Room showcase pictures
│   ├── App.jsx              # Main App component
│   ├── App.css              # App styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
└── README.md                # Project documentation
```


### Development Structure (Recommended)
```
src/
├── components/              # React components
│   ├── Header/             # Navigation component
│   ├── Hero/               # Hero banner component  
│   ├── About/              # About section component
│   ├── Rooms/              # Rooms showcase component
│   ├── Facilities/         # Facilities section component
│   ├── Gallery/            # Image gallery component
│   ├── Contact/            # Contact & booking component
│   └── Footer/             # Footer component
├── assets/
│   ├── images/             # Organized image folders
│   │   ├── hero/          # Hero section images
│   │   ├── rooms/         # Room images
│   │   ├── facilities/    # Facility images  
│   │   └── gallery/       # Gallery images
│   └── icons/             # Icon assets
├── styles/                 # Global styles
│   ├── globals.css        # Global CSS variables
│   └── components.css     # Component styles
├── utils/                 # Utility functions
│   └── whatsapp.js       # WhatsApp integration
├── App.jsx
├── App.css
├── main.jsx
└── index.css

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- Modern web browser

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sachithmadushanka/Hotel-Website.git
   cd Dewora-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality check
```

## 📱 Responsive Design

The website is meticulously crafted to provide optimal user experience across all devices:

- **🖥️ Desktop**: Full-featured experience with large imagery and detailed layouts
- **📱 Tablet**: Adapted layouts maintaining functionality and visual appeal
- **📞 Mobile**: Touch-optimized interface with streamlined navigation

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_HOTEL_PHONE=+94123456789
VITE_HOTEL_EMAIL=reservations@dewora.com
VITE_HOTEL_ADDRESS=Colombo, Sri Lanka
VITE_WHATSAPP_NUMBER=94123456789
```

### WhatsApp Integration

The booking system utilizes WhatsApp's URL scheme for seamless communication:

```javascript
const generateWhatsAppURL = (name, checkin, checkout, roomType) => {
  const message = `Hello DEWORA Hotel! I would like to make a reservation:
  
Name: ${name}
Check-in: ${checkin}
Check-out: ${checkout}
Room Type: ${roomType}

Please confirm availability and provide booking details.`;
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
```

## 🎯 Key Highlights

### ✅ **Technical Excellence**
- ✓ Clean, well-documented React.js implementation
- ✓ Fully responsive design for all device types
- ✓ Modern component-based architecture
- ✓ Optimized performance with Vite build system
- ✓ Professional code organization and structure

### 🌟 **User Experience**
- ✓ Intuitive navigation and user-friendly interface
- ✓ Fast loading times and smooth interactions
- ✓ Accessible design following best practices
- ✓ Interactive booking system via WhatsApp
- ✓ Professional visual design and branding

### 📊 **Development Standards**
- ✓ ESLint configuration for code quality
- ✓ Component-based architecture for maintainability
- ✓ Semantic HTML and proper accessibility
- ✓ Cross-browser compatibility
- ✓ Performance-optimized assets and code

## 🤝 Contributing

We welcome contributions to enhance the DEWORA Hotel website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/enhancement`)
5. Open a Pull Request


## 👨‍💻 Developer

**Dewmini Kaveesha**
- Full Stack Developer specializing in React.js and modern web technologies
- Passionate about creating exceptional user experiences
- Expert in responsive design and interactive web applications

## 📞 Contact

For inquiries about this project:
- **Email**: sachithmkumarasiri@gmail.com
- **GitHub**: [github.com/Dewmini-Kaveesha](https://github.com/Sachithmadushanka)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/sachith-madushanka)

---

**Built with ❤️ for DEWORA Hotel** | **Powered by React.js & Vite** | **© 2025 DEWORA Hotel**
