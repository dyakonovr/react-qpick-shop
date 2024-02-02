import { PagePaths } from "@/enum/PagePaths";
import classes from './styles.module.scss';
import { Link } from "react-router-dom";

function Logo() {
  return <Link to={PagePaths.HOME} className={classes.logo}>QPICK</Link>
};

export default Logo;