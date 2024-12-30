export const touUnique = <T>(data: T[]): T[] => {
  return Array.from(new Set(data));
};

export const touUniqueObject = <T, K extends keyof T>(data: T[], key: K): T[] => {
  const uniqueKeys = new Set();
  return data.filter(item => {
    const keyValue = item[key];
    if (uniqueKeys.has(keyValue)) {
      return false;
    } else {
      uniqueKeys.add(keyValue);
      return true;
    }
  });
};
