import { Web3Button } from "@web3modal/react";

function Header() {
  return (
    <header className="flex h-20 justify-between px-8 items-center">
      <a className="logo block flex-none" href="/">
        <img
          src="//app.alturanft.com/static/media/logo.33a2b8d2c9e0eff2cac5.png"
          className="h-9"
        />
      </a>
      <Web3Button />
    </header>
  );
}
export default Header;
