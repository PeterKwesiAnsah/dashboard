import { Chart, registerables } from "chart.js";
import React, { useRef } from "react";
Chart.register(...registerables);

export const OrdersChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Sales from Jan to June",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {},
  };

  React.useEffect(() => {
    const myChart = new Chart(canvasRef.current!, config);
  }, []);
  return (
    <canvas ref={canvasRef} id="myChart" width="400" height="400"></canvas>
  );
};
