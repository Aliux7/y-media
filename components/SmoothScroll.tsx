"use client";

import React, { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let locomotiveScroll: any;

    // Dynamically import to ensure it only loads on the client side
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        // You can pass configuration options here if needed, e.g.:
        // lenisOptions: { wrapper: window, content: document.documentElement }
      });
    })();

    // Cleanup phase: destroy the scroll instance when the component unmounts
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
