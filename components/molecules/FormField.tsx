import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

export const FormField = ({ label, children }: Props) => (
  <div className="mb-4">
    <label className="block font-medium text-gray-700">{label}</label>
    {children}
  </div>
);
