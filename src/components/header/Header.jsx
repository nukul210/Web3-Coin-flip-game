import { Logo, Telegram, Twitter, HouseSolid } from "../../images";
import "./Header.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { COIN } from "../../utils/constant";

export function Header() {
  return (
    <div>
      <div className="header-banner">
        Flip the coin game{" "}
      </div>

      <header className="header-container">
        <img src={Logo} alt="Morty Logo" className="logo" />
        <div className="header-button__container">
          <div>
             <span>Home</span>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter width="18" height="18" className="social-svg__link" />
              <span>Twitter</span>
            </a>

            <a href="https://t.me" target="_blank" rel="noreferrer">
              <Telegram width="18" height="18" className="social-svg__link" />
              <span>Telegram</span>
            </a>

            <a
              href="https://app.uniswap.org/#/swap?outputCurrency=0x3642cf76c5894b4ab51c1080b2c4f5b9ea734106"
              target="_blank"
              rel="noreferrer"
            >
              Buy(${COIN})
            </a>
          </div>
          <ConnectButton chainStatus="icon" />
        </div>
      </header>
    </div>
  );
}
