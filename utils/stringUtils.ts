export const splitAtLinebreaks = (s: string) => !/^\s*$/.test(s);
export const removeAllWhiteSpace = (s: string) => s.replace(/\s/g, '');
export const getTextBetweenSymbols = (
  s: string,
  symbolOne: string,
  symbolTwo: string
) => s.substring(s.lastIndexOf(symbolOne) + 1, s.lastIndexOf(symbolTwo));
