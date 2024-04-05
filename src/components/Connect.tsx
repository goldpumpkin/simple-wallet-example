// Connect.tsx
import React, {useEffect, useCallback, useContext} from "react";
import {ethers} from "ethers";
import Loading from "@/components/Loading";
import {WalletContext} from "@/contexts/WalletContext";

const Connect = () => {
    const {
        walletProvider,
        account,
        setAccount,
        setNetworkName,
        setBalance,
        showMessage,
        refresh,
    } = useContext(WalletContext);

    const refreshBalance = useCallback(async () => {
        if (!walletProvider || !account) return;
        const balance = await walletProvider.getBalance(account);
        setBalance(ethers.formatEther(balance));
    }, [setBalance, walletProvider, account]);

    useEffect(() => {
        refreshBalance();
    }, [refresh, refreshBalance]);

    const connectToMetamask = async () => {
        try {
            const accounts = await walletProvider.send("eth_requestAccounts", []);
            const network = await walletProvider.getNetwork();
            const balance = await walletProvider.getBalance(accounts[0]);
            setAccount(accounts[0]);
            setNetworkName(network.name);
            setBalance(ethers.formatEther(balance));
        } catch (error) {
            console.log(error);
            showMessage("failed to connect to metamask");
        }
    };

    const disconnect = async () => {
        setAccount("");
    };

    if (!account) {
        return (
            <div className="flex justify-end p-4">
                {walletProvider ? (
                    <button className="btn" onClick={connectToMetamask}>
                        connect to metamask
                    </button>
                ) : (
                    <Loading/>
                )}
            </div>
        );
    }

    return (
        <div className="flex items-center justify-end gap-2">
            <h1 className="text-end">
                Hello,{" "}
                {account.substring(0, 5) +
                    "..." +
                    account.substring(account.length - 4, account.length)}
            </h1>
            <button className="btn" onClick={disconnect}>
                disconnect
            </button>
        </div>
    );
}

export default Connect;
