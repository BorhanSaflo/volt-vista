import { deviceData } from "@/data/sampleData";
import Link from "next/link";

export default function page() {
  return (
    <div className="rounded-md border border-stroke shadow-default dark:border-strokedark ">
      <div className="py-6 px-4 md:px-6 xl:px-7.5 bg-white dark:bg-black">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Total Devices ({deviceData.length})
        </h4>
      </div>

      <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5 font-medium bg-white dark:bg-black">
        <div className="col-span-1 flex items-center" />
        <div className="col-span-3 flex items-center">Name </div>
        <div className="col-span-1 flex items-center">Usage</div>
        <div className="col-span-2 hidden items-center sm:flex">Location</div>
        <div className="col-span-5 items-center hidden sm:flex">Notes</div>
      </div>

      {deviceData.map((device, key) => (
        <Link
          href={`/dashboard/devices/${device.id}`}
          className={
            "grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-12 md:px-6 2xl:px-7.5 text-sm text-black dark:text-white bg-[#fafafa] dark:bg-[#313235] hover:bg-[#f5f5f5] dark:hover:bg-meta-4 transition-colors duration-200"
          }
          key={key}>
          <div className="col-span-1 flex items-center">
            <device.icon size={32} className={device.isOn ? "text-green-500" : "text-red-500"} />
          </div>
          <div className="col-span-3 flex items-center">{device.name}</div>
          <div className="col-span-1 flex items-center">{device.usage} kWh</div>
          <div className="col-span-2 items-center hidden sm:flex">{device.location}</div>
          <div className="col-span-5 items-center hidden sm:flex">{device.note}</div>
        </Link>
      ))}
    </div>
  );
}
