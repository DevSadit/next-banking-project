"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["B1", "B2", "B3"],
  datasets: [
    {
      label: "Banks",
      data: [1250, 100, 4000],
      backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
    },
  ],
};

export function DoughnutChart({ accounts }: DoughnutChartProps) {
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

// { accounts }: DoughnutChartProps
