import {createContext} from "react";

type IWalletContext = {
  walletProvider: any;
  setWalletProvider: (walletProvider: any) => void;
  msgIsOpen: boolean;
  setMsgIsOpen: (msgIsOpen: boolean) => void;
  msg: string;
  setMsg: (msg: string) => void;
  account: string;
  setAccount: (account: string) => void;
  networkName: string;
  setNetworkName: (networkName: string) => void;
  balance: string;
  setBalance: (balance: string) => void;
  showMessage: (message: string) => void;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
};

export const WalletContext = createContext<IWalletContext>({} as IWalletContext);