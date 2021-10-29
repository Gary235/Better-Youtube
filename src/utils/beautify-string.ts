import regexes from "./enums/regexes";

const beautifyString = (text: string, isPreview = false) => {
  const beautifiedText = text
    .split(regexes.descriptionSeparator)
    .map((word) => {
      if (word === "") return "\n";
      if (word.match(regexes.begginsWithAt))
        return `<a href="" class="channel">${word}</a>`;
      if (word.match(regexes.begginsWithHash))
        return `<a href="" class="tag">${word}</a>`;
      if (word.match(regexes.isAUrl))
        return `<a href="${word.trim()}" target="_blank">${word}</a><br>`;

      return word;
    })
    .join(" ");
  return isPreview ? beautifiedText.slice(0, 250) + "..." : beautifiedText;
};

export default beautifyString;
