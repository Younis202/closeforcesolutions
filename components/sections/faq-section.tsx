"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  DollarSign, 
  Building2, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Headphones,
  Clock,
  Users,
  Award,
  Zap,
  CheckCircle
} from "lucide-react";

const faqCategories = [
  {
    id: "pricing",
    label: "Pricing & Plans",
    icon: DollarSign,
    color: "text-emerald-500"
  },
  {
    id: "service",
    label: "Service Details",
    icon: Building2,
    color: "text-blue-500"
  },
  {
    id: "quality",
    label: "Quality & Support",
    icon: Shield,
    color: "text-purple-500"
  }
];

const faqs = [
  {
    category: "pricing",
    question: "How much does your service cost?",
    answer: "Our flexible pricing starts at just $4 per hour with our Starter plan. We offer transparent, volume-based pricing with no hidden fees, setup costs, or long-term contracts. Scale up or down anytime based on your needs.",
    highlight: "Starting at $4/hour"
  },
  {
    category: "pricing",
    question: "Are there any setup fees or contracts?",
    answer: "Absolutely not! We believe in earning your business through results, not contracts. Zero setup fees, no minimum commitments, and you can adjust or cancel anytime. Pay only for the hours worked.",
    highlight: "No contracts required"
  },
  {
    category: "service",
    question: "What industries do you specialize in?",
    answer: "We're experts across Real Estate, Solar, Healthcare, Retail, Education, and B2B Services. Our agents receive industry-specific training, learning your terminology, compliance requirements, and best practices for maximum conversion rates.",
    highlight: "6+ specialized industries"
  },
  {
    category: "service",
    question: "Can I scale my calling team instantly?",
    answer: "Yes! Need 2 callers today and 20 tomorrow? No problem. Our flexible infrastructure allows instant scaling up or down. Perfect for seasonal campaigns, product launches, or varying call volumes without any penalties.",
    highlight: "Instant scaling"
  },
  {
    category: "service",
    question: "How do you handle my leads and data?",
    answer: "Your data is secure with bank-level encryption and GDPR compliance. We integrate seamlessly with popular CRMs, provide detailed daily reports, and offer real-time dashboards showing calls made, conversations, appointments set, and ROI metrics.",
    highlight: "Secure & compliant"
  },
  {
    category: "quality",
    question: "How do you ensure exceptional call quality?",
    answer: "Every agent undergoes 40+ hours of training, regular quality assessments, and live call monitoring. We maintain 95%+ client satisfaction through rigorous hiring (only 3% of applicants qualify), ongoing coaching, and performance bonuses tied to your success.",
    highlight: "95%+ satisfaction rate"
  },
  {
    category: "quality",
    question: "What level of support do I get?",
    answer: "You'll have a dedicated account manager overseeing your campaigns, providing weekly strategy calls and real-time support. Plus 24/7 technical support, priority response times, and direct access to campaign optimization specialists.",
    highlight: "Dedicated account manager"
  },
  {
    category: "quality",
    question: "How quickly can we get started?",
    answer: "We can have your campaign live within 24-48 hours! This includes agent assignment, script development, system integration, and initial training. Rush setup available for urgent campaigns at no extra cost.",
    highlight: "24-48 hour setup"
  }
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("pricing");
  
  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Everything You Need to Know
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Get instant answers about our cold calling services, pricing, and how we can 
            <span className="text-primary font-semibold"> transform your sales process</span>
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-background border border-border hover:border-primary/50 hover:bg-muted'
              }`}
            >
              <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-primary-foreground' : category.color}`} />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group-hover:text-primary transition-colors">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-left font-semibold">{faq.question}</span>
                      {faq.highlight && (
                        <span className="ml-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full whitespace-nowrap">
                          {faq.highlight}
                        </span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="flex items-start gap-3 pt-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full mb-4">
            <Headphones className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Still have questions?</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you get started with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-3 border border-border rounded-full font-semibold hover:bg-muted transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}