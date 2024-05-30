import { csv } from "d3";
import * as Plot from "@observablehq/plot";

async function initChart() {
  const data = await csv("/pa-opiod-county-data.csv");

  const plot = Plot.plot({
    width: 800,
    marginLeft: 200,
    marks: [
      Plot.barX(data, {
        y: "County",
        x: "Amount Left",
        channels: {
          "Amount Received": "Amount Received",
          "Future Plans": "Future Plans",
          "Non-Opioid Spending": "Non-Opioid Spending",
          "Previous Amount": "Previous Amount",
          "Remediation Committed": "Remediation Committed",
          "Remediation Spent": "Remediation Spent",
        },
        tip: { fill: "#242424" },
      }),
    ],
  });

  console.log("DATA", data);

  const chart = document.querySelector("#chart");

  if (chart instanceof HTMLDivElement) {
    chart.append(plot);
  }
}

initChart();
