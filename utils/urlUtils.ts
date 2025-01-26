export const getIsEnglishPath = (pathName: string) => {
  try {
    const pathSegments = pathName.split('/');
    return pathSegments[1] === 'en';
  } catch (error) {
    console.error('Invalid URL:', error);
    return false;
  }
};
