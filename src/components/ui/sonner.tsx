import { Toaster as Sonner } from "sonner";
import type { ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "bg-white border-[var(--color-border)] text-[var(--color-charcoal)]",
          title: "text-[var(--color-charcoal)]",
          description: "text-[var(--color-text-secondary)]",
          success: "bg-green-50 border-green-200 text-green-900",
          error: "bg-red-50 border-red-200 text-red-900",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
