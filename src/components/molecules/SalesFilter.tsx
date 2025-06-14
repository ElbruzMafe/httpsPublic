"use client";
import { useState } from "react";

type Props = {
  onFilterChange: (threshold: number) => void;
};

export default function SalesFilter({ onFilterChange }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setValue(e.target.value);
    if (!isNaN(val)) onFilterChange(val);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Minimum Sales Threshold</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="e.g. 500"
        className="border px-3 py-2 rounded"
      />
    </div>
  );
}