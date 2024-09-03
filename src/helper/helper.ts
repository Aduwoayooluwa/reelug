/* eslint-disable @typescript-eslint/no-explicit-any */
export const createMarkup = (htmlContent: unknown) => {
  return { __html: htmlContent };
};

export function debounce(func: (...args: any[]) => void, delay: number) {
  let timeoutId: any;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
