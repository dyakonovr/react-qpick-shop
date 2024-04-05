import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import type { HTMLAttributes } from "react";
import { PagePaths } from "@/enum/PagePaths";
import { cn } from "@/functions/shadcn-utils";

function Logo({ className: classNames }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <Link to={PagePaths.HOME} className={cn(classNames, classes.logo)}>
      QPICK
    </Link>
  );
}

export default Logo;
