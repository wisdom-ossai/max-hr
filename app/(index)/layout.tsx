"use client";

import Navbar from "@maxHR/components/Navbar";
import React, { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
        <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
