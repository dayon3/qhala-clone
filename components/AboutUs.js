import Card from './Card';

const AboutUs = () => {
  return (
    <>
      <section id="about" className="w-full py-24 lg:p-12">
        <h2 className="font-bold text-3xl md:text-4xl text-gray-800 pb-12">
          About us
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 px-12 md:px-24">
          Our team has a multidisciplinary mix of problem solvers, passionate
          and creative individuals who question assumptions and are curious to
          try out new ideas.
        </p>
        <div className="flex flex-col items-center lg:flex-row py-4">
          <Card
            label="Digital Strategists"
            title="Product Managers | Business Designers | Content Strategists"
            desc="Find market opportunity, build, launch and grow great things, balancing user needs with business requirements."
          />
          <Card
            label="Researchers"
            title="UX Researchers | Market Researchers | Data Scientists | Business Analysts"
            desc="Conduct research using varying methods and interpret analysis through a human centered and experience lens."
          />
          <Card
            label="Designers"
            title="UX Designers | Interaction Designers | UI Designers | Service Designers"
            desc="Design experiences, create flows and interfaces that customers will love."
          />
          <Card
            label="Engineers"
            title="Developers | Software Architects | QA Testers | DevOps"
            desc="Build compelling products, service and platforms, test, and iterate."
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
