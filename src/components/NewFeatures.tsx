interface myInterface {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures = ({ imgUrl, title, subtitle }: myInterface) => (
  <div className=" flex flex-col sm:max-w-[250px] min-w-[150px]">
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    {/* <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      Title {title}
    </h1> */}
    <a href="" className="mt-[26px] font-bold text-[24px] leading-[30px] text-white btn">{title}</a>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
