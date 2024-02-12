import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface IRangeFitlerProps extends InputHTMLAttributes<HTMLInputElement> {
  filterTitle: string;
  registerMinInputKey: string;
  registerMaxInputKey: string;
  min: number;
  max: number;
}

function RangeFilter({
  filterTitle,
  registerMinInputKey,
  registerMaxInputKey,
  min,
  max,
  step
}: IRangeFitlerProps) {
  const { register, setValue, getValues } = useFormContext();

  // Функции
  const handleMinInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = +event.target.value;
    const maxValue = getValues(registerMaxInputKey);

    if (minValue && maxValue && minValue > maxValue) {
      const newMaxValue = Math.min(max, Math.ceil(minValue * 1.2));
      setValue(registerMaxInputKey, newMaxValue);
    }

    if (minValue) setValue(registerMinInputKey, Math.max(minValue, min));
  };

  const handleMaxInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxValue = +event.target.value;
    const minValue = getValues(registerMinInputKey);

    if (minValue && maxValue && maxValue < minValue) {
      const newMinValue = Math.max(min, Math.floor(maxValue * 0.8));
      setValue(registerMinInputKey, newMinValue);
    }

    if (maxValue) setValue(registerMaxInputKey, Math.min(maxValue, max));
  };
  // Функции END

  return (
    <div>
      <p>{filterTitle}</p>
      <div className="grid grid-cols-2 gap-3 mt-1">
        <input
          type="number"
          placeholder="От"
          className="p-1 rounded-md"
          min={min}
          max={max}
          step={step}
          {...register(registerMinInputKey, {
            setValueAs: (value) => +value,
            min,
            max
          })}
          onBlur={handleMinInputBlur}
        />
        <input
          type="number"
          placeholder="До"
          className="p-1 rounded-md"
          min={min}
          max={max}
          step={step}
          {...register(registerMaxInputKey, {
            setValueAs: (value) => +value,
            min,
            max
          })}
          onBlur={handleMaxInputBlur}
        />
      </div>
    </div>
  );
}

export default RangeFilter;
