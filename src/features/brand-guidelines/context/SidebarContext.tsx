"use client";

import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isSubPanelOpen: boolean;
  setIsSubPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isSubPanelOpen, setIsSubPanelOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSubPanelOpen, setIsSubPanelOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  return (
    context || {
      isSubPanelOpen: false,
      setIsSubPanelOpen: () => {},
    }
  );
}
