import classes from "./styles.module.scss";

interface IHeaderNavigationBurgerButtonProps {
  isMenuShowed: boolean;
  setIsMenuShowed: React.Dispatch<React.SetStateAction<boolean>>;
}

function HeaderNavigationBurgerButton({
  isMenuShowed,
  setIsMenuShowed
}: IHeaderNavigationBurgerButtonProps) {
  return (
    <button
      className={[classes.burger, isMenuShowed ? classes["burger--active"] : ""].join(
        " "
      )}
      aria-label="Открыть меню"
      aria-expanded="false"
      data-burger
      onClick={() => setIsMenuShowed((value) => !value)}
    >
      <span className={classes.burger_line}></span>
    </button>
  );
}

export default HeaderNavigationBurgerButton;
