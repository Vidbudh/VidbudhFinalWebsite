import React from 'react';
import { 
  ArrowLeft, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Clock, 
  DollarSign,
  BarChart3,
  Lightbulb,
  Zap,
  MessageCircle,
  Calendar,
  Award,
  Rocket,
  UserCheck,
  Building,
  Globe,
  Brain,
  Settings,
  Eye,
  Scale,
  Activity,
  Headphones,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CPOServicesPage = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-soft-white font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-soft-white to-soft-mint/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-green/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-mint/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-tech-green hover:text-vibrant-green transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">Product Leadership Excellence</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                CPO Services
                <span className="block text-tech-green">Drive Product Excellence</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                Comprehensive Chief Product Officer services to drive product excellence, 
                strategic growth, and market leadership for your organization with proven 
                expertise and measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('cpo-services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Explore Services</span>
                </button>
                <Link
                  to="/contact"
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="CPO Leadership Team"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Product Leadership</div>
                      <div className="text-cool-gray text-sm">Expert Guidance</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-highlight rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">15+ Years</div>
                      <div className="text-cool-gray text-sm">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CPO Services Section */}
      <section id="cpo-services" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter">
              CPO Services
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Comprehensive Chief Product Officer services to drive product excellence, 
              strategic growth, and market leadership for your organization.
            </p>
          </div>

          {/* Two Main Service Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Embedded CPO Card */}
            <div id="embedded-cpo" className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-tech-green rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-deep-charcoal font-inter">
                    Embedded CPO
                  </h3>
                  <p className="text-tech-green font-semibold">Full-Time Leadership</p>
                </div>
              </div>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                Full-time, dedicated Chief Product Officer integrated into your team, 
                providing hands-on leadership and strategic direction for maximum impact.
              </p>
              
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold text-deep-charcoal mb-4">What's Included:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-deep-charcoal">Full-time dedicated CPO (40+ hours/week)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-deep-charcoal">Direct team leadership and mentoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-deep-charcoal">Strategic planning and execution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-deep-charcoal">Product roadmap development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-deep-charcoal">Market analysis and competitive intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-green" />
                    <span className="text-deep-charcoal">User experience optimization</span>
                  </div>
                </div>
              </div>

              <div className="bg-soft-mint