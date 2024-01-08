export const formatAmount = (value: number) => {
  if (value < 1000) {
    return value.toString();
  } else if (value < 1000000) {
    const formattedNumber = (value / 1000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? `${(value / 1000).toFixed(0)}K`
      : `${formattedNumber}K`;
  } else if (value < 1000000000) {
    const formattedNumber = (value / 1000000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? `${(value / 1000000).toFixed(0)}M`
      : `${formattedNumber}M`;
  } else {
    const formattedNumber = (value / 1000000000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? `${(value / 1000000000).toFixed(0)}B`
      : `${formattedNumber}B`;
  }
};
