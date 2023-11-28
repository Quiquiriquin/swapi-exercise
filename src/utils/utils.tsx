export const formatStrings = (strToFormat: string) => {
  const splittedString = strToFormat.split(",");
  const formatted = splittedString.map((chain: string) => {
    const upper = chain.charAt(0).toUpperCase();
    const rest = chain.substring(1);
    return `${upper}${rest}`;
  });
  return formatted.join(", ");
};

export const formatNumbers = (numberToFormat: number | string) => {
  if (numberToFormat === "unknown") {
    return "Unknown";
  }
  return Number(numberToFormat).toLocaleString();
};
