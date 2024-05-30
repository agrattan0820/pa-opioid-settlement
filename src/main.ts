import * as Plot from "@observablehq/plot";
import { csv } from "d3";

console.log("hello!");

async function initChart() {
  const data = await csv("/pa-opiod-county-data.csv");

  const plot = Plot.plot({
    width: 800,
    marginLeft: 200,
    marks: [Plot.barX(data, { y: "County", x: "Amount Left" })],
  });

  console.log("DATA", data);

  const chart = document.querySelector("#chart");

  if (chart instanceof HTMLDivElement) {
    chart.append(plot);
  }
}

initChart();
