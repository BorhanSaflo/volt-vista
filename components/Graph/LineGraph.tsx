"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { monthlyUsage } from "@/data/sampleData";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
  legend: {
    show: false,
  },
  colors: ["#10e846"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#10e846",
    strokeWidth: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: Math.max(...monthlyUsage) + 200,
    labels: {
      formatter: (value: number) => {
        return value + " kWh";
      },
    },
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

export default function ChartOne() {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Usage",
        data: monthlyUsage,
      },
    ],
  });

  return (
    <div className="rounded-md border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-6">
      <div id="chartOne" className="-ml-5 h-full w-[110%] sm:w-[103%] sm:h-[450px]">
        <ReactApexChart
          options={options}
          series={state.series}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
