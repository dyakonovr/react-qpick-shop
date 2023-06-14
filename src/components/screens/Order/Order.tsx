import classes from './Order.module.scss';
import deliveryMapImage from "@assets/delivery-map.jpg";
import Select from 'react-select';
import Input from '@UI/Input/Input';
import { useAppSelector } from '@hooks/useAppSelector';
import { normalizePrice } from '@functions/normalizePrice';
import ICartProduct from '@interfaces/store/cart/ICartProduct';
import IOrder from '@interfaces/store/orders/IOrder';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { addNewOrder } from '@store/orders/ordersSlice';


const townsSelectOptions = [
  {value: 'Ульяновск', label: 'Ульяновск'},
  {value: 'Москва', label: 'Москва'},
  {value: 'Красноярск', label: 'Красноярск'},
  {value: 'Апшеронск', label: 'Апшеронск'},
];

const bankAccountsSelectOptions = [
  {value: 'kaspi.kz', label: 'Счет на kaspi.kz'},
  {value: 'sberbank', label: 'Счет Сбербанк *2462'},
  {value: 'tinkoff', label: 'Счет Тинькофф *2295'},
];

function Order() {
  const dispatch = useAppDispatch();

  const { products, deliveryPrice, totalPrice } = useAppSelector(state => state.cartSlice);
  const { lastOrderId } = useAppSelector(state => state.ordersSlice);

  // Функции
  function createProducts() {
    return products.map((product: ICartProduct) => {
      return (
        <div className={classes["order-list__row"]} key={product.id}>
          <span className={`${classes["order-list__quantity"]} ${classes.text}`}>{product.quantity}x</span>
          <p className={`${classes["order-list__text"]} ${classes.text}`}>{product.name}</p>
          <span className={`${classes["order-list__price"]} ${classes.price}`}>{normalizePrice(product.price * product.quantity)}</span>
        </div>
      );
    });
  }

  function createOrder() {
    const formObject = formValidate();
    
    if (formObject) { // Форма заполнена правильно
      const orderObject: IOrder = { ...formObject, id: lastOrderId + 1, price: totalPrice + deliveryPrice, products };
      dispatch(addNewOrder(orderObject));
    }
  }

  function formValidate() {
    const townsSelect = document.querySelector("#towns-select");
    const bankAccountSelect = document.querySelector("#bank-account-select");

    const town = townsSelect ? townsSelect.querySelector(".select__single-value")?.innerHTML : "";
    const bankAccount = bankAccountSelect ? bankAccountSelect.querySelector(".select__single-value")?.innerHTML : "";

    const street =  (document.querySelector("#street-input") as HTMLInputElement).value || "";
    const house = (document.querySelector("#house-input") as HTMLInputElement).value || "";
    const entrance = (document.querySelector("#entrance-input") as HTMLInputElement).value || "";
    const apartament = (document.querySelector("#apartament-input") as HTMLInputElement).value || "";

    const clientNumber =  (document.querySelector("#number-input") as HTMLInputElement).value || "" ;
    
    if (town && bankAccount && street && house && entrance && apartament && clientNumber) {
      const fullAdress = `г. ${town}, ул. ${street}, д. ${house}, подъезд ${entrance}, кв. ${apartament}`;
      return { fullAdress, bankAccount, clientNumber };
    }

    return {};
  }
  // Функции END

  return (
    <section className={classes.order}>
      <strong className="subtitle">Оформление заказа</strong>
      <div className={classes.order__container}>
        {/* Левый блок с формой */}
        <div className={`${classes.form} block`}>
          <div className={classes.form__header}>
            <strong className={classes.title}>Доставка курьером</strong>
            <span className={classes.price}>{normalizePrice(deliveryPrice)}</span>
          </div>
          <div className={classes["form__delivery-image"]}><img src={deliveryMapImage} alt='' /></div>
          <strong className={classes.form__subtitle}>Адрес доставки</strong>
          <form className={classes.column}>
            <Select options={townsSelectOptions} placeholder="Город" classNamePrefix="select" id="towns-select" />
            <Input placeholder="Улица / Район" id="street-input" maxLength={132} />
            <div className={classes.form__table}>
              <Input placeholder='Дом' id="house-input" maxLength={5} onlyNumbers={true} />
              <Input placeholder="Подъезд" id="entrance-input" maxLength={5} onlyNumbers={true} />
              <Input placeholder="Квартира" id="apartament-input" maxLength={5} onlyNumbers={true} />
            </div>
          </form>
        </div>

        {/* Правый блок с оформлением */}
        <div className={classes.column}>
          <div className={`${classes["order-list"]} block`}>
            <strong className={classes.title}>Ваш заказ</strong>
            <div className={classes.column}>
              {createProducts()}
              <div className={classes["order-list__row"]}>
                <p className={`${classes["order-list__text"]} ${classes.text}`}>Доставка</p>
                <span className={`${classes["order-list__price"]} ${classes.price}`}>{normalizePrice(deliveryPrice)}</span>
              </div>
              <div className={classes["order-list__row"]}>
                <p className={`${classes["order-list__text"]} ${classes.text}`}>К оплате</p>
                <span className={`${classes["order-list__price"]} ${classes.price}`}>{normalizePrice(totalPrice + deliveryPrice)}</span>
              </div>
            </div>
          </div>
          <div className={`block ${classes.column}`}>
            <strong className={`${classes.title}`}>Способ оплаты</strong>
              <Select options={bankAccountsSelectOptions} placeholder="Выберите счет для оплаты" classNamePrefix="select" id="bank-account-select" />
              <Input placeholder="Промокод" maxLength={15} />
          </div>
          <div className={`block ${classes.column}`}>
            <strong className={classes.title}>Номер получателя</strong>
            <Input isNumber={true} id="number-input" />
          </div>
          <button className={`${classes.order__link} link`} onClick={createOrder} type="button">Закончить оформление</button>
        </div>
      </div>
    </section>

    // <div className={`block ${classes.success}`}>Номер вашего заказа №123123, с Вами свяжется наш менеджер.</div>
  );
};

export default Order;