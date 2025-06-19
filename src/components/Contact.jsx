'use client';

import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, Send, Loader2 } from 'lucide-react';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    isLoading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Sending message...',
      isLoading: true
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! You will receive a confirmation email shortly.',
          isLoading: false
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.',
        isLoading: false
      });
    }
  };

  return (
    <section id="contact" className="my-16 md:my-24 md:py-2 realtive">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16 md:mb-20">Get In Touch</h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Contact Info and Form */}
          <div className="lg:col-span-2 space-y-8 h-full flex flex-col">
            {/* Contact Information */}
            <div className="glass-effect rounded-xl p-8 animate-slide-up flex-none">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {/* Email contact group */}
                <div className="flex items-center group">
                  <div className="p-4 rounded-xl mr-4 bg-primary/10 dark:bg-primary/5 
                    group-hover:bg-primary/20 dark:group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Email</p>
                    <a href="mailto:devesh1217@yahoo.com"
                      className="text-primary hover:text-primary/80 font-medium transition-colors">
                      devesh1217@yahoo.com
                    </a>
                  </div>
                </div>

                {/* Phone contact group */}
                {/* <div className="flex items-center group">
                  <div className="p-4 rounded-xl mr-4 bg-primary/10 dark:bg-primary/5 
                    group-hover:bg-primary/20 dark:group-hover:bg-primary/10 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Phone</p>
                    <a href="tel:+1234567890" 
                      className="text-primary hover:text-primary/80 font-medium transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div> */}

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Quick Connect</h4>
                  <div className="flex flex-wrap justify-between md:justify-start gap-0 md:gap-4">
                    {[
                      { icon: Linkedin, href: "https://www.linkedin.com/in/devesh1217/", label: "LinkedIn" },
                      { icon: Github, href: "https://github.com/devesh1217", label: "GitHub" },
                      {
                        icon: SiLeetcode,
                        href: "https://leetcode.com/devesh1217/",
                        label: "LeetCode",
                        customClass: "text-[1.3rem]" // Adjust size for better alignment
                      },
                      {
                        icon: SiCodeforces,
                        href: "https://codeforces.com/profile/devesh1217",
                        label: "CodeForces",
                        customClass: "text-[1.3rem]" // Adjust size for better alignment
                      },
                      { icon: Instagram, href: "https://www.instagram.com/devesh_1217", label: "Instagram" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:p-4 rounded-xl bg-primary/10 dark:bg-primary/5 
                          hover:bg-primary/20 dark:hover:bg-primary/10
                          transform hover:scale-105 transition-all duration-300
                          group relative"
                        aria-label={social.label}
                      >
                        <social.icon className={`text-primary ${social.customClass || 'h-6 w-6'}`} />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 
                          bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded 
                          opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Make it fill remaining space */}
            <div className="glass-effect rounded-xl p-8 animate-slide-up flex-1" style={{ animationDelay: '0.1s' }}>
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-8">Send Me a Message</h3>



                <div className="space-y-6">
                  {[
                    { label: "Name", type: "text", name: "name" },
                    { label: "Email", type: "email", name: "email" },
                    { label: "Subject", type: "text", name: "subject" }
                  ].map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 
                          border border-gray-200 dark:border-gray-700
                          focus:ring-2 focus:ring-primary/50 focus:border-primary
                          dark:text-white transition-all duration-300"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 
                        border border-gray-200 dark:border-gray-700
                        focus:ring-2 focus:ring-primary/50 focus:border-primary
                        dark:text-white transition-all duration-300"
                    ></textarea>
                  </div>

                  {formStatus.submitted && (
                    <div className={`p-4 mb-6 rounded-xl ${formStatus.success
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                        : 'bg-red-500/10 text-red-600 dark:text-red-400'
                      }`}>
                      {formStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus.isLoading}
                    className={`w-full bg-gray-400/10 text-white font-medium py-3 px-6 rounded-xl
                      hover:bg-gray-400/30 transform hover:scale-[1.02]
                      transition-all duration-300 flex items-center justify-center gap-2
                      ${formStatus.isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:cursor-pointer'}`}
                  >
                    {formStatus.isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                    {formStatus.isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Social Activity */}
          <div className="lg:col-span-1 space-y-8 h-full flex flex-col sticky top-24">
            {/* LinkedIn Preview */}
            <div className="glass-effect rounded-xl p-6 animate-slide-up flex-none" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-primary" />
                LinkedIn Activity
              </h3>
              <div className="rounded-lg overflow-hidden bg-white hover:scale-[1.02] transition-transform">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7332624036520165376"
                  height="250"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Featured"
                  className="bg-white"
                />
              </div>
            </div>

            {/* GitHub Activity */}
            <div className="glass-effect rounded-xl p-6 animate-slide-up flex-none overflow-hidden" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                GitHub Activity
              </h3>

              <div className="space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin pr-2">
                {/* GitHub Stats Cards */}
                {[
                  {
                    src: "https://github-readme-stats.vercel.app/api?username=devesh1217&show_icons=true&theme=transparent",
                    alt: "GitHub Stats"
                  },
                  {
                    src: "https://github-readme-stats.vercel.app/api/top-langs/?username=devesh1217&layout=compact&theme=transparent",
                    alt: "Most Used Languages"
                  },
                  {
                    src: "https://github-contribution-stats.vercel.app/api/?username=devesh1217",
                    alt: "Contribution Graph"
                  }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden bg-white/80 dark:bg-gray-900/80 
                      hover:scale-[1.02] transition-transform"
                  >
                    <img
                      src={stat.src}
                      alt={stat.alt}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}