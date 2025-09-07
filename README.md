# 🔗 BitLinks - The Best URL Shortener

<div align="center">

![BitLinks Logo](https://img.shields.io/badge/BitLinks-URL%20Shortener-purple?style=for-the-badge&logo=link)

**The most straightforward URL shortener in the world**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.19.0-green?style=flat-square&logo=mongodb)](https://mongodb.com/)

[🚀 Live Demo](#) | [📖 Documentation](#features) | [🐛 Report Bug](https://github.com/ChiragVasava/Bitlinks/issues) | [💡 Request Feature](https://github.com/ChiragVasava/Bitlinks/issues)

</div>

## 📖 About BitLinks

BitLinks is a privacy-focused, lightning-fast URL shortener built with modern web technologies. Unlike other URL shorteners, we don't track you, don't require sign-ups, and don't collect your personal data. Just pure simplicity and privacy.

### ✨ Key Features

- **🔒 100% Private** - No tracking, no analytics, no data collection
- **⚡ Lightning Fast** - Generate short URLs in milliseconds
- **🎨 Custom URLs** - Create memorable, branded short links
- **📱 Fully Responsive** - Works perfectly on all devices
- **🚫 No Registration** - Start using immediately without any sign-up
- **🛡️ Secure** - Built with security best practices
- **🎯 Professional UI** - Clean, modern, and intuitive interface

## 🛠️ Tech Stack

- **Frontend:** Next.js 15.5.2, React 19.1.0, TailwindCSS 4
- **Backend:** Next.js API Routes
- **Database:** MongoDB 6.19.0
- **Styling:** TailwindCSS with custom gradients and animations
- **Icons:** Lucide React (SVG icons)

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** (for cloning the repository)

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChiragVasava/Bitlinks.git
   cd Bitlinks
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=mongodb://localhost:27017/bitlinks
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

   **Environment Variables Explained:**
   - `MONGODB_URI`: Your MongoDB connection string
   - `NEXT_PUBLIC_HOST`: Your application's host URL (used for generating short links)

4. **Set up MongoDB**
   
   **Option A: Local MongoDB**
   - Install MongoDB locally
   - Start MongoDB service
   - The database `bitlinks` will be created automatically
   
   **Option B: MongoDB Atlas (Cloud)**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Get your connection string and replace the `MONGODB_URI` in `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see BitLinks in action! 🎉

## 📁 Project Structure

```
BitLinks/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js       # API endpoint for URL shortening
│   ├── fonts/
│   │   └── Poppins-ExtraBold.ttf
│   ├── shorten/
│   │   └── page.js           # URL shortening page
│   ├── layout.js             # Root layout
│   ├── page.js              # Homepage
│   └── globals.css          # Global styles
├── components/
│   └── Navbar.js            # Navigation component
├── public/
│   └── vector.jpg           # Hero section image
├── .env.local               # Environment variables
├── package.json             # Project dependencies
├── tailwind.config.js       # TailwindCSS configuration
├── next.config.js           # Next.js configuration
└── README.md               # Project documentation
```

## 🎯 Usage

### Creating Short URLs

1. **Navigate to the Shorten Page**
   - Visit `/shorten` or click "Try Now" button

2. **Enter Your URL**
   - Paste your long URL in the first input field
   - Optionally, enter a custom short URL identifier

3. **Generate & Share**
   - Click "Generate Short URL"
   - Copy the generated short link
   - Share it anywhere!

### API Usage

You can also use the API directly:

```javascript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://your-long-url.com',
    shorturl: 'custom-identifier' // optional
  })
});

const result = await response.json();
console.log(result);
```

## 📱 Screenshots

<div align="center">

### Homepage
<img width="1920" height="2179" alt="Home" src="https://github.com/user-attachments/assets/7ac754b0-85d9-4925-994a-2615e5025f68" />

### URL Shortener
<img width="1920" height="1511" alt="Shorten" src="https://github.com/user-attachments/assets/040e9e93-12e6-4942-a457-78dfc1d36c98" />

</div>

## 🔧 Configuration

### Database Configuration

The application uses MongoDB to store URL mappings. You can configure the database connection in the `.env.local` file:

```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/bitlinks

# MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bitlinks

# Custom host (for production)
NEXT_PUBLIC_HOST=https://yourdomain.com
```

### Customization

- **Styling:** Modify TailwindCSS classes in components
- **Branding:** Update logo and colors in `components/Navbar.js`
- **Domain:** Change `NEXT_PUBLIC_HOST` for custom domains

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**
   - Fork this repository
   - Connect your GitHub account to Vercel
   - Import the BitLinks project

2. **Configure Environment Variables**
   - Add `MONGODB_URI` and `NEXT_PUBLIC_HOST` in Vercel dashboard
   - Set `NEXT_PUBLIC_HOST` to your Vercel domain

3. **Deploy**
   - Vercel will automatically build and deploy your application

### Other Platforms

BitLinks can be deployed on any platform that supports Next.js:
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write descriptive commit messages
- Test your changes thoroughly
- Update documentation if needed

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
```
Error: MongoNetworkError: connect ECONNREFUSED
```
- Ensure MongoDB is running locally
- Check your `MONGODB_URI` in `.env.local`
- Verify database permissions

**Build Errors**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

**Environment Variables Not Loading**
- Ensure `.env.local` is in the root directory
- Restart the development server
- Check for typos in variable names

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **TailwindCSS** for the utility-first CSS framework
- **MongoDB** for the reliable database solution
- **Vercel** for seamless deployment platform

## 📞 Support

If you encounter any issues or have questions:

- 🐛 **Report bugs:** [GitHub Issues](https://github.com/ChiragVasava/Bitlinks/issues)
- 💡 **Feature requests:** [GitHub Issues](https://github.com/ChiragVasava/Bitlinks/issues)
- 📧 **Contact:** v.chira.007@gmail.com

## ⭐ Show Your Support

If you found this project helpful, please consider giving it a star on GitHub! It helps others discover the project and motivates continued development.

---

<div align="center">

**Built with ❤️ by [Chirag Vasava](https://github.com/ChiragVasava)**

[![GitHub](https://img.shields.io/badge/GitHub-ChiragVasava-181717?style=flat-square&logo=github)](https://github.com/ChiragVasava)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/chirag-vasava-050784273/)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat-square&logo=twitter)](https://x.com/ChIRaGV0007)

</div>