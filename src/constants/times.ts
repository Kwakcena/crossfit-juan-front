export const times = [
  "2200",
  "2100",
  "2000",
  "1900",
  "1800",
  "1700",
  "1200",
  "1000",
  "0900",
  "0630",
] as const;

export type Times = typeof times[number];
