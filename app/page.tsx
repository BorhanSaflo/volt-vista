import { Metadata } from "next";
import React from "react";
import ChartOne from "@/components/Graph/LineGraph";
import CardDataStats from "@/components/CardDataStats";
import { CircleDollarSign, Leaf, PlugZap, Zap } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dashboard | Volt Vista",
  description: "Volt Vista",
  icons: {
    icon: "/favicon.ico",
  },
};

const stats = [
  {
    title: "Total Cost",
    total: "$0.4K",
    rate: "0.43%",
    levelUp: true,
    levelDown: false,
    icon: <CircleDollarSign size={24} />,
  },
  {
    title: "Total Usage",
    total: "20 Kwh",
    rate: "0.43%",
    levelUp: true,
    levelDown: false,
    icon: <Zap size={24} />,
  },
  {
    title: "Total Savings",
    total: "$0.1K",
    rate: "0.43%",
    levelUp: true,
    levelDown: false,
    icon: <Leaf size={24} />,
  },
  {
    title: "Active Devices",
    total: "20",
    rate: "0.43%",
    levelUp: false,
    levelDown: true,
    icon: <PlugZap size={24} />,
  },
];

export default function Dashboard() {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main>
            <div className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:p-10">
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
                {stats.map((stat, index) => (
                  <CardDataStats
                    key={index}
                    title={stat.title}
                    total={stat.total}
                    rate={stat.rate}
                    levelUp={stat.levelUp}
                    levelDown={stat.levelDown}
                    icon={stat.icon}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
