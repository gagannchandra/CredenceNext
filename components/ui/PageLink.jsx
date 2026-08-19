"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { saveReturnState } from "../../utils/navigationState";

export default function PageLink({
  to,
  returnHash = "",
  returnPath,
  className,
  children,
  onClick,
  ...props
}) {
  const pathname = usePathname();

  const handleClick = (event) => {
    saveReturnState({
      pathname: returnPath ?? pathname,
      scrollY: window.scrollY,
      hash: returnHash,
    });

    onClick?.(event);
  };

  return (
    <Link href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
