'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, Trophy, Heart, Share2, Users, Clock, Star, Gift, Phone, Zap } from 'lucide-react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gcx-darker relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 arcade-grid"></div>
      <div className="scan-line"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          {/* GCX Logo and Branding */}
          <div className="mb-6 animate-float relative z-10">
            <div className="flex justify-center mb-2">
              <Image 
                src="/images/GCX-logo.png" 
                alt="GCX 2026 Orlando Florida"
                width={700}
                height={350}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* St. Jude Branding */}
          <div className="flex items-center justify-center mb-6 relative z-10">
            <Image 
              src="/images/St.-Jude-logo.png" 
              alt="St. Jude Children's Research Hospital"
              width={200}
              height={80}
              className="max-w-full h-auto"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Charity</span>{' '}
            <span className="text-neon-blue neon-text">Challenge</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Play the free challenge for your chance to win a trip to{' '}
            <span className="text-neon-cyan font-bold">GCX 2026!</span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-neon-red text-white px-10 py-3 rounded-xl font-bold text-lg neon-border hover:bg-opacity-80 transition-all duration-300 animate-glow flex items-center hover:scale-105 transform">
              <Play className="mr-2" size={20} />
              Play Now!
            </button>
            <button className="bg-transparent border-2 border-neon-yellow text-neon-yellow px-10 py-3 rounded-xl font-bold text-lg hover:bg-neon-yellow hover:text-black transition-all duration-300 flex items-center hover:scale-105 transform">
              <Heart className="mr-2" size={20} />
              Donate
            </button>
            <button className="bg-transparent border-2 border-neon-cyan text-neon-cyan px-10 py-3 rounded-xl font-bold text-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 hover:scale-105 transform">
              Learn More
            </button>
          </div>

          {/* Donation Message */}
          <div className="bg-neon-pink bg-opacity-10 border border-neon-pink rounded-2xl p-4 max-w-3xl mx-auto animate-pulse">
            <p className="text-neon-pink text-base animate-pulse-color">
              Once you finish, please consider donating to St. Jude and helping children in need 
            </p>
          </div>
        </div>
      </section>

      {/* Game Preview Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-neon-purple/5 to-neon-pink/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeInUp">
            <span className="gradient-text">Game Preview</span>
          </h2>
          <div className="flex justify-center mb-8 animate-float">
            <Image 
              src="/images/iphone-mockup.png" 
              alt="St. Jude GCX Challenge Game Preview"
              width={300}
              height={600}
              className="max-w-full h-auto"
            />
          </div>
          <p className="text-lg text-gray-300 animate-fadeInUp">
            Experience the interactive trivia challenge that combines gaming fun with charitable giving!
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-cyan/10 to-neon-yellow/10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fadeInUp">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-8 bg-gray-900 bg-opacity-50 rounded-2xl neon-border border-neon-red hover:scale-105 transition-all duration-300 animate-slideInLeft">
              <div className="bg-neon-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <Play className="text-neon-red mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-neon-red mb-4">Play the Game</h3>
              <p className="text-gray-300">
                Quick, mobile-friendly Thropic challenge with questions about gaming and St. Jude
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-8 bg-gray-900 bg-opacity-50 rounded-2xl neon-border border-neon-yellow hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="bg-neon-yellow text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <Share2 className="text-neon-yellow mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-neon-yellow mb-4">Share & Donate</h3>
              <p className="text-gray-300">
                Climb the leaderboard, unlock badges, and raise money for St. Jude
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-8 bg-gray-900 bg-opacity-50 rounded-2xl neon-border border-neon-cyan hover:scale-105 transition-all duration-300 animate-slideInRight">
              <div className="bg-neon-cyan text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <Trophy className="text-neon-cyan mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">Win Big</h3>
              <p className="text-gray-300">
                Chance to win a GCX 2026 trip (flights, hotel, VIP passes)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* St. Jude Highlight Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon-pink animate-fadeInUp">
                Finding cures. Saving children.
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                Give hope to sick children. Together, we can conquer childhood cancer.
              </p>
              <div className="bg-black bg-opacity-50 p-6 rounded-xl neon-border border-neon-pink animate-fadeInUp hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                <p className="text-2xl font-bold text-neon-pink mb-2 animate-pulse-color">
                  "Families never receive a bill from St. Jude"
                </p>
                <p className="text-gray-300">
                  St. Jude covers all treatment costs, so families can focus on what matters most - their child.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slideInRight">
              <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center neon-border border-neon-cyan hover:scale-110 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                <div className="text-3xl font-bold text-neon-cyan mb-2">80%</div>
                <div className="text-sm text-gray-300">Childhood cancer survival rate</div>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center neon-border border-neon-green hover:scale-110 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold text-neon-green mb-2">$0</div>
                <div className="text-sm text-gray-300">Cost to families</div>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center neon-border border-neon-yellow hover:scale-110 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl font-bold text-neon-yellow mb-2">1000+</div>
                <div className="text-sm text-gray-300">Lives saved annually</div>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center neon-border border-neon-purple hover:scale-110 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-bold text-neon-purple mb-2">60+</div>
                <div className="text-sm text-gray-300">Years of research</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-red/10 to-neon-cyan/10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fadeInUp">
            Amazing Prizes
          </h2>

          {/* Countdown Timer */}
          <div className="text-center mb-16 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-neon-cyan mb-8 animate-pulse-color">Drawing Date Countdown</h3>
            <div className="flex justify-center space-x-4 md:space-x-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={item.label} className="text-center">
                  <div className="bg-black bg-opacity-50 p-4 rounded-xl neon-border border-neon-cyan w-20 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300 animate-glow">
                    <span className="text-2xl font-bold text-neon-cyan">{item.value}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Prize Breakdown */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1st Place */}
            <div className="text-center p-8 bg-gradient-to-b from-yellow-500/20 to-yellow-600/20 rounded-2xl neon-border border-yellow-500 hover:scale-105 transition-all duration-300 animate-slideInLeft">
              <Trophy className="text-yellow-500 mx-auto mb-4" size={64} />
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">1st Place</h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-white">
                  <Star className="text-yellow-500 mr-2" size={16} />
                  GCX 2026 VIP Passes (2)
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-yellow-500 mr-2" size={16} />
                  Round-trip flights
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-yellow-500 mr-2" size={16} />
                  4-night hotel stay
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-yellow-500 mr-2" size={16} />
                  Meet & greet with creators
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-yellow-500 mr-2" size={16} />
                  $1,000 spending money
                </div>
              </div>
            </div>

            {/* 2nd Place */}
            <div className="text-center p-8 bg-gradient-to-b from-gray-400/20 to-gray-500/20 rounded-2xl neon-border border-gray-400 hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <Gift className="text-gray-400 mx-auto mb-4" size={64} />
              <h3 className="text-3xl font-bold text-gray-400 mb-4">2nd Place</h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-white">
                  <Star className="text-gray-400 mr-2" size={16} />
                  GCX 2026 Passes (2)
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-gray-400 mr-2" size={16} />
                  Round-trip flights
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-gray-400 mr-2" size={16} />
                  3-night hotel stay
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-gray-400 mr-2" size={16} />
                  $500 spending money
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="text-center p-8 bg-gradient-to-b from-amber-600/20 to-amber-700/20 rounded-2xl neon-border border-amber-600 hover:scale-105 transition-all duration-300 animate-slideInRight">
              <Zap className="text-amber-600 mx-auto mb-4" size={64} />
              <h3 className="text-3xl font-bold text-amber-600 mb-4">3rd Place</h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-white">
                  <Star className="text-amber-600 mr-2" size={16} />
                  GCX 2026 Passes (2)
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-amber-600 mr-2" size={16} />
                  Round-trip flights
                </div>
                <div className="flex items-center text-white">
                  <Star className="text-amber-600 mr-2" size={16} />
                  2-night hotel stay
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Email Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-yellow/10 to-neon-pink/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text animate-fadeInUp">
            Challenge Your Friends
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Share the challenge and compete on the leaderboard!
          </p>

          {/* Email Signup */}
          <div className="bg-black bg-opacity-50 p-8 rounded-2xl neon-border border-neon-blue mb-12 hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-neon-blue mb-6 animate-pulse-color">
              Stay Updated
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-neon-blue focus:outline-none transition-all duration-300"
              />
              <button className="bg-neon-blue text-black px-8 py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all duration-300 hover:scale-105 transform animate-glow">
                Subscribe
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-400">
                I agree to the <span className="text-neon-blue underline">terms & conditions</span> of the game and services
              </span>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="flex justify-center space-x-6 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110 transform">
              <Share2 size={24} />
            </button>
            <button className="bg-purple-600 p-4 rounded-full hover:bg-purple-500 transition-all duration-300 hover:scale-110 transform">
              <Users size={24} />
            </button>
            <button className="bg-pink-600 p-4 rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110 transform">
              <Heart size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 bg-gradient-to-r from-neon-yellow/5 to-neon-red/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 animate-fadeInUp">
            <Heart className="text-neon-pink mr-3" size={32} />
            <span className="text-2xl font-bold gradient-text animate-pulse-color">
              St. Jude&apos;s GCX Challenge
            </span>
          </div>
          <p className="text-gray-400 mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Together, we can conquer childhood cancer and give hope to families in need.
          </p>
          <p className="text-sm text-gray-500 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            © 2024 St. Jude Children&apos;s Research Hospital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 