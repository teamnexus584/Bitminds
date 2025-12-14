import { Link } from "react-router-dom";
import { Linkedin, Mail, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-sm font-mono">
                8B
              </div>
              <span className="font-bold text-lg">8bitdev</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your ideas into powerful digital solutions with modern
              technology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="hover:text-primary transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ui-ux-design"
                  className="hover:text-primary transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consulting"
                  className="hover:text-primary transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-3 mb-4"
            >
              <input 
                type="hidden" 
                name="access_key" 
                value="d647031f-41b9-4c08-8c9f-16c84f84fc7e"
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary text-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={3}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary text-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-2 mb-4">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+918521080076"
                  className="hover:text-primary transition-colors"
                >
                  +91 8521080076
                </a>
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:admin@8bitsdev.click"
                  className="hover:text-primary transition-colors"
                >
                  admin@8bitsdev.click
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.remit.alumni"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="Our App on Play Store"
              >
                <Smartphone size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/8bit-devs-484ab0398/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:admin@8bitsdev.click"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Team Information */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-white mb-3">Leadership Team</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-sm font-semibold text-primary">CFO (Chief Financial Officer)</p>
                <p className="text-sm text-gray-300">Atul Raj</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-secondary">CMO (Chief Marketing Officer)</p>
                <p className="text-sm text-gray-300">Aaditya Kumar Jha</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2025 8bitdev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
