// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
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

const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

export default function SalesChart() {
  const [minSales, setMinSales] = useState(0);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const filteredData = rawData.filter((d) => d.sales >= minSales);
  const maxSales = Math.max(...rawData.map((d) => d.sales), 1000);

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#1f2937",
          marginBottom: "16px",
        }}
      >
        Sales Dashboard
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <div>
          <label
            htmlFor="minSales"
            style={{
              display: "block",
              fontSize: "16px",
              fontWeight: "500",
              color: "#374151",
              marginBottom: "8px",
            }}
          >
            Minimum Sales Threshold
          </label>
          <input
            id="minSales"
            type="number"
            placeholder="e.g. 123"
            value={minSales}
            onChange={(e) => {
              const value = Number(e.target.value);
              setMinSales(value >= 0 ? value : 0);
            }}
            step={1}
            style={{
              padding: "8px 12px",
              width: "200px",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              fontSize: "14px",
              outline: "none",
              transition: "border-color 0.2s",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#3b82f6";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#d1d5db";
            }}
          />
          <input
            type="range"
            min={0}
            max={maxSales}
            step={100}
            value={minSales}
            onChange={(e) => setMinSales(Number(e.target.value))}
            style={{
              width: "200px",
              marginTop: "8px",
              accentColor: "#3b82f6",
              cursor: "pointer",
            }}
          />
          <div
            style={{
              fontSize: "12px",
              color: "#6b7280",
              marginTop: "4px",
            }}
          >
            Current: {minSales}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setChartType("bar")}
            style={{
              padding: "10px 20px",
              backgroundColor: chartType === "bar" ? "#3b82f6" : "#e5e7eb",
              color: chartType === "bar" ? "#ffffff" : "#374151",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: chartType === "bar" ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
            }}
            onMouseOver={(e) => {
              if (chartType !== "bar") {
                e.currentTarget.style.backgroundColor = "#d1d5db";
              }
            }}
            onMouseOut={(e) => {
              if (chartType !== "bar") {
                e.currentTarget.style.backgroundColor = "#e5e7eb";
              }
            }}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType("line")}
            style={{
              padding: "10px 20px",
              backgroundColor: chartType === "line" ? "#10b981" : "#e5e7eb",
              color: chartType === "line" ? "#ffffff" : "#374151",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: chartType === "line" ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
            }}
            onMouseOver={(e) => {
              if (chartType !== "line") {
                e.currentTarget.style.backgroundColor = "#d1d5db";
              }
            }}
            onMouseOut={(e) => {
              if (chartType !== "line") {
                e.currentTarget.style.backgroundColor = "#e5e7eb";
              }
            }}
          >
            Line
          </button>
          <button
            onClick={() => setChartType("pie")}
            style={{
              padding: "10px 20px",
              backgroundColor: chartType === "pie" ? "#f59e0b" : "#e5e7eb",
              color: chartType === "pie" ? "#ffffff" : "#374151",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: chartType === "pie" ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
            }}
            onMouseOver={(e) => {
              if (chartType !== "pie") {
                e.currentTarget.style.backgroundColor = "#d1d5db";
              }
            }}
            onMouseOut={(e) => {
              if (chartType !== "pie") {
                e.currentTarget.style.backgroundColor = "#e5e7eb";
              }
            }}
          >
            Pie
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        {chartType === "bar" && (
          <BarChart data={filteredData}>
            <XAxis dataKey="year" />
            < Hungarians: 0
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
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}