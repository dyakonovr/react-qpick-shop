import HeaderNavigation from "./components/Navigation";
import SearchInput from "./components/SearchInput";
import classes from "./styles.module.scss";
import Logo from "@/components/layout/components/Logo";

function Header() {
  return (
    <header className={classes.header}>
      <Logo className="z-[6]" />
      <SearchInput placeholder="Поиск..." />
      <HeaderNavigation />
    </header>
  );
}

export default Header;
