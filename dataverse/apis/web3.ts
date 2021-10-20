import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";

const mobileOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: '7d25072ed9b1467e95fffd3af41d291e',
      qrcodeModalOptions: {
        mobileLinks: ["metamask"]
      }
    }
  }
};

const desktopOptions = {
  injected: {
    display: {
      logo: '/images/metamask-logo2.png',
      name: "MetaMask",
      description: "Connect to MetaMask Wallet"
    },
    package: null
  }
};

export async function connectWithWeb3(isMobile: boolean) {
  const options = isMobile ? mobileOptions: desktopOptions;

  const web3Modal = new Web3Modal({
    network: process.env.WEB3_NETWORK,
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions: options,
  });

  const provider = await web3Modal.connect();
  const addresses = await provider.enable();

  return {
    provider,
    addresses
  };
}