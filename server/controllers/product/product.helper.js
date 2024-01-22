export const formatProductsForCard = (data) => {
  if (data instanceof Array) return data.map(p => ({ id: p.id, name: p.name, price: p.price, img: p.imgs[0], rating: p.rating }));
  return { id: data.id, name: data.name, price: data.price, img: data.imgs[0], rating: data.rating };
}