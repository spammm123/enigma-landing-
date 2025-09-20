"use client"

import { motion } from "framer-motion"
import { Check, Heart, Users, Building2 } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Individual",
    price: "Free",
    description: "Perfect for personal medication management",
    features: [
      "Up to 5 medications",
      "Basic reminders",
      "Medication history",
      "Community support",
      "Mobile app access",
    ],
    popular: false,
    cta: "Get Started",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    name: "Family Plan",
    monthlyPrice: 19,
    annualPrice: 15,
    description: "For families managing multiple health profiles",
    features: [
      "Unlimited medications",
      "Care circle integration",
      "Smart scheduling",
      "Health insights",
      "Priority support",
      "Family dashboard",
      "Emergency contacts",
    ],
    popular: true,
    cta: "Start Free Trial",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Healthcare Provider",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For healthcare institutions and providers",
    features: [
      "Everything in Family Plan",
      "EHR integration",
      "Patient management",
      "Clinical analytics",
      "HIPAA compliance",
      "Dedicated support",
      "Custom workflows",
    ],
    popular: false,
    cta: "Contact Sales",
    icon: <Building2 className="w-5 h-5" />,
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="relative py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Pricing Plans</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Choose Your Healthcare Plan</h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start managing medications intelligently today. Upgrade anytime as your healthcare needs grow.
          </p>

          {/* Monthly/Annual Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 p-1 bg-muted rounded-full border border-border w-fit mx-auto"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                isAnnual
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-transparent border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">{plan.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  {plan.price ? (
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-foreground">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground text-lg">{isAnnual ? "/year" : "/month"}</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40"
                    : "bg-muted text-foreground border border-border hover:bg-primary/10"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Need a custom healthcare solution? We're here to help.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Contact our healthcare team →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
