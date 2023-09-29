import React from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-0 disabled:opacity-50  disabled:pointer-events-none data-[state=open]:bg-slate-100",
  {
    variants: {
      variant: {
        default: "bg-yellow-400 text-neutral-800",
        outline:
          "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-slate-100",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xl: "w-full h-12 text-base md:text-sm lg:text-base font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ children, className, to, href, variant, size, ...props }, ref) => {
    if (to) {
      return (
        <Link
          to={to}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          download
          target="_blank"
        >
          {children}
        </a>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
