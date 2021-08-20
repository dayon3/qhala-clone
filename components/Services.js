import Service from './Service';

import strategy from '../public/images/analyza_data_and_chart.png';
import research from '../public/images/analyze_on_screen.png';
import design from '../public/images/designer.png';
import development from '../public/images/programming_code.png';

const Services = () => {
  return (
    <>
      <div className="py-24 lg:p-24">
        <h2 className="font-bold text-3xl md:text-4xl text-gray-800 mb-12">
          What we do
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 px-6 md:px-12">
          At Qhala, we work with existing organizations looking to improve
          operational efficiency, deliver value to customers and transform
          businesses. We also support business leaders who want to build and
          launch new ventures.
        </p>
        <div className="flex flex-col items-center px-6 md:px-12 lg:px-16 xl:px-32 pb-10 pt-16">
          <Service
            src={strategy}
            title="Strategy & Advisory"
            desc="We are aware that you are a leader in your business, we complement your team’s skills in business design and product development to design a solid digital strategy. Through digital, service and organization audits, we create a baseline and action plans to navigate the digital transformation age."
          />
          <Service
            src={research}
            title="Research"
            desc="Our human centered approach to problem solving is adaptable to varying needs. We conduct rigorous qualitative and quantitative research, then blend these findings with data analysis to gain a deeper understanding of the current and future state of the customers, industry and market."
            direction="reverse"
          />
          <Service
            src={design}
            title="Design"
            desc="We work with businesses in conceptualizing solutions that improve how businesses think, work and serve their customers. We co-create with businesses to meet both business and user needs now and for years to come. Products, services and engagement channels created deliver the best value with a delightful experience."
          />
          <Service
            src={development}
            title="Development"
            desc="Taking customer experience and business strategy along, we build innovative solutions, business models and launch new digital services. We deliver this through rapid prototyping and agile development, we are keen to follow through from pilot to launch."
            direction="reverse"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
