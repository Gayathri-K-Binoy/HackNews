import React, { useState } from "react";
import "./HackathonX.css";

export const HackathonX = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getHeaderHeight = () => {
    const header = document.querySelector('header') || document.querySelector('.header') || document.querySelector('nav');
    if (header) {
      return header.offsetHeight;
    }
    return window.innerWidth <= 768 ? 80 : 130;
  };

  const handleMobileNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = getHeaderHeight();
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight + 65;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const handleDesktopNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = getHeaderHeight();
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight + 78;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hackathon-container w-full">
      <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <nav className="bg-white/90 backdrop-blur-md border-b border-primary-100 sticky top-0 z-50 transition-all duration-300">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">code</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  HackathonX
                </h1>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  onClick={(e) => handleDesktopNavClick(e, 'home')}
                  className="hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#register"
                  onClick={(e) => handleDesktopNavClick(e, 'register')}
                  className="hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Register
                </a>
                <a
                  href="#guidelines"
                  onClick={(e) => handleDesktopNavClick(e, 'guidelines')}
                  className="hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Guidelines
                </a>
                <a
                  href="#timeline"
                  onClick={(e) => handleDesktopNavClick(e, 'timeline')}
                  className="hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Timeline
                </a>
                <a
                  href="#resources"
                  onClick={(e) => handleDesktopNavClick(e, 'resources')}
                  className="hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Resources
                </a>
                <a
                  href="#location"
                  onClick={(e) => handleDesktopNavClick(e, 'location')}
                  className="hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Location
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleDesktopNavClick(e, 'contact')}
                  className="hover:text-primary-600 transition-colors duration-300 font-medium cursor-pointer"
                >
                  Contact
                </a>
              </div>
              {/* Mobile Menu Toggle Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                onClick={toggleMobileMenu}
                aria-expanded={mobileMenuOpen ? "true" : "false"}
                aria-label="Toggle navigation menu"
              >
                <span className="material-symbols-outlined">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
              <button
                onClick={(e) => handleMobileNavClick(e, 'home')}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={(e) => handleMobileNavClick(e, 'register')}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
              >
                Register
              </button>
              <button
                onClick={(e) => handleMobileNavClick(e, 'guidelines')}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
              >
                Guidelines
              </button>
              <button
                onClick={(e) => handleMobileNavClick(e, 'timeline')}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
              >
                Timeline
              </button>
              <button
                onClick={(e) => handleMobileNavClick(e, 'resources')}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
              >
                Resources
              </button>
              <button
                onClick={(e) => handleMobileNavClick(e, 'location')}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
              >
                Location
              </button>
              <button
                onClick={(e) => handleMobileNavClick(e, 'contact')}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>

        <section id="home" className="relative px-8 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-3xl"></div>
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Build the
                  <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                    Future
                  </span>
                  Together
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join the most innovative hackathon of 2024. 48 hours of coding, creativity, and
                  collaboration with the brightest minds in tech.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#register"
                  onClick={(e) => handleDesktopNavClick(e, 'register')}
                  className="group relative bg-gradient-to-r from-primary-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Register Now</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="material-symbols-outlined text-green-500">schedule</span>
                  <span>48 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-symbols-outlined text-blue-500">groups</span>
                  <span>500+ Participants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-symbols-outlined text-yellow-500">emoji_events</span>
                  <span>$50K Prizes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://th.bing.com/th/id/OIP.q5QB9V3vZ3mi5O2RF0E7pwHaEK?r=0&rs=1&pid=ImgDetMain"
                alt="hackathon coding scene"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="register" className="px-8 py-20">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold mb-3">Choose Your Registration</h2>
            <p className="text-xl text-gray-600">Select the registration type that applies to you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-primary-100 hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">verified</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">IEEE Member</h3>
                  <p className="text-gray-600 mb-4">Special benefits for IEEE community members</p>
                  <div className="text-3xl font-bold text-primary-600 mb-4">$25</div>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>Priority registration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>IEEE networking sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>Exclusive workshops</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>Certificate of participation</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-primary-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Register as IEEE Member
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">person</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Non-IEEE Member</h3>
                  <p className="text-gray-600 mb-4">Open registration for all participants</p>
                  <div className="text-3xl font-bold text-gray-700 mb-4">$40</div>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>Full hackathon access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>Mentorship sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>Meals and refreshments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    <span>Swag bag included</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Register as Non-Member
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="guidelines" className="px-8 py-20 bg-gradient-to-r from-primary-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-3">
              <h2 className="text-4xl font-bold mb-4 ">Hackathon Guidelines</h2>
              <p className="text-xl text-gray-600  ">Everything you need to know to participate</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary-600">group</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Team Formation</h3>
                <p className="text-gray-600">
                  Teams of 2-4 members. You can form teams before or during the event. Solo
                  participation is also welcome.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-blue-600">code</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Technology Stack</h3>
                <p className="text-gray-600">
                  Use any programming language, framework, or technology. Open source tools and APIs
                  are encouraged.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-green-600">schedule</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Time Limit</h3>
                <p className="text-gray-600">
                  48 hours to build your project from scratch. Pre-existing code is not allowed.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-yellow-600">present_to_all</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Presentation</h3>
                <p className="text-gray-600">
                  5-minute pitch to judges. Demo your working prototype and explain your solution.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-purple-600">gavel</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Judging Criteria</h3>
                <p className="text-gray-600">
                  Innovation, technical implementation, design, and potential impact will be
                  evaluated.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-red-600">emoji_events</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Prizes</h3>
                <p className="text-gray-600">
                  $25K first place, $15K second place, $10K third place, plus category-specific
                  awards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Event Timeline</h2>
              <p className="text-xl text-gray-600">Your 48-hour journey to innovation</p>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>
              <div className="space-y-12">
                <div className="relative flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white">flag</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Opening Ceremony</h3>
                      <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                        Day 1 - 9:00 AM
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Welcome address, theme announcement, and team formation session
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white">rocket_launch</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Hacking Begins</h3>
                      <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Day 1 - 11:00 AM
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Start building your innovative solutions. Mentors available for guidance
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white">school</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Workshop Sessions</h3>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                        Day 1 - 7:00 PM
                      </span>
                    </div>
                    <p className="text-gray-600">
                      AI/ML workshops, API integrations, and technical skill sessions
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white">psychology</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Mentorship Hours</h3>
                      <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        Day 2 - 10:00 AM
                      </span>
                    </div>
                    <p className="text-gray-600">
                      One-on-one sessions with industry experts and technical mentors
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white">stop</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Submission Deadline</h3>
                      <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">
                        Day 3 - 11:00 AM
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Final code submission and project documentation upload
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white">emoji_events</span>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Demo & Awards</h3>
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        Day 3 - 2:00 PM
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Project presentations, judging, and award ceremony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="px-8 py-20 bg-gradient-to-r from-slate-50 to-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Resources & Links</h2>
              <p className="text-xl text-gray-600">Everything you need to succeed in the hackathon</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-2xl">smart_toy</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Tutorials</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-primary-600">
                        play_circle
                      </span>
                      <span className="font-medium">Machine Learning Basics</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-primary-600">
                        play_circle
                      </span>
                      <span className="font-medium">Deep Learning with TensorFlow</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-primary-600">
                        play_circle
                      </span>
                      <span className="font-medium">OpenAI API Integration</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-2xl">public</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Useful Websites</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-green-600">link</span>
                      <span className="font-medium">Kaggle Datasets</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-green-600">link</span>
                      <span className="font-medium">GitHub Student Pack</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-green-600">link</span>
                      <span className="font-medium">Free API Collections</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-2xl">menu_book</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Documentation</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-purple-600">
                        description
                      </span>
                      <span className="font-medium">API Documentation</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-purple-600">
                        description
                      </span>
                      <span className="font-medium">Submission Guidelines</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-purple-600">
                        description
                      </span>
                      <span className="font-medium">Code of Conduct</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="px-8 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold mb-4">Event Location</h2>
              <p className="text-xl text-gray-600">Find us at the innovation hub</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-600">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Tech Innovation Center</h3>
                      <p className="text-gray-600">
                        Model Engineering College, Thrikkakara
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-600">
                        directions_car
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Parking</h3>
                      <p className="text-gray-600">
                        Free parking available. Additional street parking nearby.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-600">train</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Public Transport</h3>
                      <p className="text-gray-600">Metro Station: Innovation Hub (5 min walk)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative z-10 w-full h-96 bg-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6754989254155!2d76.32737860581584!3d10.027348617680534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006491601%3A0xcf23e14245d4694d!2sGovt%20Model%20Engineering%20College!5e0!3m2!1sen!2sin!4v1748875628409!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Event Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-8 py-20 bg-gradient-to-r from-primary-500 to-blue-600">
          <div className="max-w-4xl mx-auto">
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl opacity-90">Have questions? We're here to help!</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-600">mail</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600">contact@hackathonx.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-600">call</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-600">schedule</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 9AM - 5PM</p>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}