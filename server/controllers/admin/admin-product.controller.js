import { ApiErrorHandler } from "../../error/api-error.handler.js";
import { Category, Product, ProductCharacteristic, ProductImage } from "../../models/models.js";

class AdminProductController {
  getAll = async (req, res, next) => {
    try {
      const range = JSON.parse(req.query.range);
      const sort = JSON.parse(req.query.sort);

      const products = await Product.findAndCountAll({
        include: Category,
        offset: range[0],
        limit: range[1] - range[0] + 1,
        order: [sort]
      });
      return res.json({ data: products.rows, total: products.count });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  getManyReference = async (req, res, next) => {
    try {
      const filter = JSON.parse(req.query.filter);
      const range = JSON.parse(req.query.range);
      const sort = JSON.parse(req.query.sort);

      const products = await Product.findAndCountAll({
        where: filter,
        offset: range[0],
        limit: range[1] - range[0] + 1,
        order: [sort] });
      return res.json({ data: products.rows, total: products.count });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  create = async (req, res, next) => {
    try {
      const { name, price, category_id, info, rating, image, gallery } = req.body;

      const product = await Product.create({ name, price, category_id, info, rating, image });

      for (let index = 0; index < gallery.length; index++) {
        await ProductImage.create({ url: gallery[index].url, product_id: product.id });
      }

      for (let index = 0; index < info.length; index++) {
        await ProductCharacteristic.create({ ...info[index], product_id: product.id });
      }

      return res.json(product);
    } catch (e) {
      next(ApiErrorHandler.internal(e.message));
    }
  }

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        include: [
          {
            model: ProductImage,
            attributes: { exclude: ["id", "product_id"] },
          },
          {
            model: ProductCharacteristic,
            attributes: { exclude: ["id", "product_id"] },
          }
        ]
      });

      if (!product) return next(ApiErrorHandler.notFound("Такого продукта не найдено"));

      const { product_images: gallery, product_characteristics: info, ...restProductData } = product.dataValues;
      return res.json({
        ...restProductData,
        gallery,
        info
      });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, price, category_id, rating, image, gallery } = req.body;
      const product = await Product.findByPk(id);

      if (!product) return next(ApiError.internal("Такого продукта не найдено"));

      product.name = name;
      product.price = price;
      product.category_id = category_id;
      product.rating = rating;
      product.image = image;

      // Получить текущие фотографии товара
      const currentImages = await ProductImage.findAll({ where: { product_id: product.id } });

      // Сравнить текущие фотографии с новыми ссылками из PUT-запроса
      const currentUrls = currentImages.map(({ dataValues }) => dataValues.url);

      // Найти фотографии, которые нужно удалить
      const imagesToDelete = currentImages.filter(image => !gallery.includes(image.url));

      // Удалить фотографии, которые нужно удалить
      await Promise.all(imagesToDelete.map(image => image.destroy()));

      // Добавить новые фотографии
      const newImagesUrls = gallery.filter(url => !currentUrls.includes(url));
      await Promise.all(newImagesUrls.map(({ url }) => ProductImage.create({ url, product_id: product.id })));


      // !!

      let { info } = req.body;

      const existingCharacteristics = await ProductCharacteristic.findAll({ where: { product_id: product.id } });
      const characteristicNamesForUpdate = info.map(el => el.name);

      for (let index = 0; index < existingCharacteristics.length; index++) {
        const currentCharacteristic = existingCharacteristics[index].dataValues;
        const currentCharacteristicName = currentCharacteristic.name;

        if (characteristicNamesForUpdate.includes(currentCharacteristicName)) {
          const characteristicForUpdate = info.map(el => el.name === currentCharacteristicName);

          if (characteristicForUpdate.value !== currentCharacteristic.value) {
            await ProductCharacteristic.update({ value: characteristicForUpdate.value }, { where: { id: currentCharacteristic.id } });
          }

          info = info.filter(el => el.name !== currentCharacteristicName);
        } else {
          await ProductCharacteristic.destroy({ where: { id: currentCharacteristic.id } });
        }
      }

      for (let index = 0; index < info.length; index++) {
        const newCharacteristic = info[index];
        await ProductCharacteristic.create({ name: newCharacteristic.name, value: newCharacteristic.value, product_id: product.id });
      }

      await product.save();

      return res.json(product);
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;

      await ProductCharacteristic.destroy({ where: { product_id: id } });
      await ProductImage.destroy({ where: { product_id: id } });

      const product = await Product.findByPk(id);
      await product.destroy();

      return res.json({ data: product });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }

  deleteMany = async (req, res, next) => {
    try {
      const filter = JSON.parse(req.query.filter);
      const products = await Product.findAll({ where: filter });

      for (let index = 0; index < products.length; index++) {
        products[index].destroy();
      }

      return res.json({ data: products });
    } catch (error) {
      next(ApiErrorHandler.internal(error.message));
    }
  }
}

export default new AdminProductController();