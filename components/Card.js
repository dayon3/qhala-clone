import Image from 'next/image';

// import src from '../public/images/cardBackground.png';
import vector from '../public/images/icons/Vector.svg';

const Card = ({ label, title, desc }) => {
  return (
    <div className="relative shadow-lg group container rounded-md max-w-sm flex justify-center items-center card-img w-full lg:w-1/2 mx-0.5 my-4 px-4 md:px-0">
      <div>
        <div className="w-full image-cover rounded-md flex items-center">
          <h4 className="font-bold text-2xl text-gray-200 group-hover:hidden">
            {label}
          </h4>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-100 group-hover:bg-[#18988b] p-4 py-8 rounded-md">
        <h5 className="text-base font-bold text-white font-sans pb-1">
          {title}
        </h5>
        <Image src={vector} />
        <p className="py-4">{desc}</p>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="group w-full lg:w-1/4 mx-0.5 my-8 px-4 md:px-0 relative">
  <Image src={src} alt="" />
  <div className="absolute top-0 right-0 bottom-0 left-0 p-[1.25rem] flex-auto flex justify-center items-center rounded">
    <h1 className="font-bold text-xl text-gray-200">{label}</h1>
  </div>
  <div className="absolute top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-100 group-hover:bg-[#18988b] p-4 py-8 rounded">
    <h5 className="text-base font-bold text-white font-sans pb-1">{title}</h5>
    <Image src={vector} />
    <p className="py-2 text-sm">{desc}</p>
  </div>
</div> */
}
