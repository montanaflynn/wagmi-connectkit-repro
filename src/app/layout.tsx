import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { config } from "@/config/wagmi";
import { Web3Provider } from "@/providers/web3";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Web3Provider initialState={initialState}>
          <main>{children}</main>
        </Web3Provider>
      </body>
    </html>
  );
}
