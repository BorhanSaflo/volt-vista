import { LucideIcon } from "lucide-react";

declare global {
  type CardStats = {
    title: string;
    total: string;
    rate: string;
    levelUp: boolean;
    icon: React.ReactNode;
  };

  type DeviceData = {
    icon: LucideIcon;
    name: string;
    isOn: boolean;
    location: string;
    usage: double;
    note: string;
  };
}

export {};
