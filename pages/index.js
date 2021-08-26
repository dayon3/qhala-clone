import AboutUs from '../components/AboutUs';
import Container from '../components/Container';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Practices from '../components/Practices';
import Services from '../components/Services';
import Quote from '../components/Quote';
import ScrollButton from '../components/ScrollButton';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen w-full flex-1 text-center py-0">
        {/* Hero */}
        <Hero />
        {/* Quote */}
        <Quote />
        {/* Services */}
        <Services />
        {/* Practices */}
        <Practices />
        {/* About Us */}
        <AboutUs />
        {/* Contact */}
        <Contact />
      </div>
      <ScrollButton />
    </Container>
  );
}
