import React from "react";
import ChartOne from "@/components/Graph/LineGraph";
import StatCard from "@/components/StatCard";
import { dashboardStats, feedback } from "@/data/sampleData";
import FeedbackCard from "@/components/FeedbackCard";

export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <div className="mb-6 flex">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Welcome back, User
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-2 md:mb-3 md:gap-3 2xl:mb-5 2xl:gap-5">
        <div className="col-span-12 xl:col-span-8">
          <ChartOne />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-4 2xl:gap-5 mt-2 md:mt-3 2xl:mt-5">
            {dashboardStats.slice(0, 4).map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                rate={stat.rate}
                levelUp={stat.levelUp}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
        <div className="col-span-12 rounded-md border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <div className="flex flex-col gap-2 2xl:gap-3 h-full">
            <h4 className="text-xl font-semibold text-black dark:text-white">Feedback</h4>
            <div className="flex flex-col gap-2 2xl:gap-3 justify-between h-full">
              <div className="flex flex-col gap-2 2xl:gap-3">
                {feedback.map((item, index) => (
                  <FeedbackCard
                    key={index}
                    deviceName={item.deviceName}
                    energyUsage={item.energyUsage}
                    suggestion={item.suggestion}
                    severity={item.severity}
                  />
                ))}
              </div>
              <div className="flex justify-center">
                <button className="font-semibold rounded-md px-6 py-2 dark:bg-meta-4 dark:text-white bg-meta-2 text-black">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
