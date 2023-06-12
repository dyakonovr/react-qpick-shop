import classes from './Logo.module.scss';
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to='/' className={classes.logo}>QPICK</Link>
  );
};

export default Logo;