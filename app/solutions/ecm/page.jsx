'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TabsSection from '@/components/TabsSection';
import PageHero from '@/components/PageHero';
import InfoSection from '@/components/InfoSection';

export default function ECMPage() {
  const tabsData = [
    {
      title: 'Document Management',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Say goodbye to document chaos
            </h2>
            <p className="text-gray-700 text-base">
              Tired of spending hours searching for lost emails, contracts, or
              invoices? Our ECM solutions provide a centralized repository for
              all your documents, accessible from anywhere, anytime.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Sleep soundly with robust security
            </h2>
            <p className="text-gray-700 text-base">
              Our ECM solutions prioritize information security with granular
              access controls, encryption, and audit trails. Rest assured your
              sensitive data is always protected.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero5.jpg',
      header: 'Document Management'
    },
    {
      title: 'Capture & Imaging',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Unleash the power of collaboration{' '}
            </h2>
            <p className="text-gray-700 text-base">
              Foster seamless teamwork with real-time co-editing features and
              secure document sharing. Eliminate version control issues and
              ensure everyone is always on the same page.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Stay compliant with ease{' '}
            </h2>
            <p className="text-gray-700 text-base">
              Adhere to industry regulations and information governance policies
              with built-in compliance features. Our ECM solutions help you
              manage retention schedules, eDiscovery requests, and user access
              controls.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero6.jpg',
      header: 'Capture & Imaging'
    },
    {
      title: 'Workflow Automation',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Boost productivity with automation
            </h2>
            <p className="text-gray-700 text-base">
              Automate repetitive tasks like document routing, approval
              workflows, and retention schedules. Free up your team’s valuable
              time to focus on what matters most.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Reduce Costs and Improve ROI{' '}
            </h2>
            <p className="text-gray-700 text-base">
              ECM streamlines workflows, automates tasks, and centralizes
              documents, leading to cost savings and a positive return on
              investment.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero2.jpg',
      header: 'Document Management'
    }
  ];

  return (
    <>
      <PageHero
        title="Enterprise Content Management (ECM)"
        breadcrumb=""
        subtitle="Imagine a workplace where finding the right document is a breeze, collaboration is seamless, and information security is never a concern. That’s the power of Enterprise Content Management (ECM) from MITworx."
        image="/images/hero6.jpg"
      />
      <main className="bg-gray-50 text-gray-800">
        <InfoSection
          title="Empowering Innovation in the Middle East"
          paragraphs={[
            'Stop wasting time searching for lost documents or dealing with version control headaches. Our ECM solutions empower your business to:  '
          ]}
          listItems={[
            'Centralize all your documents in a secure, easily accessible location.',
            'Streamline workflows and boost efficiency with automated processes.',
            'Collaborate effortlessly with real-time document sharing and editing tools.',
            'Ensure compliance with industry regulations and information security best practices.'
          ]}
          imageSrc="/images/hero1.jpg"
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
