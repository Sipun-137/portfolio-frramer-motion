interface myInterface{
  number:number,
  text:string
}

const StartSteps = ({number,text}:myInterface) => (
  <div className=" flex justify-center items-center flex-row">
    <div className="flex justify-center items-center w-[58px] h-[58px] rounded-[20px] bg-[#323f5d]">
      <p className="font-bold text-[20px] text-white">0{number}</p>

    </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
