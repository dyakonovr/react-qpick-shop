import { InputHTMLAttributes, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X as CloseIcon } from "lucide-react";
import { PagePaths } from "@/enum/PagePaths";
import { useQueryParams } from "@/hooks/general/useQueryParams";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

function SearchInput({ placeholder }: SearchInputProps) {
  const navigate = useNavigate();
  const searchTerm = useQueryParams("searchTerm");
  const [value, setValue] = useState(searchTerm || "");

  // Функции
  function handleEnterDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    navigate(`${PagePaths.CATALOG}?searchTerm=${value}`);
  }
  // Функции END

  return (
    <div className="flex relative max-w-[400px] w-full">
      <input
        className="w-full py-1 ps-3 pe-6 rounded-md"
        type="text"
        placeholder={placeholder}
        aria-label="Search"
        onKeyDown={handleEnterDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <button
          className="absolute right-0 bottom-2/4 translate-y-2/4 p-1"
          onClick={() => setValue("")}
        >
          <CloseIcon size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
