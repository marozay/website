const MONTH_YEAR = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const formatDate = (date: Date): string => MONTH_YEAR.format(date);

export const formatDuration = (start: Date, end?: Date): string => {
  const until = end ?? new Date();
  let totalMonths =
    (until.getFullYear() - start.getFullYear()) * 12 + (until.getMonth() - start.getMonth());

  if (until.getDate() < start.getDate()) totalMonths -= 1;
  if (totalMonths <= 0) return "1 mo";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return [years > 0 ? `${years} yr` : "", months > 0 ? `${months} mo` : ""]
    .filter(Boolean)
    .join(" ");
};

export const toIsoDate = (date: Date): string => date.toISOString().slice(0, 10);
