"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import TechSkillsSection from "./components/TechSkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { useTheme } from "./contexts/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();
  
  return (
    <main className={`flex min-h-screen flex-col transition-all duration-700 ${
      isDarkMode 
        ? 'bg-[#121212]' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden'
    }`}>
      {/* Light mode decorative elements */}
      {!isDarkMode && (
        <>
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-indigo-100/25 to-blue-100/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </>
      )}
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <TechSkillsSection />
        <ProjectsSection />
        {/* ComfyUI Video Section */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4">فيديو مولد بالذكاء الاصطناعي</h2>
          <video controls width="600" className="rounded-lg shadow-lg mx-auto">
            <source src="/videos/output.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
          Voit ladata videon painamalla alla olevaa linkkiä:
          <a href="/videos/output.mp4" download className="text-blue-500 hover:underline ml-2">
            Download Video
          </a>
          </p>
        </section>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

