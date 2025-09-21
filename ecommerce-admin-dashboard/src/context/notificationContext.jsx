import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error("useNotification must be used within NotificationProvider");
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen((prev) => !prev);

  const openPanel = () => setIsOpen(true);
  const closePanel = () => setIsOpen(false);

  return (
    <NotificationContext.Provider
      value={{ isOpen, togglePanel, openPanel, closePanel }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
