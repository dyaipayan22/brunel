import { useState } from 'react';

import { FAQ_DATA } from '../../lib/constants';

const Accordian = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {FAQ_DATA &&
        FAQ_DATA.map((data, index) => (
          <div key={index} className="h-max flex flex-col gap-2">
            <div className="flex justify-between text-[20px] font-semibold leading-7">
              <span className="max-w-[80%]">{data.question}</span>
              <span
                onClick={() => toggle(index)}
                className="cursor-pointer text-xl"
              >
                {selected === index ? '-' : '+'}
              </span>
            </div>
            {selected === index && (
              <span className="transition ease-in delay-500">
                {data.answer}
              </span>
            )}
          </div>
        ))}
    </div>
  );
};

export default Accordian;
