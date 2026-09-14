"use client";

import { useEffect, useState } from "react";
import { loadRemote } from "@module-federation/enhanced/runtime";
import '@/lib/module-federation';

export default function RemoteTest() {
  const [RemoteApp, setRemoteApp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    loadRemote("overview/App")
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

  return <RemoteApp />;
}
