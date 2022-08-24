/** Locales */
export type AvaliableLocales = 'ind';

/** Date time */
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

export const timezoneOffestMap: Record<AvaliableLocales, number> = {
  ind: 7,
};

/** Currency */
export type SupportedCurrency = 'IDR';

export const currencyLocalesMap: Record<SupportedCurrency, AvaliableLocales> = {
  IDR: 'ind',
};

export const localesCurrencyMap: Record<AvaliableLocales, string> = {
  ind: 'IDR',
};

export function formatCurrency(currency: SupportedCurrency) {
  currency = currency || 'IDR';
  return new Intl.NumberFormat(currencyLocalesMap[currency], {
    style: 'currency',
    currency: currency,
    useGrouping: true,
    minimumFractionDigits: 0,
  });
}
