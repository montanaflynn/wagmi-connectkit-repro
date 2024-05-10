import { getDefaultConfig } from "connectkit";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// this doesn't work and gives error:
// Error: (0 , react__WEBPACK_IMPORTED_MODULE_0__.createContext) is not a function
export const config = createConfig(
  getDefaultConfig({
    appName: "Reproduction",
    chains: [mainnet, sepolia],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);

// this does work:
// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
// });

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
