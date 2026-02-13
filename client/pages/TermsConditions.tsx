import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

export default function TermsConditions() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <FileText size={16} />
              Terms & Conditions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Scale size={24} className="text-primary" />
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by 8bitdev ("we," "our," or "us") through our website 
                <strong> www.8bitsdev.click</strong> or mobile applications, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, you must not use our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground mb-4">
                8bitdev provides digital development services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>UI/UX design services</li>
                <li>Cloud infrastructure and deployment</li>
                <li>IT consulting and technical support</li>
                <li>Database design and optimization</li>
                <li>Cybersecurity services</li>
              </ul>
            </div>

            {/* User Obligations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle size={24} className="text-primary" />
                User Obligations
              </h2>
              <p className="text-muted-foreground mb-4">When using our services, you agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Content</h3>
              <p className="text-muted-foreground mb-4">
                All content, features, and functionality on our website and applications, including but not limited to 
                text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of 8bitdev 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Client Projects</h3>
              <p className="text-muted-foreground">
                Upon full payment, clients receive ownership rights to the deliverables as specified in the project agreement. 
                We retain the right to showcase completed projects in our portfolio unless otherwise agreed in writing.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Payment terms are specified in individual project agreements</li>
                <li>Deposits are typically required before project commencement</li>
                <li>Final payment is due upon project completion and delivery</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with prior notice</li>
              </ul>
            </div>

            {/* Project Delivery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Project Delivery & Timelines</h2>
              <p className="text-muted-foreground mb-4">
                We strive to meet agreed-upon deadlines. However, timelines may be affected by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Delays in client feedback or content provision</li>
                <li>Scope changes or additional feature requests</li>
                <li>Technical challenges or third-party dependencies</li>
                <li>Force majeure events beyond our control</li>
              </ul>
            </div>

            {/* Warranties & Disclaimers */}
            <div className="mb-12 bg-amber-50 dark:bg-amber-950/20 rounded-lg p-6 border-2 border-amber-200 dark:border-amber-800">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle size={24} className="text-amber-600" />
                Warranties & Disclaimers
              </h2>
              <p className="text-muted-foreground mb-4">
                Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Uninterrupted or error-free service</li>
                <li>Specific results or outcomes</li>
                <li>Compatibility with all systems or devices</li>
                <li>Freedom from viruses or harmful components</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, 8bitdev shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to loss of profits, data, 
                or business opportunities arising from the use or inability to use our services.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Breach of these Terms and Conditions</li>
                <li>Non-payment of fees</li>
                <li>Fraudulent or illegal activities</li>
                <li>Any conduct that harms our business or reputation</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                immediately upon posting to our website. Your continued use of our services after changes constitutes 
                acceptance of the modified terms.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: <a href="mailto:admin@8bitsdev.click" className="text-primary hover:underline">admin@8bitsdev.click</a></p>
                <p>Phone: <a href="tel:+918521080076" className="text-primary hover:underline">+91 8521080076</a></p>
                <p>Website: <a href="https://www.8bitsdev.click" className="text-primary hover:underline">www.8bitsdev.click</a></p>
              </div>
            </div>

          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link 
                to="/" 
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                ← Back to Home
              </Link>
              <Link 
                to="/privacy-policy" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                View Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
