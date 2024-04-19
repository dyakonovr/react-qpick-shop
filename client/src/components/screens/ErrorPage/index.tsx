import { Link } from "react-router-dom";
import { PagePaths } from "@/enum/PagePaths";

function ErrorPage() {
  return (
    <div className="flex flex-col m-auto w-fit text-center">
      <p className="text-4xl">Произошла неожиданная ошибка...</p>
      <p className="text-3xl">
        Предлагаю вернуться в{" "}
        <Link
          to={PagePaths.CATALOG}
          className="text-[#ffa542] hover:text-[#ffb000] transition-colors"
        >
          Каталог
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
