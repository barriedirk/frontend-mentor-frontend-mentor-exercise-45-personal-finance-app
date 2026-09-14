import React from "react";
import ReactDOM from "react-dom";
import { createInstance } from "@module-federation/enhanced/runtime";

export const mf = createInstance({
  name: "container",
  remotes: [
    {
      name: "overview",
      entry: "http://localhost:4200/remoteEntry.js",
      type: "module",
    },
  ],
});

mf.registerShared({
  react: {
    version: React.version,
    scope: "default",
    lib: () => React,
    shareConfig: {
      singleton: true,
      requiredVersion: "^19.0.0",
    },
  },
  "react-dom": {
    version: ReactDOM.version,
    scope: "default",
    lib: () => ReactDOM,
    shareConfig: {
      singleton: true,
      requiredVersion: "^19.0.0",
    },
  },
});
