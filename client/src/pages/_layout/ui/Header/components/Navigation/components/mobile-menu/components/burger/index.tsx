import { forwardRef } from "react";
import classes from "./styles.module.scss";
import type { ForwardedRef, LegacyRef } from "react";

interface IHeaderNavigationBurgerButtonProps {
  isMenuShowed: boolean;
  setIsMenuShowed: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderNavigationBurgerButton = forwardRef(
  (props: IHeaderNavigationBurgerButtonProps, ref: ForwardedRef<HTMLElement>) => {
    const { isMenuShowed, setIsMenuShowed } = props;

    return (
      <button
        className={[classes.burger, isMenuShowed ? classes["burger--active"] : ""].join(
          " "
        )}
        aria-label="Открыть меню"
        aria-expanded="false"
        onClick={() => setIsMenuShowed((value) => !value)}
        ref={ref as LegacyRef<HTMLButtonElement>}
      >
        <span className={classes.burger_line}></span>
      </button>
    );
  }
);

export default HeaderNavigationBurgerButton;
