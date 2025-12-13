import PageHero from '@/components/PageHero';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function ContactUs() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHero
        title="Contact Us"
        breadcrumb="ContactUs"
        image="/images/hero2.jpg"
      />

      {/* CONTACT INFO + MAP */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-600">
            Contact Us Get in touch <br /> We’re here to help
          </h2>

          <div className="flex items-start space-x-4">
            <MapPinIcon className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              Al Moltaqa Al Arabi District, Sheraton, Cairo Governorate, Egypt
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <PhoneIcon className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <a href="tel:+201124368888">+201124368888</a>
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <EnvelopeIcon className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <a href="mailto:info@MITworx.com">info@MITworx.com</a>
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <a
              href="mailto:mostafa.zaki@MITworx.com"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              Contact Us Today
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3457.823529!2d31.376709!3d30.091874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cXXXXXXXXXX:0xXXXXXXXXXXXX!2sMakanak%20Office%20Space%20-%20Sheraton!5e0!3m2!1sen!2seg!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
