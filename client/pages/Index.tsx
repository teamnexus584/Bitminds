import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import Countdown from "@/components/Countdown";
import SlidingBanner from "@/components/SlidingBanner";
import {
  Code2,
  Smartphone,
  Palette,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  Database,
  Shield,
  Cloud,
  Bot,
  ShoppingCart,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build scalable, high-performance web applications with cutting-edge technologies. From startups to enterprises, we deliver solutions tailored to your needs.",
    color: "from-blue-500 to-cyan-500",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Create intuitive mobile and cross-platform apps that engage users and drive business growth. Native and hybrid solutions available.",
    color: "from-purple-500 to-pink-500",
    link: "/services/app-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design beautiful, user-centric interfaces that convert. We combine aesthetics with functionality to create memorable experiences.",
    color: "from-orange-500 to-red-500",
    link: "/services/ui-ux-design",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimize your digital products for speed and efficiency. Lightning-fast load times and smooth interactions are our standard.",
    color: "from-yellow-500 to-orange-500",
    link: "/services/performance",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Get expert guidance on your technology roadmap. We help you make informed decisions for your digital transformation journey.",
    color: "from-green-500 to-teal-500",
    link: "/services/consulting",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Scale your product strategically. Data-driven insights and proven methodologies to accelerate your business growth.",
    color: "from-indigo-500 to-blue-500",
    link: "/services/growth-strategy",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Design and implement robust database architectures. From SQL to NoSQL, we ensure your data is secure, scalable, and optimized.",
    color: "from-emerald-500 to-green-500",
    link: "/services/database",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security solutions. Vulnerability assessments, penetration testing, and security audits.",
    color: "from-red-500 to-rose-500",
    link: "/services/security",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Seamlessly migrate your infrastructure to the cloud. AWS, Azure, and Google Cloud expertise for scalable, cost-effective solutions.",
    color: "from-sky-500 to-blue-500",
    link: "/services/cloud",
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    description:
      "Integrate intelligent automation and ML models into your business processes. Chatbots, predictive analytics, and AI-powered solutions.",
    color: "from-violet-500 to-purple-500",
    link: "/services/ai-ml",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Build powerful online stores that convert visitors into customers. Custom e-commerce platforms with payment integration and inventory management.",
    color: "from-pink-500 to-rose-500",
    link: "/services/ecommerce",
  },
  {
    icon: Briefcase,
    title: "Enterprise Solutions",
    description:
      "Large-scale enterprise applications and system integrations. CRM, ERP, and custom business management solutions for corporations.",
    color: "from-slate-500 to-gray-500",
    link: "/services/enterprise",
  },
];

const projects = [
  {
    id: 1,
    title: "Surbhi IP Studio",
    category: "Web Development",
    description:
      "Professional portfolio and services website for creative studio",
    image: "/surbhi.png",
    link: "https://surbhiipstudio.com",
  },
  {
    id: 2,
    title: "Alumni Connect App",
    category: "App Development",
    description:
      "Professional alumni networking app with advanced features",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    link: "https://play.google.com/store/apps/details?id=com.remit.alumni",
  },
  {
    id: 3,
    title: "Hyperlon Tech",
    category: "Web Development",
    description:
      "Modern technology solutions and digital transformation services",
    image: "/hyper.png",
    link: "https://hyperlontech.com",
  },
];

