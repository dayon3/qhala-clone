import Image from 'next/image';

import AboutUs from '../components/AboutUs';
import Container from '../components/Container';
import Contact from '../components/Contact';
import Practices from '../components/Practices';
import Services from '../components/Services';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen w-full flex-1 text-center py-0">
        <>
          <div className="pt-12 pb-28">
            <h1 className="text-gray-900 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl lg:leading-tight font-bold w-[10em] mt-12 pb-4 mx-auto">
              Catalysing Africa's Digital Future
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl px-8 md:px-28 lg:px-40 xl:px-52 pb-8">
              We work with organizations to co-create products, services and new
              business models. Our approach ties together strategy, research,
              design and technology to solve today's needs and future goals.
            </p>
            <button className="bg-yellow-500 w-[10em] rounded py-4 px-4 text-xl">
              Get In Touch
            </button>
          </div>
        </>
        <>
          <div className="bg-gray-100 w-full py-24 lg:p-24">
            <p className="italic text-2xl md:text-3xl pb-8 px-8 w-full md:w-2/3 mx-auto text-gray-600">
              "Every company is a software company. You have to start thinking
              and operating like a digital company"
            </p>
            <p className="text-xl md:text-2xl font-bold text-gray-800">
              Satya Nadella, CEO of Microsoft
            </p>
          </div>
        </>
        {/* Services */}
        <Services />
        {/* Practices */}
        <Practices />
        {/* About Us */}
        <AboutUs />
        {/* Contact */}
        <Contact />
      </div>
    </Container>
  );
}
