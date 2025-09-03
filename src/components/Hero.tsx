import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-soft-white to-soft-mint/30 pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-mint/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-tech-green" />
              <span className="text-tech-green font-semibold">Generative AI Innovation Experts</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
              Build Gen AI Solutions
              <span className="block text-tech-green">with Expertise</span>
            </h1>
            
            <p className="text-xl text-cool-gray mb-8 leading-relaxed">
              Accelerate your generative AI strategy and product development with our team of experts. 
              From consulting to custom models, we deliver innovative solutions that drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToServices}
                className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-charcoal">50+</div>
                <div className="text-cool-gray">Gen AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-charcoal">95%</div>
                <div className="text-cool-gray">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-charcoal">15+</div>
                <div className="text-cool-gray">Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gen AI Development Team"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold text-deep-charcoal">Gen AI Models</div>
                    <div className="text-cool-gray text-sm">Custom Training</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <div className="font-semibold text-deep-charcoal">Expert Solutions</div>
                    <div className="text-cool-gray text-sm">Proven Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;