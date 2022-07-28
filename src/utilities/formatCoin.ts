const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatCurrency = (amaunt: number) => {
  return amaunt ? CURRENCY_FORMATER.format(amaunt) : "";
};
