import classes from './Input.module.scss';
import IInput from '@interfaces/UI/IInput';
import InputMask from "react-input-mask";


function Input(props: IInput) {
  const { placeholder, isNumber, id, maxLength, onlyNumbers = false } = props;

  if (!isNumber) {
    return (
      <div className={classes.input_wrapper}>
        <input
          type="text" id={id}
          maxLength={maxLength}
          onKeyDown={(e) => onlyNumbers && !/[0-9]/.test(e.key) && !["Backspace", "Tab", "Delete", "Enter"].includes(e.key) && e.preventDefault()}
          placeholder={placeholder || ""} />
      </div>
    );
  } else {
    return (
      <div className={classes.input_wrapper}>
        <InputMask mask="+7 (999)-999-99-99" maskChar="_" alwaysShowMask="true" id={id} />
      </div>
    );
  }
};

export default Input;