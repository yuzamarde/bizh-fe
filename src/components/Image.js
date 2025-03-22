"use client";

import React, { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

const Image = ({ className, src, srcDark, srcSet, srcSetDark, alt }) => {
  const darkMode = useDarkMode(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Setelah component mount, kita tahu mode gelap atau terang
    setMounted(true);
  }, []);

  if (!mounted) {
    // Hindari render saat server, mencegah hydration mismatch
    return null;
  }

  return (
    <img
      className={className}
      srcSet={darkMode.value ? srcSetDark : srcSet}
      src={darkMode.value ? srcDark : src}
      alt={alt}
    />
  );
};

export default Image;
