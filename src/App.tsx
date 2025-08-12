import { useWallet } from "@solana/wallet-adapter-react";
import sha256 from "crypto-js/sha256";
import "./App.css";
import { SolanaConnect } from "./SolanaConnect";
const partner = "huma";
const partnerCode = "a50f6b";

function App() {
  const { publicKey } = useWallet();

  const hash = sha256(`${partnerCode}:${publicKey?.toBase58()}`);

  const handleNavigateBasic = () => {
    window.open(
      `https://pr-702.d8xz2ktp6ypg3.amplifyapp.com?partner=${partner}&code=${partnerCode}`,
      "_blank"
    );
  };

  const handleNavigateWithHash = () => {
    window.open(
      `https://pr-702.d8xz2ktp6ypg3.amplifyapp.com?partner=${partner}&code=${partnerCode}&hash=${hash}`,
      "_blank"
    );
  };

  if (!publicKey) {
    return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div
          style={{
            position: "fixed",
            top: "16px",
            right: "16px",
            zIndex: 1000,
          }}
        >
          <SolanaConnect />
        </div>
        <h1>Community Promo Demo</h1>
        <h2>Please connect your wallet to continue</h2>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 1000,
        }}
      >
        <SolanaConnect />
      </div>
      <h1>Community Promo Demo</h1>
      <div className="card">
        <h2>Access Huma Finance</h2>
        <p>Choose your access method below:</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleNavigateBasic}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "#646cff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              minWidth: "200px",
            }}
          >
            Promo with code
          </button>
          <button
            onClick={handleNavigateWithHash}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "#61dafb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              minWidth: "200px",
            }}
          >
            Promo with hash
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Community partner portal for Huma Finance access
      </p>
    </div>
  );
}

export default App;