export default function Index() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Top Sliding Banner */}
      <div className="fixed top-16 left-0 right-0 z-50">
        <SlidingBanner />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:to-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  ✨ Transforming Ideas into Digital Reality
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up">
                Build Tomorrow's Digital
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x block">
                  Solutions
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up animation-delay-200">
                At Bitminds, we craft exceptional web and mobile applications that
                drive business growth. From concept to deployment, we deliver
                high-quality, scalable solutions tailored to your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <button
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse-slow"
                >
                  Get Started
                </button>
                <button
                  onClick={() => {
                    const servicesSection = document.querySelector('#services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all transform hover:scale-105"
                >
                  View Services
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <p className="text-2xl md:text-3xl font-bold text-primary animate-count-up">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <p className="text-2xl md:text-3xl font-bold text-secondary animate-count-up animation-delay-100">30+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <p className="text-2xl md:text-3xl font-bold text-accent animate-count-up animation-delay-200">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="pt-6 border-t border-border animate-fade-in-up animation-delay-800">
                <p className="text-sm text-muted-foreground mb-3">Powered by cutting-edge technologies:</p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 group">
                    <img
                      src="/React - Copy.png"
                      alt="React"
                      className="w-6 h-6 rounded group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">React</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <img
                      src="/Flutter.png"
                      alt="Flutter"
                      className="w-6 h-6 rounded group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Flutter</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <img
                      src="/Node.js.png"
                      alt="Node.js"
                      className="w-6 h-6 rounded group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <img
                      src="/AWS.png"
                      alt="AWS"
                      className="w-6 h-6 rounded group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">AWS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Laptop GIF */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <img
                  src="/laptop gif.gif"
                  alt="Development Animation"
                  className="relative z-10 w-full max-w-lg h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to take your business to the next level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-animation">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover-lift glow-border hover:scale-105"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link hover:scale-105"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              We leverage the latest and most powerful tools to build
              exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Video */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              >
                <source src="/hello.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Side - Technology Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all hover:shadow-lg h-32 hover-lift glow-border">
                <img
                  src="/React - Copy.png"
                  alt="React"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-xs">React</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all hover:shadow-lg h-32 hover-lift glow-border">
                <img
                  src="/Flutter.png"
                  alt="Flutter"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-xs">Flutter</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all hover:shadow-lg h-32 hover-lift glow-border">
                <img
                  src="/Angular.png"
                  alt="Angular"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-xs">Angular</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all hover:shadow-lg h-32 hover-lift glow-border">
                <img
                  src="/Node.js.png"
                  alt="Node.js"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-xs">Node.js</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all hover:shadow-lg h-32 hover-lift glow-border">
                <img
                  src="/AWS.png"
                  alt="AWS"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-xs">AWS</p>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all hover:shadow-lg h-32 hover-lift glow-border">
                <img
                  src="/JavaScript.png"
                  alt="JavaScript"
                  className="w-full h-full object-contain p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-xs">JavaScript</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technology Features */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold">
              <span>🚀</span>
              <span>Modern Development Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                🚀 Our Latest Work
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore some of our latest and greatest work showcasing
                innovative solutions and cutting-edge technologies
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 block"
              >
                <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-800 h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="relative bg-white dark:bg-slate-900 p-6">
                  <p className="text-sm font-semibold text-primary mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    View Project
                    <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-center mb-6">
              <div className="inline-block px-6 py-3 rounded-full bg-green-100 text-green-700 font-bold text-sm border-2 border-green-300 mb-3">
                🎉 LIMITED TIME: FREE 2-Page Website!
              </div>
              <br />
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                💰 Transparent Pricing
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Affordable Solutions for Everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality development services at competitive prices with no hidden costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 text-center hover:shadow-lg transition-all border-2 border-green-200 dark:border-green-800 relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full px-2">
                <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                  <Countdown className="justify-center text-xs" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
                <div className="text-lg font-semibold text-foreground mb-2">2-Page Website</div>
                <div className="text-sm text-muted-foreground mb-4">2 Pages • Responsive • SEO Ready</div>
                <div className="text-xs text-muted-foreground">Perfect for: Personal Portfolio, Landing Page</div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-border">
              <div className="text-3xl font-bold text-primary mb-2">₹4,499</div>
              <div className="text-lg font-semibold text-foreground mb-2">Static Website</div>
              <div className="text-sm text-muted-foreground mb-4">8 Pages • Responsive • SEO Ready</div>
              <div className="text-xs text-muted-foreground">Perfect for: Lawyers, Doctors, Restaurants</div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-green-600 mb-2">₹7,999</div>
              <div className="text-lg font-semibold text-foreground mb-2">Android App</div>
              <div className="text-sm text-muted-foreground mb-2">8 Screens • Backend • Play Store Ready</div>
              <div className="text-xs font-bold text-green-600 mb-2">FREE Play Store Publish!</div>
              <div className="text-xs text-muted-foreground">Perfect for: E-commerce, Booking Apps</div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-purple-600 mb-2">₹8,499</div>
              <div className="text-lg font-semibold text-foreground mb-2">iOS App</div>
              <div className="text-sm text-muted-foreground mb-2">8 Screens • Backend • App Store Ready</div>
              <div className="text-xs text-muted-foreground">Perfect for: E-commerce, Social Apps</div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-border">
              <div className="text-3xl font-bold text-primary mb-2">₹14,999</div>
              <div className="text-lg font-semibold text-foreground mb-2">Complete Package</div>
              <div className="text-sm text-muted-foreground mb-4">App + Website + Software</div>
              <div className="text-xs text-muted-foreground">Complete Business Solution</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2 mr-4"
            >
              View All Pricing
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={handleContactClick}
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Get Custom Quote
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
            Our team is ready to bring your vision to life.
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Contact Us Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
