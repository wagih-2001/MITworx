import AboutYou from '@/components/Home/AboutYou';
import Hero from '@/components/Home/Hero';
import Service from '@/components/Home/Service';
import Team from '@/components/Home/Team';
import Testimonaials from '@/components/Home/Testimonaials';
import YouChooseUs from '@/components/Home/YouChooseUs';
import '@/styles/globals.css';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutYou />
      <Service />
      <YouChooseUs />
      <Testimonaials />
      <Team />
    </>
  );
}
