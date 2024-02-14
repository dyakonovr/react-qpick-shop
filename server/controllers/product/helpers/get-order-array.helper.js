export function getOrderArray(sort) {
  switch (sort) {
    case "high-price":
      return ["price", "DESC"];
    case "low-price":
      return ["price", "ASC"];
    case "high-rating":
      return ["rating", "DESC"];
    case "low-rating":
      return ["rating", "ASC"];
    default:
      return null;
  }
}