"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Star, 
  Zap, 
  Shield, 
  Crown, 
  Rocket,
  ArrowRight,
  Phone,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  Clock,
  Target
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/form-handlers";

const plans = [
  {
    name: "Starter",
    price: "$4",
    unit: "per hour",
    originalPrice: "$8",
    description: "Perfect for small businesses ready to scale their outreach",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
    badge: "SAVE 50%",
    badgeColor: "green",
    stats: "2-5 hours/day",
    features: [
      "Native English-Speaking Agents",
      "Proven Call Scripts & Objection Handling",
      "Lead List Management & Qualification",
      "Daily Performance Reports",
      "Email & Chat Support",
      "Industry-Specific Training"
    ],
    highlights: [
      "Quick 24-hour setup",
      "85% contact rate guarantee",
      "No long-term contracts"
    ]
  },
  {
    name: "Professional",
    price: "$6",
    unit: "per hour",
    originalPrice: "$12",
    description: "Most popular choice for serious businesses scaling fast",
    icon: Crown,
    gradient: "from-purple-500 to-indigo-500",
    color: "purple",
    badge: "MOST POPULAR",
    badgeColor: "purple",
    stats: "5-10 hours/day",
    highlighted: true,
    features: [
      "Everything in Starter, plus:",
      "Dedicated Account Manager",
      "Custom Call Scripts & A/B Testing",
      "Call Recording & Quality Assurance",
      "Advanced CRM Integration",
      "Priority Support & Slack Channel",
      "Weekly Strategy & Optimization Calls",
      "Real-time Performance Dashboard"
    ],
    highlights: [
      "40% higher conversion rates",
      "Dedicated success manager",
      "Advanced analytics included"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "pricing",
    description: "For enterprise teams needing maximum results & customization",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
    color: "orange",
    badge: "ENTERPRISE",
    badgeColor: "orange", 
    stats: "Unlimited scale",
    features: [
      "Everything in Professional, plus:",
      "Multiple Dedicated Teams (10+ agents)",
      "Custom Reporting Dashboard & API",
      "White-label Solutions Available",
      "24/7 Priority Support & Success Team",
      "Monthly C-Level Strategy Reviews",
      "Custom Training & Onboarding Programs",
      "Multi-campaign Management"
    ],
    highlights: [
      "Unlimited scaling potential",
      "C-level strategic support",
      "Custom integrations included"
    ]
  }
];

const testimonials = [
  { name: "Sarah M.", role: "Real Estate Broker", rating: 5, text: "Increased my listings by 300% in just 2 months!" },
  { name: "Mike R.", role: "Solar Sales Director", rating: 5, text: "Best ROI I've ever seen from any marketing channel." },
  { name: "Jennifer L.", role: "Healthcare Admin", rating: 5, text: "Our appointment booking rate went from 40% to 85%." }
];

const pricingStats = [
  { number: "4x", label: "Average ROI" },
  { number: "85%", label: "Contact Rate" },
  { number: "24hr", label: "Setup Time" },
  { number: "92%", label: "Client Satisfaction" }
];

export function PricingSection() {
  const handleContactClick = (planName = "") => {
    sendToWhatsApp({ type: "Pricing", plan: planName });
  };

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 dark:from-gray-900 dark:via-gray-900/50 dark:to-blue-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="container relative">
        {/* Enhanced Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 px-6 py-3 rounded-full mb-6 border border-green-200 dark:border-green-800/50"
          >
            <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">
              NO CONTRACTS • PAY AS YOU GO
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Simple Pricing,{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Maximum Results
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Start with zero upfront costs. Pay only for results. Scale up or down anytime. 
            Join 300+ businesses already growing with our elite cold calling teams.
          </motion.p>

          {/* Pricing Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto"
          >
            {pricingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 ${
                plan.highlighted ? "scale-105 ring-2 ring-purple-500/50 shadow-purple-500/20" : "hover:scale-[1.02]"
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ {plan.badge}
                </div>
              )}

              {/* Plan Badge */}
              {!plan.highlighted && (
                <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${plan.gradient} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}>
                  {plan.badge}
                </div>
              )}
              
              {/* Icon with Enhanced Design */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} p-1 shadow-lg`}>
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <plan.icon className="h-8 w-8 text-gray-700 dark:text-gray-200" />
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {plan.stats}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {plan.description}
                  </p>
                </div>
                
                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">{plan.unit}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">{plan.originalPrice}</span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                      Save 50% - Limited Time Offer!
                    </div>
                  )}
                </div>

                {/* Key Highlights */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 space-y-2">
                  {plan.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* Feature List */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Button 
                    onClick={() => handleContactClick(plan.name)}
                    className={`w-full h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      plan.highlighted 
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white" 
                        : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                    }`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Start {plan.name} Plan
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    onClick={() => handleContactClick(`${plan.name} Demo`)}
                    className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    View Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Client Success Stories</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Join 300+ Happy Clients
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-6"
            >
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Ready to Start in 24 Hours</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to 4x Your Sales?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already scaling with our expert cold calling teams. 
              No contracts, no risk, just results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => handleContactClick("Free Consultation")}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Start Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleContactClick("Live Demo")}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 transition-all duration-300"
              >
                Watch Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">No Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm">24hr Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Guaranteed Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}