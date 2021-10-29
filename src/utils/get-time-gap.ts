import timeInMilliseconds from "./enums/time-in-milliseconds";

const getFormat = (ms: number): string => {
  if (ms < timeInMilliseconds.minute) return "now";
  else if (ms < timeInMilliseconds.hour) return "minutes";
  else if (ms < timeInMilliseconds.day) return "hours";
  else if (ms < timeInMilliseconds.month) return "days";
  else if (ms < timeInMilliseconds.year) return "months";
  return "years";
};

const getTimeGap = (date: string): string => {
  const gap = Math.abs(new Date(date).getTime() - Date.now());

  switch (getFormat(gap)) {
    case "now":
      return "less than a minute ago";
    case "minutes":
      const minutes = Math.round(gap / 1000 / 60);
      return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
    case "hours":
      const hours = Math.round(gap / 1000 / 60 / 60);

      return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    case "days":
      const days = Math.round(gap / 1000 / 60 / 60 / 24);

      return days === 1 ? `${days} day ago` : `${days} days ago`;
    case "months":
      const months = Math.round(gap / 1000 / 60 / 60 / 24 / 30);

      return months === 1 ? `${months} month ago` : `${months} months ago`;
    case "years":
      const years = Math.round(gap / 1000 / 60 / 60 / 24 / 30 / 365);

      return years === 1 ? `${years} year ago` : `${years} years ago`;
  }
};

export default getTimeGap;
