import * as React from "react";

export function Card({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
