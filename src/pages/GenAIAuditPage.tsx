import React from 'react';
import { ArrowLeft, Search, Target, TrendingUp, Users, CheckCircle, Clock, DollarSign, BarChart3, Lightbulb, Shield, Zap, MessageCircle, Calendar, FileText, Award, Code, Settings, Sparkles, Lock, Eye, Scale, Activity, Cpu, Layers, GitBranch, Workflow, Database, Bot, Wand2, Briefcase, FileCode, TestTube, BookOpen, Mail, PieChart, Headphones, ShoppingCart, Palette, Video, Languages, Building, Stethoscope, TrendingDown, Factory, Wrench, FileText as FileIcon, MessageSquare, Megaphone, ClipboardList, HelpCircle, ChevronDown, ChevronUp, Download, ExternalLink, Play, Star, Globe, Newspaper, Timer, Brain, Gauge, FlaskConical, Microscope, LineChart, Cog, AlertTriangle, ThumbsUp, ArrowRight, Rocket, Cloud, Monitor, Smartphone, Tablet, Server, Network, HardDrive, Wifi, RefreshCw, TrendingUp as Growth, Zap as Lightning, ShieldCheck, UserCheck, Headphones as Support, Wrench as Tools, Package, Upload, Download as Deploy, CheckSquare, AlertCircle, Info, Bookmark, Flag, MapPin, Compass, Navigation, Route, Map, Scan, ClipboardCheck, FileSearch, BarChart, TrendingUpIcon, Crosshair, Focus, Radar, ScanLine, SearchCheck, FileBarChart, DicesIcon as AnalyticsIcon, BarChart as ChartBar, Presentation as PresentationChart, Import as Report, Clipboard, ClipboardList as ClipboardListIcon, FileSpreadsheet, Calculator, Percent, DollarSignIcon, TrendingDown as TrendingUpDown, BarChart2, LineChartIcon, PieChartIcon, AreaChart, ScatterChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GenAIAuditPage = () => {
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
      icon: Search,
      title: "Comprehensive Analysis",
      description: "Deep dive assessment of your current AI systems, processes, and performance metrics."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Identify bottlenecks and optimization opportunities to maximize AI system efficiency."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Thorough security assessment and compliance validation for enterprise requirements."
    },
    {
      icon: DollarSign,
      title: "ROI Enhancement",
      description: "Actionable recommendations to improve return on investment and reduce operational costs."
    }
  ];

  const auditAreas = [
    {
      icon: Brain,
      title: "AI Model Performance",
      description: "Comprehensive evaluation of model accuracy, efficiency, and reliability",
      checklist: [
        "Model accuracy and precision metrics",
        "Inference speed and latency analysis",
        "Resource utilization assessment",
        "Bias detection and fairness evaluation",
        "Model drift monitoring and alerts"
      ],
      timeline: "3-5 days",
      deliverables: ["Performance Report", "Optimization Recommendations", "Benchmarking Analysis"]
    },
    {
      icon: Database,
      title: "Data Quality & Pipeline",
      description: "Assessment of data infrastructure, quality, and processing workflows",
      checklist: [
        "Data quality and consistency checks",
        "Pipeline efficiency and reliability",
        "Data governance and lineage",
        "Storage optimization analysis",
        "Real-time processing capabilities"
      ],
      timeline: "2-4 days",
      deliverables: ["Data Quality Report", "Pipeline Optimization Plan", "Governance Framework"]
    },
    {
      icon: Cloud,
      title: "Infrastructure & Scalability",
      description: "Evaluation of cloud infrastructure, scalability, and cost optimization",
      checklist: [
        "Infrastructure cost analysis",
        "Scalability and performance testing",
        "Resource allocation optimization",
        "Auto-scaling configuration review",
        "Disaster recovery assessment"
      ],
      timeline: "2-3 days",
      deliverables: ["Infrastructure Report", "Cost Optimization Plan", "Scalability Roadmap"]
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description: "Comprehensive security audit and regulatory compliance assessment",
      checklist: [
        "Data encryption and access controls",
        "API security and authentication",
        "Compliance with GDPR, HIPAA, SOC 2",
        "Vulnerability assessment",
        "Audit logging and monitoring"
      ],
      timeline: "3-4 days",
      deliverables: ["Security Assessment", "Compliance Report", "Risk Mitigation Plan"]
    },
    {
      icon: Users,
      title: "User Experience & Adoption",
      description: "Analysis of user interaction, satisfaction, and system adoption rates",
      checklist: [
        "User interface and experience review",
        "Adoption rate and usage analytics",
        "User feedback and satisfaction surveys",
        "Training and onboarding effectiveness",
        "Support ticket analysis"
      ],
      timeline: "2-3 days",
      deliverables: ["UX Analysis Report", "Adoption Metrics", "Improvement Recommendations"]
    },
    {
      icon: Workflow,
      title: "Integration & Workflows",
      description: "Assessment of system integrations and business process workflows",
      checklist: [
        "API integration health checks",
        "Workflow efficiency analysis",
        "System interoperability review",
        "Data flow optimization",
        "Process automation opportunities"
      ],
      timeline: "2-4 days",
      deliverables: ["Integration Report", "Workflow Analysis", "Automation Roadmap"]
    }
  ];

  const auditProcess = [
    {
      phase: "01",
      title: "Initial Assessment",
      description: "Comprehensive review of your current AI systems, documentation, and business objectives.",
      duration: "2-3 days",
      activities: [
        "System architecture review",
        "Documentation analysis",
        "Stakeholder interviews",
        "Current state mapping",
        "Objective alignment"
      ]
    },
    {
      phase: "02",
      title: "Deep Dive Analysis",
      description: "Detailed technical analysis across all audit areas with performance testing and evaluation.",
      duration: "5-10 days",
      activities: [
        "Performance benchmarking",
        "Security vulnerability scanning",
        "Data quality assessment",
        "User experience evaluation",
        "Cost analysis and optimization"
      ]
    },
    {
      phase: "03",
      title: "Findings & Recommendations",
      description: "Compilation of findings with prioritized recommendations and implementation roadmap.",
      duration: "3-5 days",
      activities: [
        "Results analysis and synthesis",
        "Recommendation prioritization",
        "ROI impact assessment",
        "Implementation planning",
        "Risk assessment and mitigation"
      ]
    },
    {
      phase: "04",
      title: "Report & Presentation",
      description: "Comprehensive audit report delivery with executive presentation and action plan.",
      duration: "2-3 days",
      activities: [
        "Executive summary preparation",
        "Detailed report compilation",
        "Presentation to stakeholders",
        "Q&A and clarifications",
        "Next steps planning"
      ]
    }
  ];

  const auditOutcomes = [
    {
      icon: TrendingUp,
      title: "Performance Improvements",
      description: "Identify opportunities to enhance AI system performance and efficiency",
      metrics: ["25-40% speed improvement", "15-30% accuracy gains", "20-35% cost reduction"]
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Uncover security vulnerabilities and compliance gaps before they become issues",
      metrics: ["100% compliance coverage", "Zero security incidents", "Reduced audit risks"]
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Optimize infrastructure costs and improve resource utilization",
      metrics: ["20-50% cost savings", "Improved ROI", "Better resource allocation"]
    },
    {
      icon: Rocket,
      title: "Strategic Roadmap",
      description: "Clear action plan for AI system improvements and future enhancements",
      metrics: ["Prioritized improvements", "Timeline clarity", "Resource planning"]
    }
  ];

  const industryExamples = [
    {
      industry: "Financial Services",
      company: "Regional Bank",
      challenge: "AI fraud detection system showing declining accuracy and increasing false positives",
      findings: [
        "Model drift due to evolving fraud patterns",
        "Insufficient data preprocessing",
        "Suboptimal feature engineering",
        "Lack of real-time model monitoring"
      ],
      improvements: [
        "Implemented automated model retraining",
        "Enhanced feature engineering pipeline",
        "Added real-time monitoring dashboard",
        "Optimized decision thresholds"
      ],
      results: "40% reduction in false positives, 25% improvement in fraud detection accuracy, $2M annual savings",
      icon: Building,
      color: "bg-blue-500"
    },
    {
      industry: "Healthcare",
      company: "Medical Imaging Center",
      challenge: "AI diagnostic system experiencing performance issues and compliance concerns",
      findings: [
        "Inconsistent image preprocessing",
        "Model bias in certain demographics",
        "HIPAA compliance gaps",
        "Slow inference times affecting workflow"
      ],
      improvements: [
        "Standardized preprocessing pipeline",
        "Bias mitigation techniques implemented",
        "Enhanced security and compliance measures",
        "Optimized model architecture for speed"
      ],
      results: "60% faster diagnosis processing, 95% accuracy across all demographics, full HIPAA compliance",
      icon: Stethoscope,
      color: "bg-green-500"
    },
    {
      industry: "E-commerce",
      company: "Online Retail Platform",
      challenge: "Recommendation system underperforming with poor user engagement and conversion",
      findings: [
        "Outdated collaborative filtering approach",
        "Poor real-time personalization",
        "Insufficient A/B testing framework",
        "Limited cross-platform integration"
      ],
      improvements: [
        "Upgraded to deep learning recommendations",
        "Implemented real-time personalization",
        "Enhanced A/B testing capabilities",
        "Unified cross-platform experience"
      ],
      results: "45% increase in click-through rates, 30% improvement in conversion, 25% boost in revenue per user",
      icon: ShoppingCart,
      color: "bg-purple-500"
    }
  ];

  const faqData = [
    {
      question: "What does a Gen AI audit include?",
      answer: "Our comprehensive Gen AI audit covers six key areas: AI model performance analysis, data quality and pipeline assessment, infrastructure and scalability review, security and compliance evaluation, user experience analysis, and integration workflow assessment. Each area includes detailed technical analysis, performance benchmarking, and actionable recommendations."
    },
    {
      question: "How long does an AI audit take?",
      answer: "A typical Gen AI audit takes 2-4 weeks depending on the complexity and scope of your AI systems. Simple single-model audits can be completed in 2 weeks, while comprehensive enterprise-wide audits may take up to 4 weeks. We provide a detailed timeline after the initial assessment."
    },
    {
      question: "Do you need access to our production systems?",
      answer: "We work with you to determine the appropriate level of access needed. For comprehensive audits, we typically need read-only access to systems, logs, and performance metrics. We can also work with anonymized data, staging environments, or documentation-based reviews if production access isn't feasible. All access is secured and governed by strict NDAs."
    },
    {
      question: "What deliverables do we receive?",
      answer: "You receive a comprehensive audit report including executive summary, detailed findings for each audit area, prioritized recommendations with ROI impact, implementation roadmap with timelines, and a presentation session with our experts. All findings are documented with clear action items and success metrics."
    },
    {
      question: "Can you help implement the recommended improvements?",
      answer: "Absolutely! While the audit provides the roadmap, we also offer implementation services to execute the recommended improvements. This can include model optimization, infrastructure upgrades, security enhancements, and process improvements. We can work as your extended team or provide guidance to your internal teams."
    },
    {
      question: "How do you ensure confidentiality during the audit?",
      answer: "We take confidentiality extremely seriously. All team members sign comprehensive NDAs, we use secure communication channels, data is encrypted in transit and at rest, access is limited to essential personnel only, and we can work with anonymized data when possible. We follow enterprise-grade security protocols throughout the audit process."
    },
    {
      question: "What's the typical ROI of an AI audit?",
      answer: "Most organizations see 3-5x ROI from AI audits through cost savings, performance improvements, and risk mitigation. Common benefits include 20-50% infrastructure cost reduction, 25-40% performance improvements, enhanced security posture, and clear roadmap for future investments. The audit investment typically pays for itself within 3-6 months."
    },
    {
      question: "Do you audit AI systems built by other vendors?",
      answer: "Yes, we audit AI systems regardless of who built them. Our vendor-agnostic approach means we can assess systems built in-house, by other consulting firms, or using third-party platforms. We focus on objective analysis and improvement opportunities rather than defending any particular technology or approach."
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
                  <Search className="w-6 h-6 text-white" />
                </div>
                <span className="text-tech-green font-semibold text-lg">Comprehensive AI Assessment</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6 font-inter leading-tight">
                Gen AI Audit
                <span className="block text-tech-green">Optimize Your AI Performance</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-8 leading-relaxed">
                Comprehensive evaluation of your existing AI systems to identify performance bottlenecks, 
                security vulnerabilities, and optimization opportunities. Get actionable insights to maximize 
                your AI investment and ensure enterprise-grade reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-tech-green text-white px-8 py-4 rounded-xl hover:bg-vibrant-green transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule AI Audit</span>
                </Link>
                <button 
                  onClick={() => document.getElementById('audit-areas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-tech-green text-tech-green px-8 py-4 rounded-xl hover:bg-tech-green hover:text-white transition-all duration-200 font-semibold"
                >
                  Explore Audit Areas
                </button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Audit and Analysis"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-green rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Performance Analysis</div>
                      <div className="text-cool-gray text-sm">360° Assessment</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-highlight rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-deep-charcoal">Expert Insights</div>
                      <div className="text-cool-gray text-sm">Actionable Results</div>
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
              Why Audit Your AI Systems?
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Regular AI audits ensure your systems remain performant, secure, and aligned with 
              business objectives while identifying opportunities for optimization and cost savings.
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

      {/* Audit Areas */}
      <section id="audit-areas" className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Comprehensive Audit Areas
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Our 360-degree audit covers all critical aspects of your AI systems, from model 
              performance to security compliance, ensuring nothing is overlooked.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-tech-green rounded-xl flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-charcoal font-inter">
                      {area.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-cool-gray">
                      <Clock className="w-4 h-4" />
                      <span>{area.timeline}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-cool-gray mb-6">
                  {area.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-deep-charcoal mb-3">Audit Checklist:</h4>
                  <div className="space-y-2">
                    {area.checklist.map((item) => (
                      <div key={item} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tech-green flex-shrink-0 mt-0.5" />
                        <span className="text-cool-gray text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-deep-charcoal mb-3">Key Deliverables:</h4>
                  <div className="space-y-1">
                    {area.deliverables.map((deliverable) => (
                      <div key={deliverable} className="text-tech-green text-sm font-medium">
                        • {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Real Audit Success Stories
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              See how our comprehensive AI audits have helped organizations across industries 
              optimize performance, reduce costs, and mitigate risks.
            </p>
          </div>

          <div className="space-y-12">
            {industryExamples.map((example, index) => (
              <div
                key={example.industry}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 ${example.color} rounded-xl flex items-center justify-center`}>
                        <example.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-deep-charcoal font-inter">
                          {example.industry}
                        </h3>
                        <p className="text-cool-gray">{example.company}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-deep-charcoal mb-3">Challenge:</h4>
                      <p className="text-cool-gray">{example.challenge}</p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-red-600 mb-3 flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Key Findings:</span>
                      </h4>
                      <div className="space-y-2">
                        {example.findings.map((finding) => (
                          <div key={finding} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-red-700 text-sm">{finding}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-green-600 mb-3 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Improvements Implemented:</span>
                      </h4>
                      <div className="space-y-2">
                        {example.improvements.map((improvement) => (
                          <div key={improvement} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-green-700 text-sm">{improvement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-600 mb-2 flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Results Achieved:</span>
                      </h4>
                      <p className="text-blue-700 font-medium">{example.results}</p>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-in-right`}>
                  <div className="relative">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184360' : 
                        index === 1 ? '3184465' : '3183153'
                      }/pexels-photo-${
                        index === 0 ? '3184360' : 
                        index === 1 ? '3184465' : '3183153'
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={example.industry}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-20 bg-gradient-to-br from-soft-mint/20 to-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Our Audit Process
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              A systematic approach to evaluating your AI systems, from initial assessment 
              to actionable recommendations and implementation roadmap.
            </p>
          </div>

          <div className="space-y-12">
            {auditProcess.map((phase, index) => (
              <div
                key={phase.phase}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
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
                  <div className="space-y-3">
                    <h4 className="font-bold text-deep-charcoal mb-4">Key Activities:</h4>
                    {phase.activities.map((activity) => (
                      <div key={activity} className="flex items-start space-x-3">
                        <ArrowRight className="w-4 h-4 text-tech-green flex-shrink-0 mt-1" />
                        <span className="text-cool-gray">{activity}</span>
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
                        index === 2 ? '3184465' : '3184418'
                      }/pexels-photo-${
                        index === 0 ? '3183153' : 
                        index === 1 ? '3184360' : 
                        index === 2 ? '3184465' : '3184418'
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

      {/* Expected Outcomes */}
      <section className="py-20 bg-soft-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-charcoal mb-6 font-inter">
              Expected Audit Outcomes
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Our comprehensive audits deliver measurable improvements across performance, 
              security, cost optimization, and strategic planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditOutcomes.map((outcome, index) => (
              <div
                key={outcome.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-tech-green rounded-xl flex items-center justify-center mb-6">
                  <outcome.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3 font-inter">
                  {outcome.title}
                </h3>
                <p className="text-cool-gray mb-6">
                  {outcome.description}
                </p>
                <div className="space-y-2">
                  {outcome.metrics.map((metric) => (
                    <div key={metric} className="bg-soft-mint p-2 rounded text-center">
                      <span className="text-tech-green font-bold text-sm">{metric}</span>
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
              Get answers to common questions about our AI audit process, scope, 
              and what to expect from the engagement.
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
              Ready to Optimize Your AI Systems?
            </h2>
            <p className="text-green-100 mb-8 text-xl max-w-3xl mx-auto">
              Don't let performance issues, security vulnerabilities, or inefficiencies hold back 
              your AI investment. Get a comprehensive audit and unlock your AI's full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-tech-green px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Your AI Audit</span>
              </Link>
              <button
                onClick={() => window.open('https://wa.me/919840139501?text=Hi! I\'m interested in Gen AI Audit services. I\'d like to discuss auditing my AI systems.', '_blank')}
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

export default GenAIAuditPage;