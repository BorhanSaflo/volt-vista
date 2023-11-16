import React from "react";
import ChartOne from "@/components/Graph/LineGraph";
import CardDataStats from "@/components/CardDataStats";
import { dashboardStats } from "@/data/sampleData";

export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <div className="mb-6 flex gap-3">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Welcome back, User
        </h2>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4 md:mb-6 md:gap-6 2xl:mb-7.5 2xl:gap-7.5">
        <ChartOne />
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <div className="mb-4 justify-between gap-4 sm:flex">
            <h4 className="text-xl font-semibold text-black dark:text-white">Feedback</h4>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dashboardStats.map((stat, index) => (
          <CardDataStats
            key={index}
            title={stat.title}
            total={stat.total}
            rate={stat.rate}
            levelUp={stat.levelUp}
            icon={stat.icon}
          />
        ))}
      </div>
    </>
  );
}
