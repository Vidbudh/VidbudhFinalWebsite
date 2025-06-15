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
  Newspaper
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmailCaptureModal from '../components/EmailCaptureModal';
import { useEmailCapture } from '../hooks/useEmailCapture';

const AIStrategyPage = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);
  const { isModalOpen, isLoading, currentResource, openModal, closeModal, handleEmailSubmit } = useEmailCapture();

  const scrollToContact = () => {
    const element = document.getElementById('contact-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStrategicProcess = () => {
    const element = document.getElementById('strategic-process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleResourceDownload = (title: string, filename: string) => {
    const downloadUrl = `/pdfs/${filename}`;
    openModal(title, downloadUrl, filename);
  };

  const keyBenefits = [
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "Align AI initiatives with your business objectives and long-term vision for maximum impact."
    },
    {
      icon: TrendingUp,
      title: "ROI Optimization",
      description: "Identify high-value use cases that deliver measurable returns on your AI investments."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Assess and minimize risks associated with AI implementation through strategic planning."
    },
    {
      icon: Zap,
      title: "Competitive Advantage",
      description: "Leverage AI to differentiate your business and stay ahead of market competition."
    }
  ];

  const responsibleAIFramework = [
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Ensure compliance with GDPR, CCPA, and other privacy regulations while maintaining data security."
    },
    {
      icon: Shield,
      title: "Responsible AI Practices",
      description: "Implement ethical AI guidelines, bias detection, and fairness measures in all AI systems."
    },
    {
      icon: Scale,
      title: "Model Scalability",
      description: "Design AI architectures that grow with your business needs and handle increasing data volumes."
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization to ensure AI models remain accurate and reliable."
    }
  ];

  const generativeAICapabilities = [
    {
      icon: Code,
      title: "Integrate generative AI into your day-to-day workflows",
      description: "Seamlessly embed AI into existing processes for maximum efficiency"
    },
    {
      icon: Target,
      title: "Master prompt engineering so your AI delivers what you actually need",
      description: "Optimize AI interactions for precise, actionable results"
    },
    {
      icon: Rocket,
      title: "Build faster and smarter with AI agents and generative technologies",
      description: "Accelerate development cycles with intelligent automation"
    },
    {
      icon: BarChart3,
      title: "Map out a roadmap that takes you from concept to impact",
      description: "Strategic planning that ensures measurable business outcomes"
    }
  ];

  const realWorldUseCases = [
    {
      icon: FileIcon,
      title: "Contract Intelligence",
      color: "bg-blue-500",
      colorLight: "bg-blue-50",
      colorText: "text-blue-600",
      description: "Extract key clauses, risks & obligations from legal documents instantly.",
      usage: "Used by legal, procurement, and compliance teams to cut review time by 70%.",
      impact: "70% faster review",
      benefits: [
        "Automated clause extraction",
        "Risk assessment scoring",
        "Compliance monitoring",
        "Contract comparison analysis"
      ],
      realExample: "A Fortune 500 company processes 500+ contracts monthly, automatically flagging high-risk clauses and generating compliance reports in minutes instead of hours.",
      industries: ["Legal", "Procurement", "Compliance"]
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Knowledge Assistants",
      color: "bg-green-500",
      colorLight: "bg-green-50",
      colorText: "text-green-600",
      description: "Deploy brand-tuned chatbots trained on your internal docs.",
      usage: "Support teams use this to reduce ticket resolution time and boost accuracy.",
      impact: "85% faster resolution",
      benefits: [
        "Brand-consistent responses",
        "Internal knowledge training",
        "Multi-language support",
        "Context-aware conversations"
      ],
      realExample: "A SaaS company's AI assistant handles 2,000+ daily support queries, trained on their entire knowledge base, achieving 90% first-contact resolution.",
      industries: ["Customer Support", "IT", "HR"]
    },
    {
      icon: Megaphone,
      title: "Personalized Marketing Content at Scale",
      color: "bg-yellow-500",
      colorLight: "bg-yellow-50",
      colorText: "text-yellow-600",
      description: "Auto-generate email copy, ads, and product descriptions using your brand tone.",
      usage: "Marketers use this to launch 5x faster with consistent messaging.",
      impact: "5x faster campaigns",
      benefits: [
        "Brand voice consistency",
        "Multi-channel content",
        "A/B test variations",
        "Personalization at scale"
      ],
      realExample: "An e-commerce brand generates 1,000+ product descriptions weekly, maintaining brand voice across 15 languages while increasing conversion rates by 35%.",
      industries: ["Marketing", "E-commerce", "Content"]
    },
    {
      icon: ClipboardList,
      title: "RFP & Proposal Automation",
      color: "bg-red-500",
      colorLight: "bg-red-50",
      colorText: "text-red-600",
      description: "Summarize incoming RFPs and auto-generate tailored responses.",
      usage: "Sales teams use this to reduce manual effort and increase win rates.",
      impact: "40% higher win rates",
      benefits: [
        "RFP analysis & summarization",
        "Automated response generation",
        "Compliance checking",
        "Competitive positioning"
      ],
      realExample: "A consulting firm's AI analyzes 50+ RFPs monthly, generating customized proposals that highlight relevant experience and capabilities, resulting in 40% more wins.",
      industries: ["Sales", "Business Development", "Consulting"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Business Assessment",
      description: "Deep dive into your business model, challenges, and opportunities to identify AI potential.",
      deliverables: ["Current State Analysis", "Opportunity Mapping", "Stakeholder Interviews"]
    },
    {
      step: "02",
      title: "Use Case Identification",
      description: "Discover and prioritize AI use cases based on impact, feasibility, and strategic value.",
      deliverables: ["Use Case Portfolio", "Impact Assessment", "Feasibility Analysis"]
    },
    {
      step: "03",
      title: "Technology Roadmap",
      description: "Create a comprehensive roadmap with timelines, resources, and technology requirements.",
      deliverables: ["Implementation Roadmap", "Resource Planning", "Technology Stack"]
    },
    {
      step: "04",
      title: "Responsible AI Framework",
      description: "Navigate data privacy, responsible AI practices, model scalability, and performance monitoring—so your AI is safe, reliable, and ethical.",
      deliverables: ["Ethics Guidelines", "Privacy Framework", "Monitoring Strategy"]
    },
    {
      step: "05",
      title: "Strategy Documentation",
      description: "Deliver comprehensive strategy documentation with actionable recommendations.",
      deliverables: ["Strategy Document", "Executive Summary", "Implementation Guide"]
    }
  ];

  const faqData = [
    {
      question: "How long does it take to develop an AI strategy?",
      answer: "Our comprehensive AI strategy development typically takes 4-6 weeks from kickoff to final delivery. This includes stakeholder interviews, business assessment, use case identification, technology roadmap creation, and detailed documentation. The timeline can be adjusted based on your organization's complexity and specific requirements."
    },
    {
      question: "What's the difference between AI strategy and AI implementation?",
      answer: "AI strategy focuses on the 'what' and 'why' - identifying the right use cases, creating roadmaps, and aligning AI initiatives with business objectives. Implementation is the 'how' - actually building and deploying the AI solutions. Strategy comes first and provides the blueprint for successful implementation."
    },
    {
      question: "Do you work with companies that have no AI experience?",
      answer: "Absolutely! We specialize in helping organizations at all stages of their AI journey. For companies new to AI, we provide comprehensive education, identify the most impactful starting points, and create phased approaches that build capabilities gradually while delivering quick wins."
    },
    {
      question: "How do you ensure our AI strategy is ethical and compliant?",
      answer: "Responsible AI is built into every strategy we develop. We address data privacy (GDPR, CCPA compliance), implement bias detection frameworks, establish ethical guidelines, and create governance structures. Our approach ensures your AI initiatives are not just effective, but also trustworthy and compliant."
    },
    {
      question: "What industries do you have experience with?",
      answer: "We've developed AI strategies across diverse industries including healthcare, finance, e-commerce, manufacturing, legal services, and technology. Our approach is industry-agnostic but implementation-specific, meaning we adapt proven frameworks to your sector's unique challenges and regulations."
    },
    {
      question: "How do you measure the ROI of AI strategy?",
      answer: "We establish clear success metrics during strategy development, including efficiency gains, cost reductions, revenue increases, and competitive advantages. We provide ROI projections, help you track implementation progress, and offer ongoing optimization to ensure your AI investments deliver measurable business value."
    },
    {
      question: "Can you help with both strategy and implementation?",
      answer: "Yes! While our AI Strategy service focuses on planning and roadmap creation, we also offer full implementation services. Many clients start with strategy development and then engage us for proof-of-concept development and full-scale implementation based on the strategic roadmap."
    },
    {
      question: "What makes your AI strategy approach different?",
      answer: "Our approach combines deep technical expertise with business acumen. We don't just recommend AI for the sake of it - we identify use cases that align with your business objectives and deliver measurable ROI. Plus, we build responsible AI practices into every strategy from day one."
    }
  ];

  const resources = [
    {
      category: "Case Studies",
      icon: FileText,
      color: "bg-blue-500",
      items: [
        {
          title: "Fortune 500 Contract Intelligence Transformation",
          description: "How we helped a major corporation reduce contract review time by 70%",
          type: "PDF Download",
          filename: "fortune-500-contract-intelligence.pdf"
        },
        {
          title: "SaaS Company AI Assistant Implementation",
          description: "90% first-contact resolution with AI-powered customer support",
          type: "PDF Download",
          filename: "saas-ai-assistant-case-study.pdf"
        },
        {
          title: "E-commerce Personalization at Scale",
          description: "35% conversion increase through AI-generated product content",
          type: "PDF Download",
          filename: "ecommerce-personalization-case-study.pdf"
        },
        {
          title: "RFP Automation Success Story",
          description: "Consulting firm achieves 40% higher win rates with AI-powered proposals",
          type: "PDF Download",
          filename: "rfp-automation-case-study.pdf"
        }
      ]
    },
    {
      category: "White Papers",
      icon: BookOpen,
      color: "bg-green-500",
      items: [
        {
          title: "The Complete Guide to Generative AI Strategy",
          description: "50-page comprehensive guide to planning your Gen AI transformation",
          type: "PDF Download",
          filename: "complete-guide-generative-ai-strategy.pdf"
        },
        {
          title: "Responsible AI Implementation Framework",
          description: "Best practices for ethical AI development and deployment",
          type: "PDF Download",
          filename: "responsible-ai-framework.pdf"
        },
        {
          title: "ROI Measurement in AI Projects",
          description: "How to measure and maximize returns on AI investments",
          type: "PDF Download",
          filename: "roi-measurement-ai-projects.pdf"
        },
        {
          title: "AI Strategy Playbook for Enterprises",
          description: "Step-by-step guide for developing enterprise AI strategies",
          type: "PDF Download",
          filename: "ai-strategy-playbook-enterprises.pdf"
        }
      ]
    },
    {
      category: "Tools & Templates",
      icon: Settings,
      color: "bg-orange-500",
      items: [
        {
          title: "AI Readiness Assessment Checklist",
          description: "Evaluate your organization's readiness for AI transformation",
          type: "Free Download",
          filename: "ai-readiness-assessment-checklist.pdf"
        },
        {
          title: "Use Case Prioritization Matrix",
          description: "Template for evaluating and ranking AI opportunities",
          type: "Free Download",
          filename: "use-case-prioritization-matrix.pdf"
        },
        {
          title: "AI Project ROI Calculator",
          description: "Estimate potential returns on your AI investments",
          type: "Free Tool",
          filename: "ai-project-roi-calculator.pdf"
        },
        {
          title: "AI Strategy Planning Template",
          description: "Comprehensive template for documenting your AI strategy",
          type: "Free Download",
          filename: "ai-strategy-planning-template.pdf"
        }
      ]
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
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">AI Strategy & Planning</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                Gen AI Strategy
                <span className="block text-tech-green">Development</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                Transform your business vision into actionable AI strategy. We help you identify high-impact 
                use cases, create implementation roadmaps, and ensure your AI initiatives deliver measurable 
                business value from day one.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Strategy Session</span>
                </Link>
                <button 
                  onClick={scrollToStrategicProcess}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
                >
                  Explore Generative AI Strategy
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Strategy Planning"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">ROI Focused</div>
                      <div className="text-cool-gray text-sm">Strategy Planning</div>
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
                      <div className="text-cool-gray text-sm">50+ Strategies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-20 bg-gradient-to-r from-tech-green to-vibrant-green text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Lightbulb className="w-8 h-8 text-gold-highlight" />
              <h2 className="text-4xl font-bold font-inter">Did You Know?</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-green-100">
                <strong className="text-white">Generative AI isn't just about chatbots and content.</strong> It can transform your product development, too.
              </p>
              <p className="text-green-100">
                Think <strong className="text-white">faster code</strong>, <strong className="text-white">smarter testing</strong>, and <strong className="text-white">automated documentation</strong>
              </p>
              <p className="text-green-100">
                <strong className="text-white">Skip those off-the-shelf solutions</strong>—get something that fits you
              </p>
              <p className="text-xl font-semibold text-white">
                Craft an AI product strategy that's built for your market, not the other way around
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 font-inter flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-gold-highlight" />
                <span>We're here to help you:</span>
              </h3>
              {generativeAICapabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className="flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-green-100 text-sm">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 font-inter">Generative AI Transforms:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-highlight" />
                  <span>Product Development Cycles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-highlight" />
                  <span>Code Generation & Testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-highlight" />
                  <span>Documentation Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-highlight" />
                  <span>Workflow Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gold-highlight" />
                  <span>Market-Specific Solutions</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={scrollToStrategicProcess}
                  className="w-full bg-white text-tech-green px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
                >
                  Explore Generative AI Strategy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generative AI Strategy Section */}
      <section id="generative-ai-strategy" className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Wand2 className="w-8 h-8 text-tech-green" />
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-charcoal font-inter">
                Generative AI Strategy
              </h2>
            </div>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto">
              Unlock the transformative power of generative AI with a strategic approach that goes beyond 
              simple implementations. We help you build custom solutions that fit your unique business needs 
              and deliver measurable impact across your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              See how businesses are leveraging AI to transform their operations with 
              practical, high-impact solutions that deliver immediate value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {realWorldUseCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with colored accent */}
                <div className={`${useCase.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-inter">{useCase.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {useCase.industries.map((industry) => (
                          <span key={industry} className="bg-white/20 px-2 py-1 rounded text-xs">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold mb-1">{useCase.impact}</div>
                    <div className="text-white/80 text-sm">Average Improvement</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-lg text-deep-charcoal mb-4 font-medium">
                    {useCase.description}
                  </p>
                  
                  <p className="text-cool-gray mb-6">
                    {useCase.usage}
                  </p>

                  {/* Real Example */}
                  <div className={`${useCase.colorLight} p-4 rounded-lg mb-6`}>
                    <h4 className={`font-bold ${useCase.colorText} mb-2 flex items-center space-x-2`}>
                      <Sparkles className="w-4 h-4" />
                      <span>Real Success Story:</span>
                    </h4>
                    <p className="text-cool-gray text-sm italic">
                      {useCase.realExample}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-bold text-deep-charcoal mb-3">Key Capabilities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0 mt-0.5" />
                          <span className="text-cool-gray text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA for Use Cases */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-soft-mint/30 to-soft-white p-8 lg:p-12 rounded-2xl">
              <h3 className="text-3xl font-bold text-deep-charcoal mb-4 font-inter">
                Ready to Implement These Solutions?
              </h3>
              <p className="text-xl text-cool-gray mb-8 max-w-3xl mx-auto">
                These aren't just concepts—they're proven solutions we've implemented for real businesses. 
                Let's discuss how we can customize these approaches for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Use Case Discussion</span>
                </Link>
                <button
                  onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in the AI use cases mentioned on your strategy page. I\'d like to discuss implementation for my business.', '_blank')}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp for Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategic Process */}
      <section id="strategic-process" className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our Strategic Process
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              A systematic approach to developing your AI strategy, from initial assessment 
              to actionable implementation roadmap with built-in responsible AI practices.
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
                    <h3 className="text-3xl font-bold text-deep-charcoal font-inter">
                      {step.title}
                    </h3>
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
                        index === 0 ? '3183153' : 
                        index === 1 ? '3184360' : 
                        index === 2 ? '3184465' : 
                        index === 3 ? '3184418' : '3183150'
                      }/pexels-photo-${
                        index === 0 ? '3183153' : 
                        index === 1 ? '3184360' : 
                        index === 2 ? '3184465' : 
                        index === 3 ? '3184418' : '3183150'
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
              Get answers to common questions about our AI strategy development process, 
              timelines, and approach.
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

          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-light-gray">
              <h3 className="text-2xl font-bold text-deep-charcoal mb-4 font-inter">
                Still Have Questions?
              </h3>
              <p className="text-cool-gray mb-6">
                Our AI strategy experts are here to help. Schedule a free consultation 
                to discuss your specific needs and get personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-6 py-3 rounded-lg hover:bg-vibrant-green transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Free Consultation</span>
                </Link>
                <button
                  onClick={() => window.open('https://wa.me/919840139501?text=Hi! I have questions about your AI Strategy services. Can we discuss?', '_blank')}
                  className="border-2 border-tech-green text-tech-green px-6 py-3 rounded-lg hover:bg-tech-green hover:text-white transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-tech-green" />
              <h2 className="text-4xl font-bold text-deep-charcoal font-inter">
                Resources & Downloads
              </h2>
            </div>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Access our comprehensive library of AI strategy resources, case studies, 
              and tools to accelerate your AI transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className={`${category.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-inter">{category.category}</h3>
                  </div>
                </div>

                {/* Resources List */}
                <div className="p-6">
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-light-gray last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-bold text-deep-charcoal mb-2 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-cool-gray text-sm mb-3">
                          {item.description}
                        </p>
                        <button
                          onClick={() => handleResourceDownload(item.title, item.filename)}
                          className="inline-flex items-center space-x-2 text-tech-green hover:text-vibrant-green transition-colors duration-200 font-medium text-sm"
                        >
                          <Download className="w-4 h-4" />
                          <span>{item.type}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
                Investment & Timeline
              </h2>
              <p className="text-xl text-cool-gray mb-8">
                Our AI strategy development is designed to deliver maximum value 
                with clear timelines and transparent pricing.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal">4-6 Weeks Timeline</h3>
                    <p className="text-cool-gray">From kickoff to final strategy delivery</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal">Flexible Pricing</h3>
                    <p className="text-cool-gray">Tailored to your organization size and scope</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal">Expert Team</h3>
                    <p className="text-cool-gray">Senior strategists and AI specialists</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-tech-green to-vibrant-green p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6 font-inter">Ready to Get Started?</h3>
                <p className="text-green-100 mb-8 text-lg">
                  Schedule a free consultation to discuss your AI strategy needs 
                  and learn how we can help accelerate your transformation.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-200" />
                    <span>Free initial consultation (60 minutes)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-200" />
                    <span>Custom proposal within 48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-200" />
                    <span>No obligation to proceed</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="w-full bg-white text-tech-green px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Transform Your Business with AI Strategy
            </h2>
            <p className="text-xl text-cool-gray mb-8 max-w-3xl mx-auto">
              Don't let your competitors get ahead. Start your AI transformation journey 
              with a comprehensive strategy that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in Gen AI Strategy services. I\'d like to schedule a consultation.', '_blank')}
                className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Modal */}
      <EmailCaptureModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleEmailSubmit}
        resourceTitle={currentResource}
        isLoading={isLoading}
      />

      <Footer />
    </div>
  );
};

export default AIStrategyPage;