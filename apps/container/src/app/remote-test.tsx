"use client";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { mf } from "@/lib/module-federation";

export default function RemoteTest() {
  const [RemoteApp, setRemoteApp] =
    useState<React.ComponentType | null>(null);

  useEffect(() => {
    mf.loadRemote("overview/App")
      .then((module) => {
        const remoteModule = module as {
          default: React.ComponentType;
        };

        setRemoteApp(() => remoteModule.default);
      })
      .catch((error) => {
        console.error("Failed to load overview:", error);
      });
  }, []);

  if (!RemoteApp) {
    return <p>Loading overview...</p>;
  }

  return (
    <BrowserRouter>
      <RemoteApp />
    </BrowserRouter>
  );
}