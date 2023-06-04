import classes from './Input.module.scss';
import IInput from '@interfaces/UI/IInput';
import InputMask from "react-input-mask";


function Input(props: IInput) {
  const { placeholder, isNumber } = props;

  if (!isNumber) {
    return (
      <div className={classes.input_wrapper}>
        <input
          type="text"
          placeholder={placeholder ? placeholder : ""} />
      </div>
    );
  } else {
    return (
      <div className={classes.input_wrapper}>
        <InputMask mask="+9 (999)-999-99-99" maskChar="_" alwaysShowMask="true" />
      </div>
    );
  }
};

export default Input;