import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import InputMask from "react-input-mask";
import { setPromoCode } from 'store/cart/CartSlice';

interface IInputProps {
  placeholder?: string,
  id?: string,
  maxLength?: number,
  isNumber?: boolean,
  onlyNumbers?: boolean,
  isPromoCode?: boolean
}

function Input({placeholder = "", id = "", maxLength, isNumber = false, onlyNumbers = false, isPromoCode = false}: IInputProps ) {
  const promoCodes = useAppSelector(state => state.databaseSlice.promoCodes);
  const dispatch = useAppDispatch();

  function handleEnterClick(input: HTMLInputElement) {
    const promoCodesNames = Object.keys(promoCodes);
    
    if (promoCodesNames.includes(input.value)) dispatch(setPromoCode(promoCodes[input.value]));
    else alert("Такого промокода не существует!");
  }

  if (isNumber) { // Если это ввод телефона
    return (
      <div className="input_wrapper">
        <InputMask mask="+7 (999)-999-99-99" maskChar="_" alwaysShowMask="true" id={id} />
      </div>
    );
  }
  
  else if (isPromoCode) { // Если это инпут для промокода
    return (
      <div className="input_wrapper">
        <input
          type="text" id={id}
          maxLength={maxLength}
          onKeyDown={(e) => e.key === "Enter" && handleEnterClick(e.target as HTMLInputElement)}
          placeholder={placeholder} />
      </div>
    );
  }
  
  else {
    return (
      <div className="input_wrapper">
        <input
          type="text" id={id}
          maxLength={maxLength}
          onKeyDown={(e) => onlyNumbers && !/[0-9]/.test(e.key) && !["Backspace", "Tab", "Delete", "Enter"].includes(e.key) && e.preventDefault()}
          placeholder={placeholder} />
      </div>
    );
  }
};

export default Input;