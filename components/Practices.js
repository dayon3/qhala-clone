import Practice from './Practice';

import fintech from '../public/images/FinancialServices.png';
import energy from '../public/images/RenewableEnergy.png';
import retail from '../public/images/Retail.png';
import gigEconomy from '../public/images/DigitalEconomy.png';
import agriculture from '../public/images/Agriculture.png';

const Practices = () => {
  return (
    <>
      <div className="bg-gray-100 w-full py-24 lg:p-24">
        <h2 className="font-bold text-3xl md:text-4xl text-gray-800 mb-12">
          Practices
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 px-12 md:px-24 mb-8">
          We engage in these 5 practices, working with businesses in these
          industries in identifying, planning for and capitalizing on digital
          opportunities.
        </p>
        <div className="pt-8 flex flex-wrap justify-center max-w-5xl mx-auto">
          <Practice title="Fintech" imgSrc={fintech} />
          <Practice title="Energy" imgSrc={energy} />
          <Practice title="Retail" imgSrc={retail} />
          <Practice title="Gig Economy" imgSrc={gigEconomy} />
          <Practice title="Agriculture" imgSrc={agriculture} />
        </div>
      </div>
    </>
  );
};

export default Practices;
