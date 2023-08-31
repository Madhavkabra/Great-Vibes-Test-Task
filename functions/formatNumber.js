export const formatNumber = (num) =>
  num?.toLocaleString?.(navigator.language, {
    minimumFractionDigits: 0,
  });
