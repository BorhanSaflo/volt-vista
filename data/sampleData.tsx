import { CircleDollarSign, Leaf, PlugZap, Zap, Lightbulb, Plug } from "lucide-react";

export const monthlyUsage: number[] = [
  800,  // January
  850,  // February
  900,  // March
  950,  // April
  1000, // May
  1200, // June (higher usage due to air conditioner)
  1300, // July (peak usage with continued air conditioner use)
  1100, // August (gradual decrease as summer ends)
  950,  // September
  900,  // October
  850,  // November
  820   // December
];

export const dashboardStats: CardStats[] = [
  {
    title: "Total Cost",
    total: "$235.50",
    rate: "3.21%",
    levelUp: true,
    icon: <CircleDollarSign size={24} />,
  },
  {
    title: "Total Usage",
    total: "32.5 kWh",
    rate: "12.45%",
    levelUp: true,
    icon: <Zap size={24} />,
  },
  {
    title: "Total Savings",
    total: "$15.75",
    rate: "0.9%",
    levelUp: true,
    icon: <Leaf size={24} />,
  },
  {
    title: "Active Devices",
    total: "8",
    rate: "2%",
    levelUp: false,
    icon: <PlugZap size={24} />,
  },
];

export const deviceData: DeviceData[] = [
  {
    icon: Plug,
    name: "Laundry Day Washer",
    isOn: true,
    location: "Laundry Room",
    usage: "1.2",
    note: "Run laundry only on weekends to save energy",
  },
  {
    icon: Plug,
    name: "Kitchen Fridge",
    isOn: false,
    location: "Kitchen",
    usage: "0.5",
    note: "Turn off when leaving for vacation",
  },
  {
    icon: Plug,
    name: "Morning Brew Coffee Maker",
    isOn: true,
    location: "Kitchen",
    usage: "0.3",
    note: "Brew coffee only on weekdays in the morning",
  },
  {
    icon: Lightbulb,
    name: "Cozy Evening Lamp",
    isOn: true,
    location: "Living Room",
    usage: "0.2",
    note: "Turn on in the evenings for a cozy atmosphere",
  },
  {
    icon: Plug,
    name: "Nightly Dishes Dishwasher",
    isOn: false,
    location: "Kitchen",
    usage: "1.5",
    note: "Run dishwasher every night after dinner",
  },
  {
    icon: Plug,
    name: "Quick Meals Microwave",
    isOn: true,
    location: "Kitchen",
    usage: "0.6",
    note: "Use microwave for quick meals during weekdays",
  },
  {
    icon: Lightbulb,
    name: "Evening Entertainment Lights",
    isOn: false,
    location: "Living Room",
    usage: "0.8",
    note: "Turn off the lights when not actively watching TV",
  },
  {
    icon: Plug,
    name: "Bedtime AC",
    isOn: true,
    location: "Bedroom",
    usage: "2.0",
    note: "Use AC only during hot nights for better sleep",
  },
  {
    icon: Plug,
    name: "Healthy Smoothie Blender",
    isOn: true,
    location: "Kitchen",
    usage: "0.7",
    note: "Make a healthy smoothie every morning",
  },
  {
    icon: Plug,
    name: "Work Computer",
    isOn: false,
    location: "Home Office",
    usage: "0.4",
    note: "Shut down the laptop after work hours",
  },
];
