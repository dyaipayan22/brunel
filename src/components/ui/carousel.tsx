import { useState } from 'react';
import { CAROUSEL_DATA } from '../../lib/constants';

const Carousel = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="flex flex-col gap-8">
      <span className="text-[40px] font-semibold leading-[48px]">
        {CAROUSEL_DATA[selected].info}
      </span>
      <div className="flex items-center gap-[12px]">
        {CAROUSEL_DATA.map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer w-[10px] h-[10px] rounded-full ${
              selected === index
                ? 'bg-[#2DA950]'
                : 'bg-[#E4E3E3] hover:bg-[#CAD0CB]'
            }`}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
