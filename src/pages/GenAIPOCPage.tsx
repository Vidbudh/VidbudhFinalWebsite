import React from 'react';
import { 
  ArrowLeft, 
  Rocket, 
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
  Brain,
  Gauge,
  FlaskConical,
  Microscope,
  LineChart,
  Cog,
  AlertTriangle,
  ThumbsUp,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GenAIPOCPage = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const keyBenefits = [
    {
      icon: Target,
      title: "Risk Mitigation",
      description: "Validate your AI concept before major investment, reducing project risks and ensuring feasibility."
    },
    {
      icon: Timer,
      title: "Rapid Validation",
      description: "Get proof of concept results in 2-4 weeks, accelerating your decision-making process."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Testing",
      description: "Test multiple approaches at a fraction of full implementation cost."
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Get concrete metrics and performance data to guide your AI strategy decisions."
    }
  ];

  const pocTypes = [
    {
      icon: MessageSquare,
      title: "Conversational AI POCs",
      description: "Custom chatbots, virtual assistants, and intelligent customer service solutions",
      examples: ["Customer Support Bots", "Internal Knowledge Assistants", "Voice-Enabled Interfaces"],
      timeline: "2-3 weeks",
      complexity: "Medium"
    },
    {
      icon: FileIcon,
      title: "Document Intelligence POCs",
      description: "Automated document processing, extraction, and analysis solutions",
      examples: ["Contract Analysis", "Invoice Processing", "Legal Document Review"],
      timeline: "3-4 weeks",
      complexity: "High"
    },
    {
      icon: Palette,
      title: "Content Generation POCs",
      description: "AI-powered content creation for marketing, documentation, and creative applications",
      examples: ["Marketing Copy Generation", "Product Descriptions", "Technical Documentation"],
      timeline: "2-3 weeks",
      complexity: "Medium"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics POCs",
      description: "AI models for forecasting, trend analysis, and business intelligence",
      examples: ["Sales Forecasting", "Demand Prediction", "Risk Assessment"],
      timeline: "3-5 weeks",
      complexity: "High"
    },
    {
      icon: Search,
      title: "Intelligent Search POCs",
      description: "Advanced search and recommendation systems powered by AI",
      examples: ["Semantic Search", "Product Recommendations", "Content Discovery"],
      timeline: "2-4 weeks",
      complexity: "Medium"
    },
    {
      icon: Code,
      title: "Code Generation POCs",
      description: "AI-assisted development tools and automated code generation solutions",
      examples: ["Code Completion", "Test Generation", "Documentation Automation"],
      timeline: "3-4 weeks",
      complexity: "High"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "Deep dive into your business challenge, technical requirements, and success criteria.",
      deliverables: ["Requirements Document", "Technical Specifications", "Success Metrics Definition"],
      duration: "3-5 days"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Design the POC architecture, select appropriate AI models, and plan the implementation approach.",
      deliverables: ["Technical Architecture", "Model Selection Report", "Implementation Plan"],
      duration: "2-3 days"
    },
    {
      step: "03",
      title: "Rapid Development",
      description: "Build the POC using agile methodology with regular checkpoints and feedback loops.",
      deliverables: ["Working POC", "Progress Reports", "Interim Demonstrations"],
      duration: "1-3 weeks"
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Comprehensive testing with real data and scenarios to validate performance and accuracy.",
      deliverables: ["Test Results", "Performance Metrics", "Validation Report"],
      duration: "2-3 days"
    },
    {
      step: "05",
      title: "Results & Recommendations",
      description: "Present findings, performance analysis, and recommendations for full implementation.",
      deliverables: ["Final Report", "Demo Presentation", "Implementation Roadmap"],
      duration: "2-3 days"
    }
  ];

  const successMetrics = [
    {
      icon: Gauge,
      title: "Performance Metrics",
      description: "Accuracy, speed, and reliability measurements",
      examples: ["95% accuracy rate", "Sub-second response time", "99.9% uptime"]
    },
    {
      icon: DollarSign,
      title: "Business Impact",
      description: "ROI projections and cost-benefit analysis",
      examples: ["40% cost reduction", "3x productivity increase", "60% time savings"]
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Usability testing and user satisfaction metrics",
      examples: ["90% user satisfaction", "Intuitive interface", "Seamless integration"]
    },
    {
      icon: Shield,
      title: "Technical Feasibility",
      description: "Scalability, security, and integration assessment",
      examples: ["Enterprise-ready", "Secure by design", "API-first architecture"]
    }
  ];

  const realWorldExamples = [
    {
      industry: "Healthcare",
      challenge: "Medical record analysis and patient data extraction",
      solution: "AI-powered document processing system",
      results: "85% reduction in manual processing time, 95% accuracy in data extraction",
      timeline: "3 weeks",
      icon: Stethoscope,
      color: "bg-blue-500"
    },
    {
      industry: "Finance",
      challenge: "Automated loan application processing and risk assessment",
      solution: "ML-based risk scoring and document verification system",
      results: "70% faster application processing, 40% improvement in risk prediction accuracy",
      timeline: "4 weeks",
      icon: Building,
      color: "bg-green-500"
    },
    {
      industry: "E-commerce",
      challenge: "Personalized product recommendations and search optimization",
      solution: "AI-driven recommendation engine with semantic search",
      results: "35% increase in conversion rate, 50% improvement in search relevance",
      timeline: "3 weeks",
      icon: ShoppingCart,
      color: "bg-purple-500"
    },
    {
      industry: "Manufacturing",
      challenge: "Predictive maintenance and quality control automation",
      solution: "Computer vision and IoT-based monitoring system",
      results: "60% reduction in unplanned downtime, 45% improvement in quality detection",
      timeline: "5 weeks",
      icon: Factory,
      color: "bg-orange-500"
    }
  ];

  const faqData = [
    {
      question: "What exactly is included in a Gen AI Proof of Concept?",
      answer: "Our Gen AI POC includes a working prototype that demonstrates your AI solution's core functionality, comprehensive testing with real data, performance metrics analysis, technical documentation, and a detailed report with recommendations for full implementation. You'll get a tangible demonstration of how AI can solve your specific business challenge."
    },
    {
      question: "How long does it take to complete a POC?",
      answer: "Most POCs are completed within 2-5 weeks, depending on complexity. Simple conversational AI or content generation POCs typically take 2-3 weeks, while more complex document intelligence or predictive analytics POCs may require 3-5 weeks. We provide a detailed timeline during the initial consultation."
    },
    {
      question: "What data do you need from us for the POC?",
      answer: "The data requirements vary by use case, but typically we need representative samples of your actual data (anonymized if necessary). For document processing POCs, we need sample documents. For chatbots, we need FAQ data or conversation logs. We work with you to identify the minimum viable dataset needed for meaningful results."
    },
    {
      question: "How do you ensure our data remains secure during the POC?",
      answer: "Data security is our top priority. We use enterprise-grade security measures including encrypted data transmission, secure cloud environments, access controls, and data anonymization techniques. We can also work with synthetic or anonymized data if preferred. All team members sign NDAs and we follow strict data handling protocols."
    },
    {
      question: "What happens after the POC is completed?",
      answer: "After POC completion, you receive a comprehensive report with findings, performance metrics, and recommendations. We present the results in a detailed demo session and provide a roadmap for full implementation. You can then decide whether to proceed with full development, and we're available to support the next phase if desired."
    },
    {
      question: "Can the POC be scaled to a full production system?",
      answer: "Yes, our POCs are designed with scalability in mind. We use production-ready technologies and architectures that can be extended to full systems. The POC serves as a solid foundation for production deployment, though additional development will be needed for enterprise features like advanced security, monitoring, and integration."
    },
    {
      question: "How much does a Gen AI POC cost?",
      answer: "POC costs vary based on complexity, timeline, and specific requirements. Simple POCs start from $15,000, while complex multi-model solutions may cost $50,000+. We provide detailed quotes after understanding your specific needs during the free consultation. The POC investment is typically 10-20% of full implementation cost."
    },
    {
      question: "What if the POC doesn't meet our expectations?",
      answer: "We work closely with you throughout the POC process with regular checkpoints to ensure alignment with your expectations. If the results don't meet the agreed success criteria, we'll work with you to understand why and provide recommendations for alternative approaches. Our goal is your success, and we stand behind our work."
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
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">Proof of Concept Development</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                Gen AI Proof of Concept
                <span className="block text-tech-green">Validate Before You Invest</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                Test your generative AI ideas with rapid prototyping and validation. Our POC development 
                helps you prove feasibility, measure performance, and make informed decisions before 
                committing to full-scale implementation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Start Your POC</span>
                </Link>
                <button 
                  onClick={() => document.getElementById('poc-types')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
                >
                  Explore POC Types
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Proof of Concept Development"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <FlaskConical className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Rapid Testing</div>
                      <div className="text-cool-gray text-sm">2-5 Weeks</div>
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
                      <div className="text-cool-gray text-sm">100+ POCs</div>
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
              Why Start with a Proof of Concept?
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Reduce risk, validate assumptions, and make data-driven decisions about your AI investments 
              with our comprehensive POC development process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
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

      {/* POC Types */}
      <section id="poc-types" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Types of Gen AI POCs We Build
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              From conversational AI to document intelligence, we create POCs across all major 
              generative AI use cases to validate your specific business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pocTypes.map((poc, index) => (
              <div
                key={poc.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                    <poc.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal font-inter">
                      {poc.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-cool-gray">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{poc.timeline}</span>
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        poc.complexity === 'High' ? 'bg-red-100 text-red-600' :
                        poc.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {poc.complexity}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-cool-gray mb-6">
                  {poc.description}
                </p>
                
                <div>
                  <h4 className="font-bold text-deep-charcoal mb-3">Example Use Cases:</h4>
                  <div className="space-y-2">
                    {poc.examples.map((example) => (
                      <div key={example} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                        <span className="text-cool-gray text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Real POC Success Stories
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              See how our POCs have helped businesses across industries validate their AI concepts 
              and achieve measurable results before full implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {realWorldExamples.map((example, index) => (
              <div
                key={example.industry}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${example.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <example.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-inter">{example.industry}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-4 h-4 text-white/80" />
                        <span className="text-white/80 text-sm">{example.timeline} POC</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-deep-charcoal mb-2">Challenge:</h4>
                    <p className="text-cool-gray">{example.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-deep-charcoal mb-2">Solution:</h4>
                    <p className="text-cool-gray">{example.solution}</p>
                  </div>
                  
                  <div className="bg-soft-mint p-4 rounded-lg">
                    <h4 className="font-bold text-tech-green mb-2 flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Results:</span>
                    </h4>
                    <p className="text-deep-charcoal font-medium">{example.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our POC Process */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our POC Development Process
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              A systematic approach to building and validating your AI proof of concept, 
              from initial requirements to final recommendations.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-deep-charcoal font-inter">
                        {step.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-cool-gray">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-cool-gray mb-8">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-bold text-deep-charcoal mb-4">Key Deliverables:</h4>
                    {step.deliverables.map((deliverable) => (
                      <div key={deliverable} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-tech-green flex-shrink-0" />
                        <span className="text-cool-gray">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-in-right`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184360' : 
                        index === 1 ? '3184465' : 
                        index === 2 ? '3184418' : 
                        index === 3 ? '3183153' : '3183150'
                      }/pexels-photo-${
                        index === 0 ? '3184360' : 
                        index === 1 ? '3184465' : 
                        index === 2 ? '3184418' : 
                        index === 3 ? '3183153' : '3183150'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              How We Measure POC Success
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              We use comprehensive metrics to evaluate POC performance and provide 
              clear insights for your investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div
                key={metric.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-tech-green rounded-xl flex items-center justify-center mb-6">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {metric.title}
                </h3>
                <p className="text-cool-gray mb-4">
                  {metric.description}
                </p>
                <div className="space-y-2">
                  {metric.examples.map((example) => (
                    <div key={example} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                      <span className="text-cool-gray text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <HelpCircle className="w-8 h-8 text-tech-green" />
              <h2 className="text-4xl font-bold text-deep-charcoal font-inter">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Get answers to common questions about our Gen AI POC development process, 
              timelines, and what to expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-soft-mint/20 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-bold text-deep-charcoal pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-tech-green flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-tech-green flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-light-gray pt-6">
                        <p className="text-cool-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-tech-green to-vibrant-green p-8 lg:p-12 rounded-2xl text-white text-center">
            <h2 className="text-4xl font-bold mb-6 font-inter">
              Ready to Validate Your AI Concept?
            </h2>
            <p className="text-green-100 mb-8 text-xl max-w-3xl mx-auto">
              Don't invest in full AI implementation without proof. Start with a POC to validate 
              your concept, measure performance, and make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-tech-green px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Start Your POC Today</span>
              </Link>
              <button
                onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in Gen AI Proof of Concept services. I\'d like to discuss my project requirements.', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-tech-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
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

export default GenAIPOCPage;