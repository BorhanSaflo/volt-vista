import { alerts } from "@/data/sampleData";
import { AlertCircle, AlertOctagon, CheckCircle, Info } from "lucide-react";

const AlertIcon = ({ type }: { type: Alert["type"] }) => {
  if (type === "error") return <AlertOctagon size={32} className="text-red-500" />;
  else if (type === "info") return <Info size={32} className="text-blue-500" />;
  else if (type === "success") return <CheckCircle size={32} className="text-green-500" />;
  return <AlertCircle size={32} className="text-yellow-500" />;
};

export default function page() {
  return (
    <>
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Alerts</h1>
      <div className="flex flex-col items-center gap-4">
        {alerts.map((alert, index) => (
          <div
            className="flex w-full items-center rounded-md bg-white dark:bg-black p-4 gap-6"
            key={index}>
            <AlertIcon type={alert.type} />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-black dark:text-white">{alert.title}</h3>
              <span className="font-medium">{alert.description}</span>
              <span className="text-sm font-medium">{alert.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
