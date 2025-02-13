import { useState, useEffect } from "react";

export const useMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update body overflow when isOpen changes
    document.body.style.overflow = isOpen ? "hidden" : "";

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleMenu,
  };
};
