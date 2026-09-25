"use client";

import { useEffect, useState } from "react";

import { mf } from "@/lib/module-federation";

type RemoteLoaderProps = {
  remote: string;
};

export default function RemoteLoader({ remote }: RemoteLoaderProps) {
  const [RemoteApp, setRemoteApp] =
    useState<React.ComponentType | null>(null);

  useEffect(() => {
    mf.loadRemote(remote)
      .then((module) => {
        const remoteModule = module as {
          default: React.ComponentType;
        };

        setRemoteApp(() => remoteModule.default);
      })
      .catch((error) => {
        console.error(`Failed to load remote: ${remote}`, error);
      });
  }, [remote]);

  if (!RemoteApp) {
    return <p>Loading remote...</p>;
  }

  return <RemoteApp />;
}