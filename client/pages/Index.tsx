import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import {
  Code2,
  Smartphone,
  Palette,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build scalable, high-performance web applications with cutting-edge technologies. From startups to enterprises, we deliver solutions tailored to your needs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Create intuitive mobile and cross-platform apps that engage users and drive business growth. Native and hybrid solutions available.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design beautiful, user-centric interfaces that convert. We combine aesthetics with functionality to create memorable experiences.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimize your digital products for speed and efficiency. Lightning-fast load times and smooth interactions are our standard.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Consulting",
    description:
      "Get expert guidance on your technology roadmap. We help you make informed decisions for your digital transformation journey.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Scale your product strategically. Data-driven insights and proven methodologies to accelerate your business growth.",
    color: "from-indigo-500 to-blue-500",
  },
];

const projects = [
  {
    id: 1,
    title: "Surbhi IP Studio",
    category: "Web Development",
    description:
      "Professional portfolio and services website for creative studio",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop",
    link: "https://surbhiipstudio.com",
  },
  {
    id: 2,
    title: "Portfolio Android App",
    category: "App Development",
    description:
      "Beautiful Android portfolio app showcasing projects and achievements",
    image:
      "https://images.unsplash.com/photo-1563986768609-322d6d3d3180?w=500&h=300&fit=crop",
    link: "https://porfoli-android.vercel.app/",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Comprehensive analytics dashboard for enterprise clients",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    link: "#",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <Hero3D />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                ✨ Transforming Ideas into Digital Reality
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Build Tomorrow's Digital
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              At Bitminds, we craft exceptional web and mobile applications that
              drive business growth. From concept to deployment, we deliver
              high-quality, scalable solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                Start Your Project
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">5+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore some of our latest and greatest work
              </p>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg"
            >
              View All Projects
              <ArrowRight size={24} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
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
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            Start Your Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
