import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'text-[18px] leading-[24.59px] rounded-[100px] disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-[#1C1C1C] hover:bg-[#4E4E4E] py-[31px] px-[40px] font-semibold text-[#FFFFFF]',
        secondary:
          'text-[#1C1C1C] hover:bg-[#F1F1F1] py-[26.11px] px-[41.78px] ring-[1.31px] ring-[#EAEAEA] ring-inset font-medium',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

export { Button, buttonVariants };
