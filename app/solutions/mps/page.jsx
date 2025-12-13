'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TabsSection from '@/components/TabsSection';
import PageHero from '@/components/PageHero';
import InfoSection from '@/components/InfoSection';

export default function MPSPage() {
  const tabsData = [
    {
      title: 'Print Less, Pay Less, Gain More',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Reduced Printing Costs
            </h2>
            <p className="text-gray-700 text-base">
              Save up to 30% on overall printing expenses through optimized
              workflows and cost-control measures.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Enhanced Security
            </h2>
            <p className="text-gray-700 text-base">
              Protect sensitive data with advanced printing security features.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero1.jpg',
      header: 'Print Less, Pay Less, Gain More'
    },
    {
      title: 'Stop Printing Headaches',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Increased Efficiency
            </h2>
            <p className="text-gray-700 text-base">
              Eliminate manual toner ordering and printer maintenance, freeing
              up your IT staff for more strategic tasks.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Peace of Mind
            </h2>
            <p className="text-gray-700 text-base">
              Gain peace of mind knowing your printing environment is expertly
              managed, allowing you to focus on core business operations.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero6.jpg',
      header: 'Stop Printing Headaches'
    },
    {
      title: 'Print Smarter, Save Smarter',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Improved Productivity
            </h2>
            <p className="text-gray-700 text-base">
              Minimize printer downtime with proactive service and automatic
              supply replenishment.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Environmental Sustainability
            </h2>
            <p className="text-gray-700 text-base">
              Reduce your environmental impact with our eco-friendly printing
              practices and responsible toner cartridge recycling programs.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero2.jpg',
      header: 'Print Smarter, Save Smarter'
    }
  ];

  return (
    <>
      <PageHero
        title="Managed Print Services (MPS) "
        breadcrumb=""
        subtitle="ITworx offers a comprehensive Managed Print Services (MPS) program designed to take the burden off your shoulders and optimize your printing environment"
        image="/images/hero2.jpg"
      />
      <main className="bg-gray-50 text-gray-800">
        <InfoSection
          title="Managed Print Services (MPS)"
          listItems={[
            'Fleet Assessment & Optimization: We analyze your current printing needs and recommend the right mix of devices to maximize efficiency and minimize costs.',
            'Cost Control & Transparency: Enjoy predictable monthly billing with no hidden fees. We ensure you only pay for the printing you actually use.',
            'Automatic Toner & Supply Replenishment: Never run out of ink or toner again. We proactively monitor supply levels and automatically deliver replacements before you experience any downtime.',
            'On-site Service & Support: Our team of technicians is readily available to address any printer issues promptly, minimizing downtime and keeping your productivity flowing.',
            'Enhanced Document Security: We implement advanced security features to safeguard sensitive information printed on your devices.',
            'Sustainability Initiatives: Reduce your environmental impact with our eco-friendly printing practices and responsible toner cartridge recycling programs.'
          ]}
          imageSrc="/images/hero3.jpg"
          buttons={[{ text: 'Free Consultation', link: '/contact' }]}
        />
        <section
          style={{ backgroundImage: `url('/images/background.png')` }}
          className="py-24 bg-cover bg-center bg-no-repeat"
        >
          <h3 className="  mb-1 uppercase font-bold text-lg tracking-wide text-center text-white">
            How We Can Help?
          </h3>
          <p className="max-w-3xl mx-auto text-center text-lg mb-1 leading-relaxed text-white">
            At MITworx, we empower businesses with the power of technology.
          </p>
          <TabsSection tabs={tabsData} />
        </section>

        {/* Final Call */}
        <section className="py-16 text-center px-6 bg-blue-900 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact us today
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Discover how our ECM solutions can empower your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </>
  );
}
