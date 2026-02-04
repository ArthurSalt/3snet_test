import type { Tab } from "../types/types";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const NAV_TABS: Tab[] = [
  { id: "dashboard", label: "DASHBOARD" },
  { id: "statistics", label: "STATISTICS" },
  { id: "offers", label: "OFFERS" },
  { id: "advertisers", label: "ADVERTISERS" },
  { id: "partners", label: "PARTNERS" },
  { id: "tickets", label: "TICKETS" },
  { id: "billing", label: "BILLING" },
  { id: "tasks", label: "TASKS" },
  { id: "news", label: "NEWS" },
  { id: "settings", label: "SETTINGS" },
];

export const TABLE_TABS: Tab[] = [
  { id: "scheme", label: "Scheme" },
  { id: "plan", label: "Plan" },
  { id: "payment", label: "Payment" },
];
