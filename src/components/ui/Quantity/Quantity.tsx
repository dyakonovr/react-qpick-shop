import classes from './Quantity.module.scss'

function Quantity({ quantity }: {quantity: number}) {
  return (
    <div className={classes.quantity_wrapper}>
      {quantity <= 9
        ?
        <span className={classes.quantity}>{quantity}</span>
        :
        <span className={`${classes.quantity} ${classes["quantity--small"]}`}>9+</span>
    }
      
    </div>
  );
};

export default Quantity;