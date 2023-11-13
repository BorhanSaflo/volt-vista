import { ArrowDown, ArrowUp, LucideIcon } from "lucide-react";
import clsx from "clsx";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  Icon: LucideIcon;
}

export default function CardDataStats({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  Icon,
}: CardDataStatsProps) {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <Icon size={24} />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">{total}</h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={clsx("flex items-center gap-1 text-sm font-medium", {
            "text-meta-3": levelUp,
            "text-meta-1": levelDown,
          })}>
          {rate}
          {levelUp && <ArrowUp className="fill-meta-3" size={15} />}
          {levelDown && <ArrowDown className="fill-meta-1" size={15} />}
        </span>
      </div>
    </div>
  );
}
