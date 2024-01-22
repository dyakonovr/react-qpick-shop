export const formatBasketItemData = (bi) => {
  bi = bi.dataValues
  const product = bi.product.dataValues;

  return {
    ...bi,
    product: {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.imgs[0]
    }
  }
}