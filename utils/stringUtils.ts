export const splitAtLinebreaks = (s: string) => !/^\s*$/.test(s);
export const removeAllWhiteSpace = (s: string) => s.replace(/\s/g, '');
export const getTextBetweenSymbols = (
  s: string,
  symbolOne: string,
  symbolTwo: string
) => s.substring(s.lastIndexOf(symbolOne) + 1, s.lastIndexOf(symbolTwo));
export const trimText = (s: string, maxCharLength: number) => {
  const trimmedString = s.substr(0, maxCharLength);

  // re-trim if we are in the middle of a word
  return trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
  );
};
