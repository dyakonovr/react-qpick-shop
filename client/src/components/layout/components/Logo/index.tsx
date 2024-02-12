import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { PagePaths } from "@/enum/PagePaths";

function Logo() {
  return (
    <Link to={PagePaths.HOME} className={classes.logo}>
      QPICK
    </Link>
  );
}

export default Logo;
