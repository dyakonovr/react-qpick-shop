import { IUser } from '@/types/user.types';

export function getValueFromLocalStorage(key: string): IUser | null {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Ошибка при извлечении значения из localStorage:', error);
    return null;
  }
}