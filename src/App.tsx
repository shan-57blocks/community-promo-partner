import { useWallet } from "@solana/wallet-adapter-react";
import "./App.css";
import { SolanaConnect } from "./SolanaConnect";

function App() {
  const { publicKey } = useWallet();
  const handleNavigateBasic = () => {
    window.open("https://app.huma.finance?partner=huma&code=123456", "_blank");
  };

  const handleNavigateWithHash = () => {
    window.open(
      "https://app.huma.finance?partner=huma&code=123456&hash=hashExample",
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
