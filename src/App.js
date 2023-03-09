import "@fontsource/readex-pro";
import "./App.css";
import Header from "./components/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import ContentWrapper from "./components/ContentWrapper";
import NFTAccountView from "./pages/NFTAccountView";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";

const chains = [mainnet];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "d14423269934823aa30619f0e46095be" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "d14423269934823aa30619f0e46095be",
    version: "2", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WagmiConfig client={wagmiClient}>
        <Header />
        <ContentWrapper>
          <NFTAccountView></NFTAccountView>
        </ContentWrapper>
      </WagmiConfig>
      <Web3Modal
        themeColor="teal"
        projectId="d14423269934823aa30619f0e46095be"
        ethereumClient={ethereumClient}
      />
    </ThemeProvider>
  );
}

export default App;
