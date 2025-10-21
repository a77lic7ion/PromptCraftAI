import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary/90',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-brand-border bg-transparent hover:bg-brand-accent hover:text-brand-accent-foreground',
        secondary: 'bg-brand-secondary text-brand-secondary-foreground hover:bg-brand-secondary/80',
        ghost: 'hover:bg-brand-accent hover:text-brand-accent-foreground',
        link: 'underline-offset-4 hover:underline text-brand-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// FIX: Changed interface to a type alias with an intersection. This resolves a subtle
// TypeScript issue where props from VariantProps were not being correctly inferred
// in components using this Button, leading to type errors.
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
