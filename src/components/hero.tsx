import { Button } from './ui/button';
import Carousel from './ui/carousel';

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-1/2 flex flex-col gap-[16px] items-center mx-auto">
        <h1 className="text-heading font-heading text-[36px] leading-[39.6px]">
          Success stories
        </h1>
        <span className="text-[56px] font-semibold leading-[67.2px] tracking-[-0.2] text-center">
          Every success journey we’ve encountered.
        </span>
      </div>

      <div className="w-full flex gap-10">
        <div className="w-2/3 relative">
          <img src="/model.png" alt="" className="mx-auto rounded-[40px]" />
          <div className="absolute bg-white rounded-[27.11px] p-[30px] flex flex-col gap-4 max-w-[265px] top-36 left-20 shadow-[#1E1E1E17] shadow-2xl">
            <h1 className="text-[64px] font-medium leading-[76.8px] tracking-[-3%]">
              40%
            </h1>
            <span>
              Achieved reduction in project execution time by optimizing team
              availability
            </span>
          </div>

          <div className="absolute bg-white rounded-[111.54px] py-4 px-8 flex items-center gap-[14px] bottom-10 left-40 shadow-lg">
            <img src="/rocket.png" alt="" />
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-[24px] font-bold leading-[32.78px]">
                10 DAYS
              </h1>
              <span className="text-[#828282] text-[16px] leading-[20.8px]">
                Staff Deployment
              </span>
            </div>
          </div>

          <div className="absolute -bottom-10 right-28 flex flex-col gap-[20px] bg-[#002E18] text-white rounded-[28.36px] p-[32px] max-w-[290px]">
            <h1 className="text-[64px]">
              $0.5 <span className="text-[22px] text-[#A6A3A0]">MILLION</span>
            </h1>
            <span className="text-[#CCCCCC]">
              Reduced client expenses by saving on hiring and employee costs.
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-20 my-auto">
          <Carousel />

          <Button className="w-1/2 flex items-center gap-[12px]">
            <span>Explore More</span>
            <img src="/arrow.png" alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;