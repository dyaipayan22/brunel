import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[12px] font-medium text-[20px] leading-[27.32px]">
        <input
          ref={ref}
          className={cn(
            'bg-[#EFEFEF] rounded-[64px] ring-[1px] ring-inset py-[24px] px-[36px] outline-none',
            className
          )}
          {...props}
        />
        {error && (
          <div className="flex items-center gap-[7px]">
            <img src="/warning.png" alt="" />
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
