import Image from 'next/image';

const Service = ({ desc, src, title, direction }) => {
  return (
    <div
      className={` max-w-6xl flex flex-col justify-center md:flex-row items-center md:justify-between py-2 ${
        direction ? 'flex-row-reverse md:flex-row-reverse' : ''
      }`}
    >
      <div
        className={`flex md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 ${
          direction ? 'justify-end md:ml-24' : 'justify-start md:mr-24'
        }`}
      >
        <Image src={src} width={280} height={230} placeholder="blur" />
      </div>
      <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mt-6 md:mt-0 mb-4 text-center md:text-left px-4">
        <h4 className="font-bold text-2xl text-gray-800 mb-4">{title}</h4>
        <p className="text-gray-700 leading-7">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
