import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { type FC } from "react";

export const SolanaConnect: FC = () => {
  const { publicKey } = useWallet();

  return (
    <WalletModalProvider>
      {publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}
    </WalletModalProvider>
  );
};
