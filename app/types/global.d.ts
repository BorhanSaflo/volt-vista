import { LucideIcon } from "lucide-react";

declare global {
  type CardStats = {
    title: string;
    value: string;
    rate?: string;
    levelUp?: boolean;
    icon: React.ReactNode;
    hoverSpotlight?: boolean;
  };

  type Feedback = {
    deviceName: string;
    suggestion: string;
    energyUsage: string;
    severity?: "low" | "medium" | "high";
    timestamp?: string;
  };

  type DeviceData = {
    id: number;
    icon: LucideIcon;
    name: string;
    isOn: boolean;
    location: string;
    usage: double;
    note: string;
  };

  type Alert = {
    title: string;
    description: string;
    type?: "error" | "warning" | "info" | "success";
    timestamp: string;
  };
}

export {};
