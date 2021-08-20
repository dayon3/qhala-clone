import Image from 'next/image';

import footerVector from '../public/images/FooterVector.png';
import footerLogo from '../public/images/FooterLogo.png';
// Icons
import facebook from '../public/images/icons/facebook-icon.svg';
import twitter from '../public/images/icons/twitter-icon.svg';
import linkedin from '../public/images/icons/linkedin-icon.svg';
import mail from '../public/images/icons/mail-icon.svg';
import medium from '../public/images/icons/medium.svg';

const Contact = () => {
  return (
    <section
      id="getInTouch"
      className="w-full flex flex-col md:flex-row md:justify-between items-center bg-[#18988b]"
    >
      <div className="hidden lg:block">
        <Image src={footerVector} width={160} height={479} />
      </div>
      <div className="text-center w-full md:w-1/2 flex justify-center">
        <div className="flex flex-wrap justify-center sm:justify-start text-center md:p-5 py-2 mt-6 md:mt-8">
          <div className="text-center px-10 md:px-8">
            <Image src={footerLogo} width={125} height={140} />
          </div>
          <div className="flex flex-col text-left text-white text-lg mt-6 px-2 md:px-6">
            <a
              href="mailto:info@qhala.com"
              className="font-bold text-base md:text-xl hover:text-blue-800 hover:underline"
            >
              info@qhala.com
            </a>
            <a
              href="mailto:people@qhala.com"
              className="font-bold text-base md:text-xl hover:text-blue-800 hover:underline"
            >
              people@qhala.com
            </a>
            <p className="w-full text-base md:text-xl">
              CMS Africa, Pioneer Plaza, Chania Avenue, Kilimani,
              <br /> Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-8">
        <ul className="list-none flex justify-center flex-wrap sm:flex-nowrap">
          <Icon src={facebook} />
          <Icon src={twitter} />
          <Icon src={linkedin} />
          <Icon src={mail} />
          <Icon src={medium} />
        </ul>
      </div>
    </section>
  );
};

const Icon = ({ src }) => {
  return (
    <li className="mx-2 h-20 w-20 bg-black hover:bg-gray-900 rounded-full flex justify-center items-center">
      <Image src={src} width={38} height={38} />
    </li>
  );
};

export default Contact;
