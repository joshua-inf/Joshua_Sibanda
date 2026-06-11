"use client";

import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the site was already loaded in this session
    const hasLoaded = sessionStorage.getItem("site-loaded");
    if (hasLoaded) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("site-loaded", "true");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <Loader duration={2500} />;
  }

  return <>{children}</>;
}
