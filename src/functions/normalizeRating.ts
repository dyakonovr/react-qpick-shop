export function normalizeRating(rating: number) {
  return Number.isInteger(rating) ? `${rating}.0` : rating;
}