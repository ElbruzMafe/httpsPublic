typescript
"use client";
import { useState } from "react";
import {
  BarChart,
  LineChart,
  PieChart,
  Bar,
  Line,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData as rawData } from "@/data/salesData";

export default function SalesChart() {
  const [minSales, setMinSales] = useState(0);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const filteredData = rawData.filter((d) => d.sales >= minSales);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Test div to ensure buttons are rendering */}
      <div style={{ marginBottom: "20px", fontWeight: "bold", color: "red" }}>
        TEST: Buttons should appear below this text
      </div>

      {/* Minimum sales threshold input */}
      <label
        htmlFor="minSales"
        style={{
          display: "block",
          marginBottom: "10px",
          fontWeight: "600",
          color: "#111827",
        }}
      >
        Minimum Sales Threshold
      </label>
      <input
        id="minSales"
        type="number"
        placeholder="e.g. 500"
        value={minSales}
        onChange={(e) => setMinSales(Number(e.target.value))}
        style={{
          border: "1px solid #d1d5db",
          padding: "8px",
          marginBottom: "20px",
          borderRadius: "4px",
          width: "100%",
          maxWidth: "200px",
          outline: "none",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        }}
      />

      {/* Chart type buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setChartType("bar")}
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "500",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
        >
          Bar
        </button>
        <button
          onClick={() => setChartType("line")}
          style={{
            backgroundColor: "#10b981",
            color: "white",
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "500",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
        >
          Line
        </button>
        <button
          onClick={() => setChartType("pie")}
          style={{
            backgroundColor: "#f59e0b",
            color: "white",
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "500",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d97706")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
        >
          Pie
        </button>
      </div>

      {/* Chart display */}
      <ResponsiveContainer width="100%" height={300}>
        {chartType === "bar" && (
          <BarChart data={filteredData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" />
          </BarChart>
        )}
        {chartType === "line" && (
          <LineChart data={filteredData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        )}
        {chartType === "pie" && (
          <PieChart>
            <Tooltip />
            <Pie
              data={filteredData}
              dataKey="sales"
              nameKey="year"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={["#3b82f6", "#10b981", "#f59e0b"][index % 3]} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

