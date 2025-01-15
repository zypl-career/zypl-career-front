export const removeEmpty = <T>(data: T): T => {
  if (Array.isArray(data)) {
    return data.filter(item => item) as unknown as T;
  }

  if (typeof data === 'object') {
    return Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(data ?? {}).filter(([_, value]) => value !== null && value !== undefined),
    ) as unknown as T;
  }

  return data;
};
