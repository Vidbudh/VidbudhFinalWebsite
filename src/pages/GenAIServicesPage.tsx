import React from 'react';
import { 
  ArrowLeft, 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Clock, 
  DollarSign,
  BarChart3,
  Lightbulb,
  Shield,
  Zap,
  MessageCircle,
  Calendar,
  FileText,
  Award,
  Code,
  Rocket,
  Settings,
  Sparkles,
  Lock,
  Eye,
  Scale,
  Activity,
  Cpu,
  Layers,
  GitBranch,
  Workflow,
  Database,
  Bot,
  Wand2,
  Briefcase,
  FileCode,
  TestTube,
  BookOpen,
  Mail,
  PieChart,
  Headphones,
  ShoppingCart,
  Search,
  Palette,
  Video,
  Languages,
  Building,
  Stethoscope,
  TrendingDown,
  Factory,
  Wrench,
  FileText as FileIcon,
  MessageSquare,
  Megaphone,
  ClipboardList,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Play,
  Star,
  Globe,
  Newspaper,
  Timer,
  Gauge,
  FlaskConical,
  Microscope,
  LineChart,
  Cog,
  AlertTriangle,
  ThumbsUp,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GenAIServicesPage = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Brain,
      title: "Gen AI Strategy",
      description: "Define your generative AI roadmap and identify high-impact use cases that align with your business objectives.",
      features: ["Strategic Planning", "Use Case Identification", "ROI Analysis", "Technology Roadmap"],
      link: "/ai-strategy",
      timeline: "4-6 weeks",
      complexity: "Medium"
    },
    {
      icon: Rocket,
      title: "Gen AI Proof of Concept",
      description: "Validate your generative AI ideas with rapid prototyping and feasibility testing before full implementation.",
      features: ["Rapid Prototyping", "Feasibility Analysis", "Risk Assessment", "Success Metrics"],
      link: "/gen-ai-poc",
      timeline: "2-5 weeks",
      complexity: "Medium"
    },
    {
      icon: Settings,
      title: "AI Implementations",
      description: "Full-scale AI solution development and deployment with enterprise-grade architecture.",
      features: ["Custom Development", "System Integration", "Scalable Architecture", "Production Deployment"],
      link: "/gen-ai-implementation",
      timeline: "8-24 weeks",
      complexity: "High"
    },
    {
      icon: Search,
      title: "Gen AI Audit",
      description: "Comprehensive evaluation of your existing AI systems, processes, and performance optimization.",
      features: ["Performance Review", "Security Assessment", "Compliance Check", "Optimization Recommendations"],
      link: "/gen-ai-audit",
      timeline: "2-4 weeks",
      complexity: "Medium"
    },
    {
      icon: GraduationCap,
      title: "Gen AI Workshops",
      description: "Hands-on training programs to upskill your team in generative AI technologies and best practices.",
      features: ["Team Training", "Hands-on Labs", "Best Practices", "Certification Programs"],
      link: "/ai-workshops",
      timeline: "1-2 weeks",
      complexity: "Low"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We start by understanding your business objectives, current AI maturity, and specific challenges.",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive AI strategy tailored to your business needs and market opportunities.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Proof of Concept",
      description: "Validate key concepts with rapid prototyping and feasibility testing.",
      duration: "2-5 weeks"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Full-scale development and deployment of your AI solutions with ongoing support.",
      duration: "8-24 weeks"
    },
    {
      step: "05",
      title: "Optimization & Growth",
      description: "Continuous improvement, monitoring, and scaling of your AI systems.",
      duration: "Ongoing"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "AI initiatives perfectly aligned with your business objectives and growth strategy."
    },
    {
      icon: Zap,
      title: "Rapid Time-to-Value",
      description: "Accelerated implementation with proven frameworks and best practices."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built-in security, compliance, and governance for enterprise-grade deployments."
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Clear metrics and KPIs to track success and demonstrate business value."
    }
  ];

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
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">Comprehensive AI Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                Generative AI Services
                <span className="block text-tech-green">End-to-End Solutions</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                From strategic planning to full-scale implementation, we provide comprehensive 
                generative AI solutions that transform your business and deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Get Started</span>
                </Link>
                <button 
                  onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
                >
                  Explore Services
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gen AI Development Team"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">AI Innovation</div>
                      <div className="text-cool-gray text-sm">Expert Solutions</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-highlight rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Proven Results</div>
                      <div className="text-cool-gray text-sm">50+ Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Why Choose Our Gen AI Services?
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              We deliver comprehensive AI solutions that are strategically aligned, 
              technically sound, and designed for long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-tech-green" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {benefit.title}
                </h3>
                <p className="text-cool-gray">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our Gen AI Services
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Comprehensive generative AI solutions covering every aspect of your AI journey, 
              from initial strategy to full-scale implementation and ongoing optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-soft-mint rounded-xl flex items-center justify-center mb-4 group-hover:bg-tech-green transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-tech-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-2xl font-bold text-deep-charcoal font-inter">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-cool-gray mb-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.timeline}</span>
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      service.complexity === 'High' ? 'bg-red-100 text-red-600' :
                      service.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {service.complexity}
                    </span>
                  </div>
                  <p className="text-cool-gray mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                      <span className="text-deep-charcoal font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-tech-green text-white px-6 py-3 rounded-lg hover:bg-vibrant-green transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our Gen AI Development Process
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              A systematic approach to delivering successful AI solutions, from initial 
              discovery to ongoing optimization and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="font-bold text-deep-charcoal mb-2">{step.title}</h4>
                <p className="text-cool-gray text-sm mb-2">{step.description}</p>
                <div className="text-tech-green text-xs font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-tech-green to-vibrant-green text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 font-inter">
              Proven Track Record
            </h2>
            <p className="text-green-100 text-xl max-w-3xl mx-auto">
              Our expertise and results speak for themselves across industries and use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Gen AI Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-green-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-green-100">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-soft-mint/30 to-soft-white p-8 lg:p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Ready to Transform Your Business with Gen AI?
            </h2>
            <p className="text-xl text-cool-gray mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive Gen AI services can help you achieve 
              your business objectives and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </Link>
              <button
                onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in your Gen AI services. I\'d like to discuss my project requirements.', '_blank')}
                className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenAIServicesPage;