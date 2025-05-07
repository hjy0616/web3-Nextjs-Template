"use client";
import '@rainbow-me/rainbowkit/styles.css';
import Header from '../headers/headers';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'test RainbowKit App',
  projectId: process.env.NEXT_PUBLIC_WEGMI_PROVIDER_PROJECT_ID as string,
  chains: [mainnet, polygon, optimism, arbitrum, base],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <RainbowKitProvider>
            <Header>
              <div>
                {children}
              </div>
            </Header>
          </RainbowKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    )
}
