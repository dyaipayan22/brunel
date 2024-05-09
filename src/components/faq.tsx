import Accordian from './ui/accordian';
import union from '../assets/union.png';

const FAQ = () => {
  return (
    <div className="w-full bg-background-accent rounded-[40px] p-16 flex gap-20 mt-20">
      <div className="w-1/2">
        <div className="w-full flex flex-col">
          <div className="mx-auto">
            <span className="font-heading text-[32px] text-[#9E9D9D] leading-[35.2px]">
              What’s on your mind
            </span>
            <h1 className="font-semibold text-[60px] leading-[66px] tracking-[-1%]">
              Ask Questions
            </h1>
          </div>
          <img src={union} alt="" className="mt-10" />
        </div>
      </div>
      <div className="flex-1 my-auto">
        <Accordian />
      </div>
    </div>
  );
};

export default FAQ;
