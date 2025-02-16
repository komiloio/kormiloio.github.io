import React from 'react';
import { Anchor, Brain, Workflow, Building2, Users2, Code2, ArrowRight, Send, BookOpen, TrendingUp, Lightbulb, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-blue-600/95 backdrop-blur-md z-50 border-b border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Anchor className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Kormilo</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a>
              <a href="#case-studies" className="text-blue-100 hover:text-white transition-colors">Case Studies</a>
              <a href="#insights" className="text-blue-100 hover:text-white transition-colors">Insights</a>
              <a href="#about" className="text-blue-100 hover:text-white transition-colors">About</a>
            </div>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              Shift from Digital Transformation to AI-Driven Transformation
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We help businesses implement AI beyond LLMs—optimizing processes, workflows, and decision-making.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
              <span>Start Your AI Transformation Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">How We Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain />}
              title="AI Strategy & Implementation"
              description="We craft AI-driven strategies that align with your business goals, ensuring AI isn't just a tool, but a game-changer."
            />
            <ServiceCard
              icon={<Workflow />}
              title="AI-Powered Process Automation"
              description="Eliminate inefficiencies and streamline operations with intelligent automation."
            />
            <ServiceCard
              icon={<Building2 />}
              title="Enterprise AI Integration"
              description="Seamlessly embed AI solutions into your existing technology stack for maximum impact."
            />
            <ServiceCard
              icon={<Users2 />}
              title="Change Enablement with AI"
              description="Ensure your teams successfully adopt AI with structured change management."
            />
            <ServiceCard
              icon={<Code2 />}
              title="Custom AI Solutions"
              description="Go beyond off-the-shelf AI—our solutions are tailored to your unique challenges."
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              title="Global Tech Company"
              description="Implemented AI-driven predictive maintenance, reducing downtime by 45%"
            />
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
              title="Financial Services Leader"
              description="Automated risk assessment with AI, improving accuracy by 60%"
            />
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
              title="Healthcare Provider"
              description="Deployed AI diagnostics assistant, reducing wait times by 30%"
            />
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-blue-600">Stay ahead with expert articles on AI trends, strategies, and best practices.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <InsightCard
              icon={<TrendingUp />}
              category="AI Trends"
              title="Beyond ChatGPT: The Future of Enterprise AI in 2025"
              preview="Discover how enterprises are moving beyond basic LLM implementations to create transformative AI solutions."
              readTime="8 min read"
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
            />
            <InsightCard
              icon={<Lightbulb />}
              category="Strategy"
              title="Building an AI-First Organization: A Leadership Guide"
              preview="Learn the key principles for successfully transforming your organization's culture and operations around AI."
              readTime="12 min read"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            />
            <InsightCard
              icon={<BookOpen />}
              category="Case Study"
              title="AI Transformation in Manufacturing: A Success Story"
              preview="How a leading manufacturer achieved 300% ROI through strategic AI implementation."
              readTime="10 min read"
              image="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          
          <div className="text-center">
            <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <span>View All Insights</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Ready to transform with AI?</h2>
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-900">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-blue-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-900">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-blue-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-blue-900">Company</label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-md border-blue-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-blue-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
      <p className="text-blue-600">{description}</p>
    </div>
  );
}

function CaseStudyCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-blue-600">{description}</p>
      </div>
    </div>
  );
}

function InsightCard({ icon, category, title, preview, readTime, image }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-blue-100 hover:shadow-md transition-all group hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
            {icon}
          </div>
          <span className="text-sm font-medium text-blue-600">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-blue-900 line-clamp-2">{title}</h3>
        <p className="text-blue-600 mb-4 line-clamp-3">{preview}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-500">{readTime}</span>
          <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-1">
            <span>Read More</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
