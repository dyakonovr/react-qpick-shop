export const formatProductsForCard = (productsArray) => {
  return productsArray.map(p => ({ id: p.id, name: p.name, price: p.price, img: p.imgs[0], rating: p.rating }));
}