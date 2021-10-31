const replaceSpecialCharacters = (text) => {
  const replacedText1 = text.replace(/&quot;/g, '"');
  const replacedText2 = replacedText1.replace(/(L&#39;)|(l&#39;)/g, "'");
  return replacedText2;
};

export default replaceSpecialCharacters;
