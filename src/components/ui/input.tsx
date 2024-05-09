import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { FieldError } from 'react-hook-form';

import warning from '../../assets/icons/warning.png';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[12px]">
        <input
          ref={ref}
          className={cn(
            ` rounded-[64px] ring-[1px] ring-inset py-[24px] px-[36px] outline-none font-medium text-[20px] leading-[27.32px] text-black ${
              error ? 'ring-[#537FF1] bg-[#F5F8FF]' : 'ring-white bg-[#EFEFEF]'
            }`,
            className
          )}
          {...props}
        />
        {error && (
          <div className="flex items-center gap-[7px]">
            <img src={warning} alt="" />
            <span className="text-[#FF0808] text-[16px] font-medium leading-[21.86px]">
              {error.message}
            </span>
          </div>
        )}
      </div>
    );
  }
);

export default Input;
