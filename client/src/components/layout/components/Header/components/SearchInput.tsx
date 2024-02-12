import { InputHTMLAttributes, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PagePaths } from "@/enum/PagePaths";
import { useQueryParams } from "@/hooks/general/useQueryParams";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

function SearchInput({ placeholder }: SearchInputProps) {
  const navigate = useNavigate();
  const searchTerm = useQueryParams("searchTerm");

  // Функции
  function handleEnterDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    navigate(`${PagePaths.CATALOG}?searchTerm=${e.currentTarget.value}`);
  }
  // Функции END

  return (
    <form
      className="max-w-[400px] w-full"
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="w-full py-1 px-3 rounded-md"
        type="search"
        placeholder={placeholder}
        defaultValue={searchTerm || ""}
        aria-label="Search"
        onKeyDown={handleEnterDown}
      />
    </form>
  );
}

export default SearchInput;
