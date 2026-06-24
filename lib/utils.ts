export function formatEventDate(value: string) {
  return new Intl.DateTimeFormat("en-ZA", { day: "2-digit", month: "short", year: "numeric", timeZone: "Africa/Johannesburg" }).format(new Date(value));
}

export function cn(...values: Array<string | false | null | undefined>) { return values.filter(Boolean).join(" "); }
