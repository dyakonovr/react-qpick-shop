import classes from './Order.module.scss';
import deliveryMapImage from "@assets/delivery-map.jpg";
import Select from 'react-select';
import Input from '@UI/Input/Input';


const townsSelectOptions = [
  {value: 'Ульяновск', label: 'Ульяновск'},
  {value: 'Москва', label: 'Москва'},
  {value: 'Красноярск', label: 'Красноярск'},
  {value: 'Апшеронск', label: 'Апшеронск'},
];

const accountsSelectOptions = [
  {value: 'kaspi.kz', label: 'Счет на kaspi.kz'},
  {value: 'sberbank', label: 'Счет Сбербанк *2462'},
  {value: 'tinkoff', label: 'Счет Тинькофф *2295'},
];

function Order() {
  return (
    // <section className={classes.order}>
    //   <strong className="subtitle">Оформление заказа</strong>
    //   <div className={classes.order__container}>
    //     {/* Левый блок с формой */}
    //     <div className={`${classes.form} block`}>
    //       <div className={classes.form__header}>
    //         <strong className={classes.title}>Доставка курьером</strong>
    //         <span className={classes.price}>499 Руб.</span>
    //       </div>
    //       <div className={classes["form__delivery-image"]}><img src={deliveryMapImage} alt='' /></div>
    //       <strong className={classes.form__subtitle}>Адрес доставки</strong>
    //       <form className={classes.column}>
    //         <Select options={townsSelectOptions} placeholder="Город" classNamePrefix="select" />
    //         <Input placeholder="Улица / Район" />
    //         <div className={classes.form__table}>
    //           <Input placeholder='Дом' />
    //           <Input placeholder="Подъезд" />
    //           <Input placeholder="Квартира" />
    //         </div>
    //       </form>
    //     </div>

    //     {/* Правый блок с оформлением */}
    //     <div className={classes.column}>
    //       <div className={`${classes["order-list"]} block`}>
    //         <strong className={classes.title}>Ваш заказ</strong>
    //         <div className={classes.column}>
    //           <div className={classes["order-list__row"]}>
    //             <span className={`${classes["order-list__quantity"]} ${classes.text}`}>1x</span>
    //             <p className={`${classes["order-list__text"]} ${classes.text}`}>Название товара</p>
    //             <span className={`${classes["order-list__price"]} ${classes.price}`}>299 Руб.</span>
    //           </div>
    //           <div className={classes["order-list__row"]}>
    //             <p className={`${classes["order-list__text"]} ${classes.text}`}>Доставка</p>
    //             <span className={`${classes["order-list__price"]} ${classes.price}`}>29 Руб.</span>
    //           </div>
    //           <div className={classes["order-list__row"]}>
    //             <p className={`${classes["order-list__text"]} ${classes.text}`}>К оплате</p>
    //             <span className={`${classes["order-list__price"]} ${classes.price}`}>350 Руб.</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={`block ${classes.column}`}>
    //         <strong className={`${classes.title}`}>Способ оплаты</strong>
    //           <Select options={accountsSelectOptions} placeholder="Выберите счет для оплаты" classNamePrefix="select" />
    //           <Input placeholder="Промокод" />
    //       </div>
    //       <div className={`block ${classes.column}`}>
    //         <strong className={classes.title}>Номер получателя</strong>
    //         <Input isNumber={true} />
    //       </div>
    //       <a href="#" className={`${classes.order__link} link`}>Закончить оформление</a>
    //     </div>
    //   </div>
    // </section>
    <div className={`block ${classes.success}`}>Номер вашего заказа №123123, с Вами свяжется наш менеджер.</div>
  );
};

export default Order;