import { ComponentProps, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Widget } from "./components/Widget";
import { OrdersChart } from "./components";

function App() {
  const data: ComponentProps<typeof Widget>[] = [
    {
      name: "Total Sales",
      value: "GHC 250",
    },
    {
      name: "Total Orders",
      value: "50",
    },
    {
      name: "Total Customers",
      value: "25",
    },
  ];
  return (
    <div className="App">
      <div className="widget--row">
        {data.map((widget) => (
          <Widget key={widget} {...widget}></Widget>
        ))}
      </div>
      <OrdersChart></OrdersChart>
    </div>
  );
}

export default App;
