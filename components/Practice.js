import Image from 'next/image';

const Practice = ({ title, imgSrc }) => {
  return (
    <div className="flex flex-col items-center px-10">
      <Image src={imgSrc} width={150} height={150} />
      <h4 className="font-bold text-gray-700 text-2xl py-5">{title}</h4>
    </div>
  );
};

export default Practice;
