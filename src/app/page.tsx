"use client"

import { ethers } from "ethers";
import { Dialog } from "@headlessui/react";
import {
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";
import {WalletContext} from "@/contexts/WalletContext";
import Connect from "@/components/Connect";
import Details from "@/components/Details";
import Transfer from "@/components/Transfer";

export default dynamic(() => Promise.resolve(Wallet), { ssr: false });

function Wallet() {
  const [walletProvider, setWalletProvider] = useState<any>(null);
  const [msgIsOpen, setMsgIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [account, setAccount] = useState<string>("");
  const [networkName, setNetworkName] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }
    setWalletProvider(
      new ethers.BrowserProvider(window.ethereum as any)
    );
  }, []);

  const showMessage = (message: string) => {
    setMsg(message);
    setMsgIsOpen(true);
    setTimeout(() => {
      setMsg("");
      setMsgIsOpen(false);
    }, 2000);
  };

  if (!window.ethereum) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-thin">
          Please install{" "}
          <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
            MetaMask
          </a>
        </h1>
      </div>
    );
  }

  return (
    <WalletContext.Provider
      value={{
        walletProvider,
        setWalletProvider,
        msgIsOpen,
        setMsgIsOpen,
        msg,
        setMsg,
        account,
        setAccount,
        networkName,
        setNetworkName,
        balance,
        setBalance,
        showMessage,
        refresh,
        setRefresh,
      }}
    >
      <div className="flex flex-col gap-4 p-4">
        <Dialog open={msgIsOpen} as={"div"} onClose={() => setMsgIsOpen(false)}>
          <div className="fixed flex items-center justify-center w-full top-2">
            <Dialog.Panel className="inline-flex flex-col p-4 bg-green-400 shadow-xl text-slate-600 rounded-3xl">
              <Dialog.Title>{msg}</Dialog.Title>
            </Dialog.Panel>
          </div>
        </Dialog>
        <Connect />
        <Details />
        <Transfer />
      </div>
    </WalletContext.Provider>
  );
}
