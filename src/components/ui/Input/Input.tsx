import classes from './Input.module.scss';
import IInput from '@interfaces/UI/IInput';
import InputMask from "react-input-mask";
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setPromoCode } from '@store/cart/CartSlice';


function Input(props: IInput) {
  const { placeholder, isNumber, id, maxLength, onlyNumbers = false, isPromoCode } = props;
  const { promoCodes } = useAppSelector(state => state.databaseSlice);
  const dispatch = useAppDispatch();

  function handleEnterClick(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const promoCodesNames = Object.keys(promoCodes);
    
    if (promoCodesNames.includes(input.value)) {
      const promoCodeValue = promoCodes[input.value];
      dispatch(setPromoCode(promoCodeValue));
    } else alert("Такого промокода не существует!");
  }

  if (isNumber) { // Если это ввод телефона
    return (
      <div className={classes.input_wrapper}>
        <InputMask mask="+7 (999)-999-99-99" maskChar="_" alwaysShowMask="true" id={id} />
      </div>
    );
  } else if (isPromoCode) { // Если это инпут для промокода
    return (
      <div className={classes.input_wrapper}>
        <input
          type="text" id={id}
          maxLength={maxLength}
          onKeyDown={(e) => e.key === "Enter" && handleEnterClick(e)}
          placeholder={placeholder || ""} />
      </div>
    );
  } else {
    return (
      <div className={classes.input_wrapper}>
        <input
          type="text" id={id}
          maxLength={maxLength}
          onKeyDown={(e) => onlyNumbers && !/[0-9]/.test(e.key) && !["Backspace", "Tab", "Delete", "Enter"].includes(e.key) && e.preventDefault()}
          placeholder={placeholder || ""} />
      </div>
    );
  }
};

export default Input;