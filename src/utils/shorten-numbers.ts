const getFormat = (number: number): { number: number; suffix: string } => {
  if (number < 1_000) return { number, suffix: "" };
  else if (number < 1_000_000)
    return { number: Math.round(number / 1_000), suffix: "k" };
  return { number: Math.round(number / 1_000_000), suffix: "M" };
};

const shortenNumbers = (number: number) => {
  const shortNumber = getFormat(number);
  return `${shortNumber.number}${shortNumber.suffix}`;
};

export default shortenNumbers;
