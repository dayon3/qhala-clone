import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="pt-12 pb-28">
        <h1 className="text-gray-900 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl lg:leading-tight font-bold w-[10em] mt-12 pb-4 mx-auto">
          Catalysing Africa's Digital Future
        </h1>
        <p className="text-gray-700 text-xl md:text-2xl px-8 md:px-28 lg:px-40 xl:px-52 pb-8">
          We work with organizations to co-create products, services and new
          business models. Our approach ties together strategy, research, design
          and technology to solve today's needs and future goals.
        </p>
        <button className="bg-yellow-500 w-[10em] rounded py-4 px-4 text-xl">
          Get In Touch
        </button>
      </section>
    </>
  );
};

export default Hero;
