export const getContentType = () => ({ 'Content-Type': 'application/json' });

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  if (!message) return error.message;

  if (typeof error.response.data.message === 'object') return message[0];
  return message;
}