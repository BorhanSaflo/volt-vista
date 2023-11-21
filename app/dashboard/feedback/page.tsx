import { feedback } from "@/data/sampleData";
import { Leaf } from "lucide-react";

export default function page() {
  return (
    <>
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Feedback</h1>
      <div className="flex flex-col items-center gap-4">
        {feedback.map((feedback, index) => (
          <div
            className="flex w-full items-center rounded-md bg-white dark:bg-black p-4 gap-6"
            key={index}>
            <Leaf
              size={20}
              className={
                feedback.severity === "low"
                  ? "text-meta-3"
                  : feedback.severity === "medium"
                  ? "text-meta-6"
                  : "text-meta-1"
              }
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {feedback.deviceName}
                </h3>
                <span className="text-sm font-medium">|</span>
                <span className="text-sm font-medium">{feedback.energyUsage}</span>
              </div>
              <span className="font-medium">{feedback.suggestion}</span>
              <span className="text-sm font-medium">{feedback.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
