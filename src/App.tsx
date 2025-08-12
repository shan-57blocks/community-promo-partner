import { useWallet } from "@solana/wallet-adapter-react";
import sha256 from "crypto-js/sha256";
import "./App.css";
import { SolanaConnect } from "./SolanaConnect";
const partner1 = "huma1";
const partnerCode1 = "a50f6b";
const partner2 = "huma2";
const partnerCode2 = "e2f74a";

function App() {
  const { publicKey } = useWallet();

  const partner2Hash = sha256(`${partnerCode2}:${publicKey?.toBase58()}`);

  const handleNavigateBasic = () => {
    window.open(
      `https://pr-702.d8xz2ktp6ypg3.amplifyapp.com?partner=${partner1}&code=${partnerCode1}`,
      "_blank"
    );
  };

  const handleNavigateWithHash = () => {
    window.open(
      `https://pr-702.d8xz2ktp6ypg3.amplifyapp.com?partner=${partner2}&code=${partnerCode2}&hash=${partner2Hash}`,
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
            Partner 1 with code
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
            Partner 2 with hash
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
