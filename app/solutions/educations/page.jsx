'use client';

import Link from 'next/link';
import TabsSection from '@/components/TabsSection';
import PageHero from '@/components/PageHero';
import InfoSection from '@/components/InfoSection';

export default function EduPage() {
  const tabsData = [
    {
      title: 'In-School Robotics Programs',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Problem-Solving Powerhouse
            </h2>
            <p className="text-gray-700 text-base">
              Our hands-on programs encourage critical thinking and creative
              problem-solving. Students learn to analyze situations, break down
              challenges, and develop innovative solutions – skills valuable in
              any future endeavor
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Project-Based Learning
            </h2>
            <p className="text-gray-700 text-base">
              Our programs go beyond theory. Students tackle real-world
              challenges through engaging projects, requiring them to apply
              critical thinking, problem-solving, and collaboration skills to
              find innovative solutions.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero5.jpg',
      header: 'In-School Robotics Programs'
    },
    {
      title: 'After-School Programs & Camps',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Sharpened Critical Thinking
            </h2>
            <p className="text-gray-700 text-base">
              We guide students to dissect complex problems into manageable
              steps, fostering analytical thinking and confident
              decision-making. These skills are essential for academic success
              and real-world challenges.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Personalized Learning Paths
            </h2>
            <p className="text-gray-700 text-base">
              We understand that every student learns differently. Our
              instructors tailor their approach and curriculum to individual
              needs and learning styles, fostering confidence and a love for
              learning.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero6.jpg',
      header: 'After-School Programs & Camps'
    },
    {
      title: 'Teacher Training Workshops',

      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Innovation Ignition
            </h2>
            <p className="text-gray-700 text-base">
              By designing, building, and programming robots, students unleash
              their creativity and bring their ideas to life. This fosters a
              love for innovation and a “can-do” attitude.
            </p>
          </div>

          <div>
            <h2 className="text-black text-2xl font-semibold mb-2">
              Playful Exploration
            </h2>
            <p className="text-gray-700 text-base">
              We believe learning should be fun! We incorporate interactive
              activities and gamified elements into our programs, sparking
              curiosity and igniting a passion for AI, coding, and robotics.
            </p>
          </div>
        </div>
      ),
      image: '/images/hero2.jpg',
      header: 'Teacher Training Workshops'
    }
  ];

  return (
    <>
      <PageHero
        title="Educational Technology"
        breadcrumb=""
        subtitle=" In today’s rapidly evolving world, the skills to navigate artificial intelligence, coding, and robotics are no longer a luxury, but a necessity. At MITworx, we’re a passionate team of educators and technologists on a mission to empower the next generation."
        image="/images/hero4.jpg"
      />
      <main className="bg-gray-50 text-gray-800">
        <InfoSection
          header="Educational Technology"
          image="/images/hero3.jpg"
          content={
            <div>
              <p className="text-gray-700 text-lg">
                <strong>Stop wasting time searching</strong> for lost documents
                or dealing with version control headaches. Our ECM solutions
                empower your business to:
              </p>

              <ul className="space-y- my-6">
                <li>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We believe that every student deserves the opportunity to
                    explore these exciting fields. Our engaging and interactive
                    programs go beyond rote learning. We ignite curiosity,
                    cultivate problem-solving skills, and foster creativity
                    through hands-on activities, project-based learning, and a
                    supportive learning environment.
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We’re more than just an innovation technology company; we’re
                    your partner in preparing students for the future. We work
                    closely with schools, families, and students to create a
                    personalized learning journey that unlocks their full
                    potential.
                  </p>
                </li>

                <li>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Ready to join us on this exciting adventure? Explore our
                    services below and see how we can help your student become a
                    confident innovator in the world of technology!
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
            Discover how our Educational Technology can empower your business.
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
