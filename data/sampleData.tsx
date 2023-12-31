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
    value: "$235.50",
    rate: "3.21%",
    levelUp: true,
    icon: <CircleDollarSign size={24} />,
  },
  {
    title: "Total Usage",
    value: "1,242 kWh",
    rate: "12.45%",
    levelUp: true,
    icon: <Zap size={24} />,
  },
  {
    title: "Total Savings",
    value: "$15.75",
    rate: "0.9%",
    levelUp: true,
    icon: <Leaf size={24} />,
  },
  {
    title: "Active Devices",
    value: "8",
    rate: "1",
    levelUp: false,
    icon: <PlugZap size={24} />,
  },
];

export const feedback: Feedback[] = [
  {
    deviceName: "Home Office Computer",
    energyUsage: "40 kWh",
    suggestion: "Turn off the computer when not in use instead of leaving it in sleep mode.",
    severity: "low",
  },
  {
    deviceName: "Garage Freezer",
    energyUsage: "60 kWh",
    suggestion: "Ensure the door seal is tight and defrost regularly for optimal efficiency.",
    severity: "medium"
  },
  {
    deviceName: "Garden Sprinkler System",
    energyUsage: "20 kWh",
    suggestion: "Adjust the schedule to early morning or late evening to reduce evaporation and energy use.",
    severity: "low",
  },
  {
    deviceName: "Laundry Washing Machine",
    energyUsage: "80 kWh",
    suggestion: "Use cold water cycles and full loads to maximize energy efficiency.",
    severity: "medium"
  },
  {
    deviceName: "Dishwasher",
    energyUsage: "120 kWh",
    suggestion: "Run only when full and choose the eco-friendly setting if available.",
    severity: "high",
  }
];

export const alerts: Alert[] = [
  {
    title: "New Device Added",
    description: "You have added a new smart plug.",
    type: "info",
    timestamp: "2 hours ago",
  },
  {
    title: "Consumption Alert",
    description: "Device #8 has exceeded the limit of 2 kWh.",
    type: "warning",
    timestamp: "10 hours ago",
  },
  {
    title: "New Device Added",
    description: "You have added a new smart bulb.",
    type: "info",
    timestamp: "12 hours ago",
  },
];

export const deviceData: DeviceData[] = [
  {
    id: 1,
    icon: Plug,
    name: "Laundry Day Washer",
    isOn: true,
    location: "Laundry Room",
    usage: "1.2",
    note: "Run laundry only on weekends to save energy",
  },
  {
    id: 2,
    icon: Plug,
    name: "Kitchen Fridge",
    isOn: false,
    location: "Kitchen",
    usage: "0.5",
    note: "Turn off when leaving for vacation",
  },
  {
    id: 3,
    icon: Plug,
    name: "Morning Brew Coffee Maker",
    isOn: true,
    location: "Kitchen",
    usage: "0.3",
    note: "Brew coffee only on weekdays in the morning",
  },
  {
    id: 4,
    icon: Lightbulb,
    name: "Cozy Evening Lamp",
    isOn: true,
    location: "Living Room",
    usage: "0.2",
    note: "Turn on in the evenings for a cozy atmosphere",
  },
  {
    id: 5,
    icon: Plug,
    name: "Nightly Dishes Dishwasher",
    isOn: false,
    location: "Kitchen",
    usage: "1.5",
    note: "Run dishwasher every night after dinner",
  },
  {
    id: 6,
    icon: Plug,
    name: "Quick Meals Microwave",
    isOn: true,
    location: "Kitchen",
    usage: "0.6",
    note: "Use microwave for quick meals during weekdays",
  },
  {
    id: 7,
    icon: Lightbulb,
    name: "Evening Entertainment Lights",
    isOn: false,
    location: "Living Room",
    usage: "0.8",
    note: "Turn off the lights when not actively watching TV",
  },
  {
    id: 8,
    icon: Plug,
    name: "Bedtime AC",
    isOn: true,
    location: "Bedroom",
    usage: "2.0",
    note: "Use AC only during hot nights for better sleep",
  },
  {
    id: 9,
    icon: Plug,
    name: "Healthy Smoothie Blender",
    isOn: true,
    location: "Kitchen",
    usage: "0.7",
    note: "Make a healthy smoothie every morning",
  },
  {
    id: 10,
    icon: Plug,
    name: "Work Computer",
    isOn: false,
    location: "Home Office",
    usage: "0.4",
    note: "Shut down the laptop after work hours",
  },
];
