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
