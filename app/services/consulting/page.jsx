import Link from 'next/link';
import TabsSection from '@/components/TabsSection';
import PageHero from '@/components/PageHero';
import InfoSection from '@/components/InfoSection';

export default function ConsultingPage() {
  const tabsData = [
    {
      title: 'Expert Advice for Business Growth ',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Increased Revenue
            </h2>
            <p className="text-gray-700 text-base">
              Our data-driven strategies help you identify new opportunities and
              optimize your sales funnel.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Sleep soundly with robust security
            </h2>
            <p className="text-gray-700 text-base">
              Gain a strategic edge over your competition through innovative
              solutions and expert guidance.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero5.jpg',
      header: 'Expert Advice for Business Growth'
    },
    {
      title: 'Find Hidden Profits in Your Business',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Improved Efficiency
            </h2>
            <p className="text-gray-700 text-base">
              Streamlined processes and optimized workflows lead to significant
              cost savings and increased productivity.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Peace of Mind
            </h2>
            <p className="text-gray-700 text-base">
              We handle the complexities of business strategy, so you can focus
              on running your day-to-day operations with confidence and clarity.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero6.jpg',
      header: 'Find Hidden Profits in Your Business'
    },
    {
      title: 'Workflow Automation',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Enhanced Profitability
            </h2>
            <p className="text-gray-700 text-base">
              We empower you to make informed financial decisions that maximize
              profitability.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Sustainable Growth
            </h2>
            <p className="text-gray-700 text-base">
              We partner with you to build a solid foundation for long-term
              success.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero3.jpg',
      header: 'Workflow Automation'
    }
  ];

  return (
    <>
      <PageHero
        title="Business Consulting"
        breadcrumb=""
        subtitle="we are passionate about helping businesses thrive. We offer a comprehensive suite of consulting services designed to empower you to achieve your goals. Our team of experienced professionals has a proven track record of success."
        image="/images/hero3.jpg"
      />
      <main className="bg-gray-50 text-gray-800">
        <InfoSection
          header="Business Consulting"
          image="/images/hero4.jpg"
          content={
            <div>
              <p className="text-gray-700 text-lg">
                We provide comprehensive consulting services designed to help
                businesses grow, optimize operations, and achieve long-term
                success.
              </p>

              <ul className="space-y- my-6">
                <li>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Strategy & Growth
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Develop data-driven strategies for market expansion and
                    revenue growth.
                  </p>
                </li>

                <li>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Operations & Efficiency
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Streamline processes and optimize workflows.
                  </p>
                </li>

                <li>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Marketing & Sales
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Build targeted campaigns and boost customer acquisition.
                  </p>
                </li>

                <li>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Finance & Accounting
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Ensure accurate bookkeeping and optimize cash flow.
                  </p>
                </li>

                <li>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Human Resources
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Build high-performing teams and a strong workplace culture.
                  </p>
                </li>
              </ul>

              <a
                href="mailto:info@mitworx.com"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Free Consultation
              </a>
            </div>
          }
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
            Discover how our Business Consulting can empower your business.
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
