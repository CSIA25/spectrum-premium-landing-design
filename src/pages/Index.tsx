
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dumbbell, Heart, Calendar, Play, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-jet-black text-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-jet-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bebas text-white">FIT SPECTRUM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-gold transition-colors">Home</a>
              <a href="#equipment" className="text-white hover:text-gold transition-colors">Equipment</a>
              <a href="#book" className="text-white hover:text-gold transition-colors">Book</a>
              <a href="#contact" className="text-white hover:text-gold transition-colors">Contact</a>
              <Button className="bg-gold hover:bg-bright-gold text-black font-semibold">
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Circle */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-br from-gold to-bright-gold rounded-full opacity-20 translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="container mx-auto px-6 pt-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bebas leading-none mb-6">
                COMMIT<br />
                <span className="text-gold">TO PREMIUM</span><br />
                PERFORMANCE
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Book and experience high-end fitness equipment with Fit Spectrum. Elevate your training with premium gear designed for elite performance.
              </p>
              <Button size="lg" className="bg-gold hover:bg-bright-gold text-black font-semibold text-lg px-8 py-4">
                Explore Equipment
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Dumbbell className="h-24 w-24 text-gold mx-auto mb-4" />
                  <p className="text-gray-400">Premium Equipment Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bebas text-center mb-16">WHAT'S IN FIT SPECTRUM?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-jet-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors">
                <Dumbbell className="h-10 w-10 text-gold group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bebas mb-4">STRENGTH EQUIPMENT</h3>
              <p className="text-gray-400">Premium weights, machines, and functional training tools</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-jet-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors">
                <Heart className="h-10 w-10 text-gold group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bebas mb-4">RECOVERY TOOLS</h3>
              <p className="text-gray-400">Advanced recovery and wellness equipment for optimal performance</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-jet-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors">
                <Calendar className="h-10 w-10 text-gold group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bebas mb-4">SMART BOOKING</h3>
              <p className="text-gray-400">Seamless scheduling and personalized training sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-20 bg-jet-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-16 w-16 text-gold" />
                </div>
                <p className="text-gray-400">Elite Training Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bebas mb-6">
                Challenge yourself with<br />
                <span className="text-gold">Elite Equipment</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get recommended equipment and training programs that adapt and evolve based on your performance. 
                Schedule trial sessions focused on your fitness goals and experience the difference premium makes.
              </p>
              <Button size="lg" className="bg-gold hover:bg-bright-gold text-black font-semibold text-lg px-8 py-4">
                Book a Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center">
              <button className="bg-gold hover:bg-bright-gold text-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors">
                <Play className="h-8 w-8 ml-1" />
              </button>
              <h3 className="text-3xl font-bebas text-gold">Inside Fit Spectrum Studios</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-jet-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bebas mb-6">JOIN OUR FITNESS ELITE CLUB</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new equipment, training tips, and member-only events
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
              required
            />
            <Button type="submit" className="bg-gold hover:bg-bright-gold text-black font-semibold px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-6 w-6 text-gold" />
                <span className="text-xl font-bebas">FIT SPECTRUM</span>
              </div>
              <p className="text-gray-400">
                Premium fitness equipment and elite training experiences for serious athletes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Equipment</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Book</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold transition-colors">Personal Training</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Equipment Rental</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Recovery Sessions</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Nutrition Coaching</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fit Spectrum. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
