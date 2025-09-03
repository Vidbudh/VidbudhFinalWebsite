import React from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  Target,
  CheckCircle
} from 'lucide-react';

const WhyUs = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reasons = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "5+ years of generative AI experience with proven track record across industries."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "PhD-level data scientists and ML engineers dedicated to your success."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Rapid prototyping and deployment with agile development methodology."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full compliance and data protection."
    },
    {
      icon: Zap,
      title: "Cutting-edge Tech",
      description: "Latest generative AI frameworks and tools for maximum performance and scalability."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable ROI and business value."
    }
  ];

  const achievements = [
    { number: "50+", label: "Successful Projects", color: "text-tech-green" },
    { number: "95%", label: "Client Satisfaction", color: "text-gold-highlight" },
    { number: "40%", label: "Average ROI Increase", color: "text-tech-green" },
    { number: "15+", label: "Happy Customers", color: "text-gold-highlight" }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter">
            Why Choose Vidbudh Gen AI Studio?
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver 
            generative AI solutions that drive real results for your organization.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gen AI Team Collaboration"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border border-light-gray">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-deep-charcoal">Expert Team</div>
                    <div className="text-cool-gray">15+ Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Reasons */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal mb-2 font-inter">
                      {reason.title}
                    </h3>
                    <p className="text-cool-gray">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`text-4xl font-bold ${achievement.color} mb-2 font-inter`}>
                {achievement.number}
              </div>
              <div className="text-cool-gray font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-light-gray">
            <h3 className="text-3xl font-bold text-deep-charcoal mb-4 font-inter">
              Ready to Transform Your Business with Gen AI?
            </h3>
            <p className="text-xl text-cool-gray mb-8 max-w-2xl mx-auto">
              Join 15+ companies that have already accelerated their growth with our generative AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <span>Start Your Gen AI Journey</span>
                <CheckCircle className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;