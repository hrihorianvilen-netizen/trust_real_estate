import { Shield, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerificationBadgeProps {
  variant?: "default" | "small" | "large";
  className?: string;
}

const VerificationBadge = ({ variant = "default", className }: VerificationBadgeProps) => {
  const baseClasses = "inline-flex items-center gap-2 rounded-full font-medium";
  
  const variants = {
    small: "px-2 py-1 text-xs",
    default: "px-3 py-1.5 text-sm",
    large: "px-4 py-2 text-base"
  };

  return (
    <div className={cn(
      baseClasses,
      variants[variant],
      "bg-success text-success-foreground shadow-soft",
      className
    )}>
      <Shield className={cn(
        "flex-shrink-0",
        variant === "small" ? "w-3 h-3" : variant === "large" ? "w-5 h-5" : "w-4 h-4"
      )} />
      <span>Verified</span>
      <CheckCircle className={cn(
        "flex-shrink-0",
        variant === "small" ? "w-3 h-3" : variant === "large" ? "w-5 h-5" : "w-4 h-4"
      )} />
    </div>
  );
};

export default VerificationBadge;