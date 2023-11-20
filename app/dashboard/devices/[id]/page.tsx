import StatCard from "@/components/StatCard";
import { deviceData } from "@/data/sampleData";
import { Power, Zap } from "lucide-react";
interface DeviceProps {
  params: { id: string };
}

export default function page({ params }: DeviceProps) {
  const device = deviceData.find((device) => device.id === parseInt(params.id));

  if (!device) {
    return (
      <div className="rounded-md border border-stroke shadow-default dark:border-strokedark ">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 bg-white dark:bg-black">
          <h4 className="text-xl font-semibold text-black dark:text-white">Device Not Found</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-3xl font-semibold text-black dark:text-white mb-4">{device.name}</h4>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <StatCard
          title="Status"
          value={device.isOn ? "On" : "Off"}
          hoverSpotlight={false}
          icon={<Power size={24} />}
        />
        <StatCard
          title="Current Consumption"
          value={`${device.usage} kWh`}
          hoverSpotlight={false}
          icon={<Zap size={24} />}
        />
      </div>
    </div>
  );
}
