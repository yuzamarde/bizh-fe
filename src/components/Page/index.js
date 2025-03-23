"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Gunakan usePathname dari next/navigation
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import cn from "classnames";
import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";

const Page = ({
  outerClassName,
  separatorHeader,
  children,
  fooferHide,
  wide,
  notAuthorized,
}) => {
  const pathname = usePathname(); // Ganti useLocation dengan usePathname

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <div>
      <Header
        separatorHeader={separatorHeader}
        wide={wide}
        notAuthorized={notAuthorized}
      />
      {/* <div className={styles.inner}>{children}</div>
        {!fooferHide && } */}

    </div>
  );
};

export default Page;
