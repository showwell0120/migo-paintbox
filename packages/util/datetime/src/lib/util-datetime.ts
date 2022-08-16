export function utilDatetime(): string {
  return 'util-datetime';
}

export function convertUTCToLocalDate(date: number | Date | null) {
  if (!date) {
    return null;
  }
  const dateObject = new Date(date);
  return dateObject;
}

export function convertLocalToUTCDate(date: Date) {
  if (!date) {
    return null;
  }

  const utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  return utc;
}