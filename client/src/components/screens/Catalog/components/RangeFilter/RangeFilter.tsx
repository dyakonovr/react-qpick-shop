import { InputHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form';

interface IRangeFitlerProps extends InputHTMLAttributes<HTMLInputElement> {
  filterTitle: string;
  registerMinInputKey: string;
  registerMaxInputKey: string;
}

function RangeFilter({
  filterTitle,
  registerMinInputKey,
  registerMaxInputKey,
  min,
  max,
  step,
}: IRangeFitlerProps) {
  const { register } = useFormContext();

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
          {...register(registerMinInputKey, { setValueAs: (value) => +value })}
        />
        <input
          type="number"
          placeholder="До"
          className="p-1 rounded-md"
          min={min}
          max={max}
          step={step}
          {...register(registerMaxInputKey, { setValueAs: (value) => +value })}
        />
      </div>
    </div>
  );
}

export default RangeFilter;
