"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []); // Adding an empty dependency array to ensure the effect runs only once

  return null; // Return null since the component does not render any UI
}
