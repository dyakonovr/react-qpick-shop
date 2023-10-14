import { useSearchParams } from 'react-router-dom';
import classes from './SuccessOrder.module.scss'

function SuccessOrder() {
  const [searchParams, _] = useSearchParams();
  const orderId = searchParams.get("id");

  return (
    <div className={`block ${classes.success}`}>Номер вашего заказа №{orderId}, с Вами свяжется наш менеджер.</div>
  );
};

export default SuccessOrder;