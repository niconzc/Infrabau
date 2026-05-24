import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold tracking-wide transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[#1D4ED8] text-white hover:bg-[#1e40af] rounded-[2px] border-2 border-transparent",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#0D1F3C] rounded-[2px]",
    ghost:
      "bg-transparent text-[#0D1F3C] border-2 border-[#0D1F3C] hover:bg-[#0D1F3C] hover:text-white rounded-[2px]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
