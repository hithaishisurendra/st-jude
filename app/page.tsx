'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Play, Trophy, Heart, Share2, Users, Clock, Star, Gift, Phone, Zap, Copy, MessageCircle, Mail, Instagram, Facebook, MessageSquare } from 'lucide-react'

// Custom X (Twitter) Logo Component
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [currentUrl, setCurrentUrl] = useState('https://play.thropicgames.com/challenge/gcx-2025/ZxVRDO#Landing%20Page')

  // Set current URL on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  // Countdown timer to July 25th CDT
  useEffect(() => {
    const calculateTimeLeft = () => {
      // July 25th, 2025 at midnight CDT (UTC-5)
      const targetDate = new Date('2025-07-25T00:00:00-05:00')
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    }

    // Update immediately
    setTimeLeft(calculateTimeLeft())

    // Then update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
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
            <a 
              href="https://play.thropicgames.com/challenge/gcx-2025/ZxVRDO#Landing%20Page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-red text-white px-10 py-3 rounded-xl font-bold text-lg neon-border hover:bg-opacity-80 transition-all duration-300 animate-glow flex items-center hover:scale-105 transform no-underline"
            >
              <Play className="mr-2" size={20} />
              Play Now!
            </a>
            <a 
              href="https://play.thropicgames.com/challenge/gcx-2025-donation/H4dmuq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-neon-yellow text-neon-yellow px-10 py-3 rounded-xl font-bold text-lg hover:bg-neon-yellow hover:text-black transition-all duration-300 flex items-center hover:scale-105 transform no-underline"
            >
              <Heart className="mr-2" size={20} />
              Donate
            </a>
            <a 
              href="#learn-more"
              className="bg-transparent border-2 border-neon-cyan text-neon-cyan px-10 py-3 rounded-xl font-bold text-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 hover:scale-105 transform no-underline"
            >
              Learn More
            </a>
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
            <a 
              href="https://play.thropicgames.com/challenge/gcx-2025/ZxVRDO#Landing%20Page"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image 
                src="/images/iphone-mockup.png" 
                alt="St. Jude GCX Challenge Game Preview - Click to Play"
                width={300}
                height={600}
                className="max-w-full h-auto hover:opacity-80 transition-opacity duration-300"
              />
            </a>
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
      <section id="learn-more" className="py-20 px-4 bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10 relative">
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
          <div className="flex justify-center">
            {/* Grand Prize */}
            <div className="text-center p-12 bg-gradient-to-b from-yellow-500/20 to-yellow-600/20 rounded-2xl neon-border border-yellow-500 hover:scale-105 transition-all duration-300 animate-fadeInUp max-w-md">
              <Trophy className="text-yellow-500 mx-auto mb-6" size={80} />
              <h3 className="text-4xl font-bold text-yellow-500 mb-6">Grand Prize</h3>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center text-white text-xl">
                  <Star className="text-yellow-500 mr-3" size={20} />
                  GCX Tickets
                </div>
                <div className="flex items-center justify-center text-white text-xl">
                  <Star className="text-yellow-500 mr-3" size={20} />
                  VIP Experience
                </div>
                <div className="flex items-center justify-center text-white text-xl">
                  <Star className="text-yellow-500 mr-3" size={20} />
                  All Expenses Paid
                </div>
              </div>
              <div className="mt-8 p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <p className="text-yellow-500 font-bold text-lg">
                  Ultimate GCX Experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Email Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-yellow/10 to-neon-pink/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-8 gradient-text animate-fadeInUp">
            🤝 Share the game = $10 per friend
          </h2>
          <p className="text-2xl text-neon-yellow mb-6 animate-fadeInUp font-bold" style={{animationDelay: '0.2s'}}>
            Cash or donation in your name!
          </p>
          <p className="text-xl text-gray-300 mb-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Yep, we're literally paying you to do good and look smart.
          </p>
          <p className="text-lg text-gray-400 mb-12 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            All it takes is one minute to play — that's quicker than your last online impulse buy.
          </p>

          {/* Email Signup */}
          <div className="bg-black bg-opacity-50 p-8 rounded-2xl neon-border border-neon-blue mb-12 hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
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
                I agree to the <a href="/terms" className="text-neon-blue underline">terms & conditions</a> of the game and services
              </span>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="flex justify-center space-x-4 animate-fadeInUp flex-wrap gap-4" style={{animationDelay: '1s'}}>
            <button 
              onClick={() => navigator.clipboard?.writeText(currentUrl)}
              className="bg-gray-600 hover:bg-gray-500 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Copy Link"
            >
              <Copy size={20} />
            </button>
            <a 
              href={`https://wa.me/?text=${encodeURIComponent('🎮 Play this St. Jude GCX Challenge for a chance to win GCX tickets! Help kids while gaming: ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Share on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            {/* <a 
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Share on Instagram"
              onClick={() => navigator.clipboard?.writeText('🎮 Playing this St. Jude GCX Challenge to help kids & win GCX tickets! ' + currentUrl + ' #StJude #GCX')}
            >
              <Instagram size={20} />
            </a> */}
            <a 
              href={`sms:?body=${encodeURIComponent('🎮 Play this St. Jude GCX Challenge for a chance to win GCX tickets! Help kids while gaming: ' + currentUrl)}`}
              className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Share via SMS/iMessage"
            >
              <MessageSquare size={20} />
            </a>
            <a 
              href={`mailto:?subject=${encodeURIComponent('St. Jude GCX Challenge - Win GCX Tickets!')}&body=${encodeURIComponent('Hey! Check out this cool St. Jude GCX Challenge. You can play for free, help kids with cancer, and win GCX tickets! It only takes 1 minute: ' + currentUrl)}`}
              className="bg-red-600 hover:bg-red-500 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Share via Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('🎮 Playing this St. Jude GCX Challenge to help kids & win GCX tickets! Join me: ' + currentUrl + ' #StJude #GCX #GamingForGood')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Share on X (Twitter)"
            >
              <XIcon size={20} />
            </a>
            {/* <a 
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Share on TikTok"
              onClick={() => navigator.clipboard?.writeText('🎮 Playing this St. Jude GCX Challenge to help kids & win GCX tickets! ' + currentUrl + ' #StJude #GCX')}
            >
              <Play size={20} />
            </a> */}
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 transform"
              title="Share on Facebook"
            >
              <Facebook size={20} />
            </a>
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
          <p className="text-gray-400 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Together, we can conquer childhood cancer and give hope to families in need.
          </p>

          <p className="text-sm text-gray-500 mb-2 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            © Copyright 2025. St. Jude Children&apos;s Research Hospital, a not-for-profit, section 501(c)(3).
          </p>
          <div className="text-xs text-gray-600 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            <a href="/terms" className="text-neon-blue hover:text-neon-cyan underline mr-4">Terms & Conditions</a>
            <a href="/privacy" className="text-neon-blue hover:text-neon-cyan underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
} 