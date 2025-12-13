import PageHero from '@/components/PageHero';

export default function Careers() {
  const jobs = [
    { title: 'Frontend Developer', dept: 'Engineering', exp: '2+ years' },
    { title: 'UI/UX Designer', dept: 'Design', exp: '3+ years' },
    { title: 'Marketing Specialist', dept: 'Marketing', exp: '2+ years' }
  ];

  return (
    <>
      <PageHero
        title="Careers"
        breadcrumb=" Careers "
        image="/images/hero6.jpg"
      />
      {/* HERO */}
      <section className=" bg-white text-black py-20 px-4 text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
          We’re Hiring!
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-6">
          We always seek talented individuals who share our commitment to
          MITworx‘s Mission. If you’re a high-energy self-starter who thrives in
          a collaborative environment, we encourage you to explore our current
          openings and see if you could be a great fit! Don’t see your perfect
          role listed? We’re still growing! Feel free to share your CV with us
          at .
          <a
            href="mailto:career@mitworx.com"
            className="underline font-semibold text-blue-600"
          >
             career@mitworx.com
          </a>
        </p>
      </section>
    </>
  );
}
