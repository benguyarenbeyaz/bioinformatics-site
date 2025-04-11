"use client";

import * as React from "react";

export function Tabs({ children, defaultValue }: { children: React.ReactNode; defaultValue: string }) {
  const [value, setValue] = React.useState(defaultValue);
  return <div>{React.Children.map(children, child => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child, { value, setValue });
  })}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2 mb-4">{children}</div>;
}

export function TabsTrigger({ value, children, setValue }: any) {
  return (
    <button
      className="px-4 py-2 border rounded hover:bg-gray-100"
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, setValue }: any) {
  const [currentValue] = React.useState(value);
  return <div>{value === currentValue && children}</div>;
}
