import { memo, useEffect, useState } from "react";

interface IQuantityInputProps {
  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
}

function BasketItemQuantityInput({
  productQuantity,
  setProductQuantity
}: IQuantityInputProps) {
  const [visualValue, setVisualValue] = useState(productQuantity);

  useEffect(() => {
    if (visualValue !== productQuantity) setVisualValue(productQuantity);
  }, [productQuantity]);

  // Функции
  function handleQuantityInputChange(value: string) {
    let newValue;

    if (!value || +value < 1) newValue = 1;
    else if (+value > 10) newValue = 10;
    else newValue = +value;

    setProductQuantity(newValue);
    setVisualValue(newValue);
  }
  // Функции END

  return (
    <input
      type="number"
      className="border-2 border-black-600 w-[30px] px-1 font-semibold text-[17px] text-center"
      value={visualValue}
      onChange={(e) => setVisualValue(+e.target.value)}
      onBlur={(e) => handleQuantityInputChange(e.target.value)}
      onFocus={(e) => e.target.select()}
    />
  );
}

export default memo(BasketItemQuantityInput);
