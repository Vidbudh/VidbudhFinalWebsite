import React from 'react';
import { 
  ArrowLeft, 
  Settings, 
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
  ArrowRight,
  Rocket,
  Cloud,
  Monitor,
  Smartphone,
  Tablet,
  Server,
  Network,
  HardDrive,
  Wifi,
  RefreshCw,
  TrendingUp as Growth,
  Zap as Lightning,
  ShieldCheck,
  UserCheck,
  Headphones as Support,
  Wrench as Tools,
  Package,
  Upload,
  Download as Deploy,
  CheckSquare,
  AlertCircle,
  Info,
  Bookmark,
  Flag,
  MapPin,
  Compass,
  Navigation,
  Route,
  Map
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GenAIImplementationPage = () => {
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
      icon: Rocket,
      title: "Enterprise-Grade Solutions",
      description: "Production-ready AI systems built with scalability, security, and reliability at the core."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Accelerated implementation using proven frameworks and best practices for faster time-to-value."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Built-in security measures and compliance frameworks to meet enterprise requirements."
    },
    {
      icon: Growth,
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs and handle increasing demands."
    }
  ];

  const implementationTypes = [
    {
      icon: MessageSquare,
      title: "Conversational AI Systems",
      description: "Enterprise chatbots, virtual assistants, and intelligent customer service platforms",
      features: ["Multi-channel deployment", "Natural language understanding", "Context awareness", "Integration APIs"],
      timeline: "8-16 weeks",
      complexity: "Medium to High",
      examples: ["Customer support automation", "Internal knowledge assistants", "Voice-enabled interfaces"]
    },
    {
      icon: FileIcon,
      title: "Document Intelligence Platforms",
      description: "Automated document processing, analysis, and workflow integration systems",
      features: ["OCR & extraction", "Workflow automation", "Compliance monitoring", "Audit trails"],
      timeline: "12-20 weeks",
      complexity: "High",
      examples: ["Contract management systems", "Invoice processing automation", "Legal document analysis"]
    },
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Tailored machine learning models trained on your specific data and requirements",
      features: ["Custom training", "Model optimization", "Performance monitoring", "Continuous learning"],
      timeline: "16-24 weeks",
      complexity: "Very High",
      examples: ["Predictive analytics models", "Computer vision systems", "NLP classification models"]
    },
    {
      icon: Search,
      title: "Intelligent Search & Discovery",
      description: "Advanced search engines with semantic understanding and personalized recommendations",
      features: ["Semantic search", "Personalization", "Real-time indexing", "Analytics dashboard"],
      timeline: "10-18 weeks",
      complexity: "High",
      examples: ["Enterprise search platforms", "E-commerce recommendations", "Content discovery systems"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights Platforms",
      description: "AI-powered business intelligence and predictive analytics solutions",
      features: ["Real-time analytics", "Predictive modeling", "Interactive dashboards", "Automated reporting"],
      timeline: "12-20 weeks",
      complexity: "High",
      examples: ["Business intelligence platforms", "Predictive maintenance systems", "Risk assessment tools"]
    },
    {
      icon: Workflow,
      title: "Process Automation Systems",
      description: "End-to-end workflow automation with AI-driven decision making",
      features: ["Workflow orchestration", "Decision automation", "Exception handling", "Performance tracking"],
      timeline: "14-22 weeks",
      complexity: "Very High",
      examples: ["Claims processing automation", "Supply chain optimization", "Quality control systems"]
    }
  ];

  const implementationPhases = [
    {
      phase: "01",
      title: "Architecture & Planning",
      description: "Design comprehensive system architecture, technology stack selection, and detailed project planning.",
      duration: "2-4 weeks",
      deliverables: ["System Architecture", "Technical Specifications", "Project Plan", "Risk Assessment"],
      activities: [
        "Requirements analysis and validation",
        "Technology stack selection",
        "Infrastructure planning",
        "Security and compliance review",
        "Integration strategy development"
      ]
    },
    {
      phase: "02",
      title: "Development & Integration",
      description: "Core system development with iterative testing and continuous integration practices.",
      duration: "6-16 weeks",
      deliverables: ["Core System", "API Integrations", "Testing Framework", "Documentation"],
      activities: [
        "AI model development and training",
        "Backend system implementation",
        "API development and integration",
        "Database design and optimization",
        "Security implementation"
      ]
    },
    {
      phase: "03",
      title: "Testing & Optimization",
      description: "Comprehensive testing, performance optimization, and quality assurance processes.",
      duration: "2-4 weeks",
      deliverables: ["Test Results", "Performance Reports", "Optimization Recommendations", "Quality Metrics"],
      activities: [
        "Unit and integration testing",
        "Performance testing and optimization",
        "Security testing and validation",
        "User acceptance testing",
        "Load testing and scalability validation"
      ]
    },
    {
      phase: "04",
      title: "Deployment & Launch",
      description: "Production deployment with monitoring, support systems, and go-live activities.",
      duration: "1-2 weeks",
      deliverables: ["Production System", "Monitoring Setup", "Support Documentation", "Training Materials"],
      activities: [
        "Production environment setup",
        "Deployment automation",
        "Monitoring and alerting configuration",
        "User training and onboarding",
        "Go-live support and validation"
      ]
    },
    {
      phase: "05",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and continuous improvement of the deployed system.",
      duration: "Ongoing",
      deliverables: ["Support Services", "Performance Reports", "Enhancement Recommendations", "Training Updates"],
      activities: [
        "24/7 monitoring and support",
        "Performance optimization",
        "Feature enhancements",
        "Model retraining and updates",
        "User feedback integration"
      ]
    }
  ];

  const technologyStack = [
    {
      category: "AI/ML Frameworks",
      icon: Brain,
      technologies: ["TensorFlow", "PyTorch", "Hugging Face", "OpenAI GPT", "LangChain", "Anthropic Claude"],
      description: "Cutting-edge AI frameworks for model development and deployment"
    },
    {
      category: "Cloud Platforms",
      icon: Cloud,
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      description: "Scalable cloud infrastructure for enterprise-grade deployments"
    },
    {
      category: "Backend Technologies",
      icon: Server,
      technologies: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Elasticsearch"],
      description: "Robust backend systems for high-performance AI applications"
    },
    {
      category: "Frontend & Mobile",
      icon: Monitor,
      technologies: ["React", "Vue.js", "React Native", "Flutter", "TypeScript", "Tailwind CSS"],
      description: "Modern user interfaces for seamless AI interaction experiences"
    },
    {
      category: "DevOps & Monitoring",
      icon: Activity,
      technologies: ["Jenkins", "GitLab CI", "Prometheus", "Grafana", "ELK Stack", "DataDog"],
      description: "Comprehensive monitoring and deployment automation tools"
    },
    {
      category: "Security & Compliance",
      icon: ShieldCheck,
      technologies: ["OAuth 2.0", "JWT", "Vault", "SIEM", "Encryption", "Audit Logging"],
      description: "Enterprise security and compliance frameworks"
    }
  ];

  const successStories = [
    {
      industry: "Financial Services",
      company: "Global Investment Bank",
      challenge: "Automate complex financial document analysis and risk assessment processes",
      solution: "AI-powered document intelligence platform with real-time risk scoring",
      results: [
        "75% reduction in document processing time",
        "90% improvement in risk detection accuracy",
        "$2.5M annual cost savings",
        "99.9% system uptime achieved"
      ],
      timeline: "18 weeks",
      icon: Building,
      color: "bg-blue-500",
      technologies: ["NLP", "Computer Vision", "Risk Analytics", "Real-time Processing"]
    },
    {
      industry: "Healthcare",
      company: "Regional Hospital Network",
      challenge: "Streamline patient data analysis and improve diagnostic accuracy",
      solution: "Custom AI models for medical image analysis and patient record processing",
      results: [
        "40% faster diagnostic processing",
        "95% accuracy in image analysis",
        "60% reduction in administrative overhead",
        "Enhanced patient care quality"
      ],
      timeline: "22 weeks",
      icon: Stethoscope,
      color: "bg-green-500",
      technologies: ["Computer Vision", "Medical NLP", "HIPAA Compliance", "Real-time Analytics"]
    },
    {
      industry: "E-commerce",
      company: "Multi-brand Retail Platform",
      challenge: "Personalize customer experience and optimize inventory management",
      solution: "AI-driven recommendation engine with predictive analytics",
      results: [
        "45% increase in conversion rates",
        "35% improvement in customer retention",
        "50% reduction in inventory waste",
        "3x ROI within first year"
      ],
      timeline: "14 weeks",
      icon: ShoppingCart,
      color: "bg-purple-500",
      technologies: ["Recommendation Systems", "Predictive Analytics", "Real-time Personalization", "A/B Testing"]
    },
    {
      industry: "Manufacturing",
      company: "Automotive Parts Manufacturer",
      challenge: "Implement predictive maintenance and quality control automation",
      solution: "IoT-integrated AI system for equipment monitoring and defect detection",
      results: [
        "70% reduction in unplanned downtime",
        "85% improvement in defect detection",
        "$1.8M annual maintenance savings",
        "25% increase in production efficiency"
      ],
      timeline: "20 weeks",
      icon: Factory,
      color: "bg-orange-500",
      technologies: ["IoT Integration", "Computer Vision", "Predictive Analytics", "Edge Computing"]
    }
  ];

  const qualityAssurance = [
    {
      icon: TestTube,
      title: "Comprehensive Testing",
      description: "Multi-layered testing approach including unit, integration, performance, and security testing",
      practices: ["Automated testing pipelines", "Load testing", "Security penetration testing", "User acceptance testing"]
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures and compliance frameworks from day one",
      practices: ["Data encryption", "Access controls", "Audit logging", "Compliance validation"]
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "Real-time monitoring and alerting for optimal system performance",
      practices: ["24/7 monitoring", "Performance metrics", "Automated alerts", "Capacity planning"]
    },
    {
      icon: RefreshCw,
      title: "Continuous Improvement",
      description: "Ongoing optimization and enhancement based on usage patterns and feedback",
      practices: ["Model retraining", "Performance optimization", "Feature enhancements", "User feedback integration"]
    }
  ];

  const faqData = [
    {
      question: "How long does a typical AI implementation take?",
      answer: "Implementation timelines vary based on complexity and scope. Simple conversational AI systems typically take 8-16 weeks, while complex custom AI platforms may require 16-24 weeks. We provide detailed timelines during the planning phase and use agile methodologies to deliver value incrementally throughout the project."
    },
    {
      question: "What's included in your implementation service?",
      answer: "Our comprehensive implementation includes system architecture design, AI model development, backend and frontend development, testing and quality assurance, deployment and go-live support, documentation, user training, and ongoing support. We handle everything from initial planning to production deployment."
    },
    {
      question: "How do you ensure the AI system will scale with our business?",
      answer: "We design all systems with scalability in mind, using cloud-native architectures, microservices patterns, and auto-scaling capabilities. Our solutions are built to handle increasing data volumes, user loads, and feature requirements. We also provide capacity planning and performance monitoring to ensure optimal scaling."
    },
    {
      question: "What kind of ongoing support do you provide?",
      answer: "We offer comprehensive post-deployment support including 24/7 monitoring, performance optimization, bug fixes, security updates, model retraining, feature enhancements, and user support. Our support packages are tailored to your specific needs and can include dedicated support teams."
    },
    {
      question: "How do you handle data security and compliance?",
      answer: "Security and compliance are built into every aspect of our implementations. We follow industry best practices including data encryption, access controls, audit logging, and compliance frameworks (GDPR, HIPAA, SOC 2, etc.). All team members are security-trained and we conduct regular security audits."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in seamless integration with existing enterprise systems. We work with APIs, databases, CRM systems, ERP platforms, and other business applications. Our integration approach ensures minimal disruption to your current operations while maximizing the value of your existing investments."
    },
    {
      question: "What if we need changes or enhancements after deployment?",
      answer: "We provide ongoing enhancement services and can adapt the system as your needs evolve. Our agile approach allows for iterative improvements, and we maintain detailed documentation to facilitate future modifications. We also offer training for your internal teams to handle basic modifications."
    },
    {
      question: "How do you measure the success of an AI implementation?",
      answer: "We establish clear success metrics during the planning phase, including performance benchmarks, business KPIs, user satisfaction scores, and ROI measurements. We provide regular reporting and analytics to track progress against these metrics and identify opportunities for optimization."
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
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">Full-Scale Development</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                AI Implementation
                <span className="block text-tech-green">Enterprise-Grade Solutions</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                Transform your business with production-ready AI solutions. From custom models 
                to complete platforms, we deliver scalable, secure, and high-performance AI systems 
                that drive measurable business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Start Implementation</span>
                </Link>
                <button 
                  onClick={() => document.getElementById('implementation-types')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
                >
                  Explore Solutions
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Implementation Development"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Production Ready</div>
                      <div className="text-cool-gray text-sm">Enterprise Scale</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-highlight rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Proven Success</div>
                      <div className="text-cool-gray text-sm">100+ Deployments</div>
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
              Why Choose Our Implementation Services?
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              We deliver enterprise-grade AI solutions that are secure, scalable, and built to drive 
              real business value from day one.
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

      {/* Implementation Types */}
      <section id="implementation-types" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              AI Implementation Solutions
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              From conversational AI to custom machine learning models, we implement 
              comprehensive AI solutions tailored to your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationTypes.map((impl, index) => (
              <div
                key={impl.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                    <impl.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal font-inter">
                      {impl.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-cool-gray">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{impl.timeline}</span>
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        impl.complexity === 'Very High' ? 'bg-red-100 text-red-600' :
                        impl.complexity === 'High' ? 'bg-orange-100 text-orange-600' :
                        impl.complexity === 'Medium to High' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {impl.complexity}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-cool-gray mb-6">
                  {impl.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-deep-charcoal mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {impl.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                        <span className="text-cool-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-deep-charcoal mb-3">Example Applications:</h4>
                  <div className="space-y-1">
                    {impl.examples.map((example) => (
                      <div key={example} className="text-cool-gray text-sm">
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Implementation Success Stories
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Real-world implementations that have transformed businesses across industries 
              with measurable results and lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.industry}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${story.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <story.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-inter">{story.industry}</h3>
                      <p className="text-white/80">{story.company}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-4 h-4 text-white/80" />
                        <span className="text-white/80 text-sm">{story.timeline} implementation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-deep-charcoal mb-2">Challenge:</h4>
                    <p className="text-cool-gray">{story.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-deep-charcoal mb-2">Solution:</h4>
                    <p className="text-cool-gray">{story.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-deep-charcoal mb-3">Results:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="bg-soft-mint p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-tech-green" />
                            <span className="text-deep-charcoal font-medium text-sm">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-deep-charcoal mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.technologies.map((tech) => (
                        <span key={tech} className="bg-light-gray px-2 py-1 rounded text-xs text-cool-gray">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our Implementation Process
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              A systematic approach to delivering enterprise-grade AI solutions, from initial 
              planning to production deployment and ongoing support.
            </p>
          </div>

          <div className="space-y-12">
            {implementationPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-tech-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{phase.phase}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-deep-charcoal font-inter">
                        {phase.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-cool-gray">
                        <Clock className="w-4 h-4" />
                        <span>{phase.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-cool-gray mb-8">
                    {phase.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-deep-charcoal mb-4">Key Activities:</h4>
                    <div className="space-y-2">
                      {phase.activities.map((activity) => (
                        <div key={activity} className="flex items-start space-x-3">
                          <ArrowRight className="w-4 h-4 text-tech-green flex-shrink-0 mt-1" />
                          <span className="text-cool-gray">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-deep-charcoal mb-4">Deliverables:</h4>
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                          <span className="text-cool-gray">{deliverable}</span>
                        </div>
                      ))}
                    </div>
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
                      alt={phase.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our Technology Stack
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              We use cutting-edge technologies and proven frameworks to build robust, 
              scalable, and future-proof AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((stack, index) => (
              <div
                key={stack.category}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-charcoal font-inter">
                    {stack.category}
                  </h3>
                </div>
                
                <p className="text-cool-gray mb-6">
                  {stack.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span key={tech} className="bg-soft-mint px-3 py-1 rounded-full text-tech-green text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Quality Assurance & Best Practices
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              We follow industry best practices and rigorous quality assurance processes 
              to ensure your AI implementation meets the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityAssurance.map((qa, index) => (
              <div
                key={qa.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-tech-green rounded-xl flex items-center justify-center mb-6">
                  <qa.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {qa.title}
                </h3>
                <p className="text-cool-gray mb-4">
                  {qa.description}
                </p>
                <div className="space-y-2">
                  {qa.practices.map((practice) => (
                    <div key={practice} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0" />
                      <span className="text-cool-gray text-sm">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <HelpCircle className="w-8 h-8 text-tech-green" />
              <h2 className="text-4xl font-bold text-deep-charcoal font-inter">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Get answers to common questions about our AI implementation process, 
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
      <section id="contact-cta" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-tech-green to-vibrant-green p-8 lg:p-12 rounded-2xl text-white text-center">
            <h2 className="text-4xl font-bold mb-6 font-inter">
              Ready to Implement Your AI Solution?
            </h2>
            <p className="text-green-100 mb-8 text-xl max-w-3xl mx-auto">
              Transform your business with enterprise-grade AI implementation. Our expert team 
              is ready to build scalable, secure, and high-performance solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-tech-green px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Start Your Implementation</span>
              </Link>
              <button
                onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in AI Implementation services. I\'d like to discuss my project requirements.', '_blank')}
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

export default GenAIImplementationPage;