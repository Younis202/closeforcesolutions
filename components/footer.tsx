'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Building2,
  Users,
  Clock,
  BarChart,
  Headphones,
  Globe,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from './animations/fade-in';
import { Button } from './ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const quickLinks = [
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/services', label: 'Our Services', icon: Building2 },
  { href: '/industries', label: 'Industries', icon: Globe },
  { href: '/pricing', label: 'Pricing', icon: BarChart },
  { href: '/contact', label: 'Contact', icon: MessageCircle },
  { href: '/blog', label: 'Resources', icon: Star }
];

const serviceHighlights = [
  { icon: Users, label: 'Expert Agents', desc: 'Trained professionals' },
  { icon: Clock, label: '24/7 Support', desc: 'Always available' },
  { icon: BarChart, label: 'Real-Time Analytics', desc: 'Live performance data' },
  { icon: Shield, label: 'Data Security', desc: 'Bank-level protection' },
  { icon: TrendingUp, label: 'Proven Results', desc: '95% satisfaction rate' },
  { icon: Zap, label: 'Quick Setup', desc: '24-48 hour launch' }
];

const industries = [
  { name: 'Real Estate', href: '/industries/real-estate', growth: '+40%' },
  { name: 'Solar Energy', href: '/industries/solar', growth: '+65%' },
  { name: 'Healthcare', href: '/industries/healthcare', growth: '+30%' },
  { name: 'B2B Services', href: '/industries/b2b', growth: '+55%' },
  { name: 'Education', href: '/industries/education', growth: '+45%' },
  { name: 'Retail', href: '/industries/retail', growth: '+35%' }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <FadeIn>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Company Branding & CTA - Takes more space */}
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="inline-block">
                <Image
                  src="https://ik.imagekit.io/06fdnzilf/IMG-20250529-WA0002-Photoroom.png?updatedAt=1748549578131"
                  alt="Close Force Solutions"
                  width={220}
                  height={220}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Transform Your Sales with Professional Cold Calling
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join 500+ businesses that trust us to generate quality leads and boost their revenue. 
                  Start your campaign in 24 hours with zero setup fees.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-500/5 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">95%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Start Today</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Get your free consultation and custom strategy session
                </p>
                <div className="space-y-3">
                  <Button className="w-full group">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Pricing Plans
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <link.icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries with Growth Stats */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-primary" />
                Industries We Serve
              </h4>
              <div className="space-y-3">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {industry.name}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">
                      {industry.growth}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Features & Contact */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Why Choose Us
              </h4>
              
              {/* Service Highlights */}
              <div className="grid grid-cols-1 gap-3">
                {serviceHighlights.map((feature) => (
                  <div key={feature.label} className="flex items-center p-3 rounded-lg bg-background/50 border border-border/50">
                    <feature.icon className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-foreground">{feature.label}</div>
                      <div className="text-xs text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <h5 className="font-semibold text-foreground flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  Get In Touch
                </h5>
                <div className="space-y-3">
                  <a
                    href="tel:+201013476272"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span className="group-hover:underline">+201013476272</span>
                  </a>
                  <a
                    href="mailto:info@closeforcesolutions.com"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span className="group-hover:underline">info@closeforcesolutions.com</span>
                  </a>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Cairo, Egypt
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">Follow us:</span>
              {[
                { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
                { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
                { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-10 w-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:text-white transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Close Force Solutions. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs text-emerald-600 font-medium">Trusted & Verified</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                {[
                  { href: '/privacy', label: 'Privacy Policy' },
                  { href: '/terms', label: 'Terms of Service' },
                  { href: '/faq', label: 'FAQ' },
                  { href: '/careers', label: 'Careers' }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}