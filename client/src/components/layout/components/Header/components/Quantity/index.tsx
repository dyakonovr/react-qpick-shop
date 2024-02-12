import classes from "./styles.module.scss";

interface IQuantityProps {
  quantity: number;
}

function Quantity({ quantity }: IQuantityProps) {
  if (quantity === 0) return null;

  const quantityClasses =
    quantity <= 9
      ? classes.quantity
      : `${classes.quantity} ${classes["quantity--small"]}`;

  return (
    <div className={classes.quantity_wrapper}>
      <span className={quantityClasses}>{quantity <= 9 ? quantity : "9+"}</span>
    </div>
  );
}

export default Quantity;
