// import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import ProjectsGrid from './components/ProjectsGrid';
import CodingProfiles from './components/CodingProfiles';
// import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import DailyCodingChallenge from './components/DailyCodingChallenge';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-[0.03] pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-8">
          <Navbar />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Left Column - Profile Card (Sticky) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <ProfileCard />
              </div>
            </div>
            
            {/* Right Column - Main Content (Scrollable) */}
            <div className="lg:col-span-8 space-y-8">
              <ProjectsGrid />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <CodingProfiles />
                <DailyCodingChallenge />
              </div>
              
              {/* <Timeline/> */}
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Certifications />
                <Testimonials />
              </div>
            </div>
            
            {/* Full Width Contact Section */}
            <div className="sm:col-span-12">
              {/* <ContactSection /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;