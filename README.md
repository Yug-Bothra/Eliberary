# 📚 Eliberary

[![Live Demo](https://img.shields.io/badge/Live%20Demo-vercel-brightgreen)](https://eliberary.vercel.app/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Eliberary** is an intelligent digital library platform that leverages AI to enhance the reading and learning experience. Built as part of a college major project, it combines modern web technologies with AI-powered features to create an intuitive and engaging library management system.

## 🌟 Features

- **AI-Powered Book Recommendations** - Get personalized book suggestions using Gemini AI
- **Interactive Landing Page** - Modern, responsive design with smooth animations
- **Book Management System** - Browse, search, and organize your digital library
- **Intelligent Content Generation** - AI-assisted book summaries and insights
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean interface with Framer Motion animations

## 🚀 Live Demo

Experience Eliberary live: [https://eliberary.vercel.app/](https://eliberary.vercel.app/)

## 📸 Screenshots

### Landing Page
Beautiful, modern landing page with engaging visuals and smooth animations.

### AI-Powered Recommendations
Intelligent book recommendation system powered by Gemini AI.

### Book Library Interface
Clean and intuitive interface for browsing and managing your digital library.

### Interactive Components
Responsive design with interactive elements and smooth transitions.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Lucide React (icons)
- **Structure**: Paperboard (styling utilities)
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yug-Bothra/Eliberary.git
   cd Eliberary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
Eliberary/
├── src/
│   ├── ai-generate/
│   │   └── AIGenerate.jsx          # AI content generation component
│   ├── assets/                     # Static assets
│   ├── books/
│   │   └── Books.jsx              # Book management component
│   ├── components/
│   │   ├── LandingPage.jsx        # Main landing page
│   │   └── NavBar.jsx             # Navigation component
│   ├── recommender/
│   │   └── Recommender.jsx        # AI recommendation system
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Global styles
│   ├── index.css                  # Base CSS
│   └── main.jsx                   # Application entry point
├── public/                        # Public assets
├── package.json                   # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js                # Vite configuration
└── README.md                     # Project documentation
```

## 🤖 AI Features

### Gemini AI Integration
- **Book Recommendations**: Personalized suggestions based on user preferences
- **Content Generation**: AI-powered book summaries and insights
- **Smart Search**: Intelligent search functionality with natural language processing

## 🎨 Key Components

### LandingPage.jsx
The main entry point featuring:
- Hero section with engaging visuals
- Feature highlights
- Call-to-action sections
- Responsive design elements

### Recommender.jsx
AI-powered recommendation engine:
- Integration with Gemini API
- Personalized book suggestions
- User preference analysis

### Books.jsx
Digital library interface:
- Book browsing and search
- Collection management
- Interactive book cards

### AIGenerate.jsx
Content generation features:
- AI-powered summaries
- Book insights and analysis
- Dynamic content creation

## 📱 Responsive Design

Eliberary is built with a mobile-first approach, ensuring optimal performance across:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

The project is deployed on Vercel with automatic deployments from the main branch:

1. **Connect to Vercel**: Import your GitHub repository
2. **Configure Environment Variables**: Add your API keys in Vercel dashboard
3. **Deploy**: Automatic deployment on every push to main branch

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🤝 Contributing

This project is part of a college major project. If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of an academic assignment. Please respect academic integrity policies.

## 👨‍💻 Author

**Yug Bothra**
- GitHub: [@Yug-Bothra](https://github.com/Yug-Bothra)
- Project Link: [https://github.com/Yug-Bothra/Eliberary](https://github.com/Yug-Bothra/Eliberary)

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- React community for excellent documentation
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Vercel for seamless deployment

---

⭐ **Star this repository if you found it helpful!**
