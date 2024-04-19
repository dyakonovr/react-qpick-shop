export function generateSlug(str) {
  return str
    .toLowerCase() // Преобразование в нижний регистр
    .replace(/[^a-zA-Z0-9]/g, '-') // Замена спецсимволов на дефисы
    .replace(/-{2,}/g, '-') // Удаление повторяющихся дефисов
    .replace(/^-+|-+$/g, ''); // Удаление дефисов в начале и конце строки
}