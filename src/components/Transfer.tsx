// Transfer.tsx
import React, {useContext, useState} from "react";
import {ethers} from "ethers";
import {WalletContext} from "@/contexts/WalletContext";
import Loading from "@/components/Loading";


const Transfer = () => {
    const {walletProvider, account, showMessage, refresh, setRefresh} =
        useContext(WalletContext);
    const [to, setTo] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [transferring, setTransferring] = useState<boolean>(false);

    const transfer = async () => {
        try {
            const value = ethers.parseEther(amount);
            const signer = await walletProvider.getSigner();

            const tx = {
                to,
                value,
            };
            setTransferring(true);
            // const receipt = await walletProvider.sendTransaction(tx);
            const receipt = await signer.sendTransaction(tx);
            await receipt.wait();
            setTo("");
            setAmount("");
            showMessage("successfully transferred");
        } catch (error) {
            console.log(error);
            showMessage("failed to transfer");
        } finally {
            setTransferring(false);
            setRefresh(!refresh);
        }
    };

    if (!account) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 mt-4">
            <div className="text-4xl font-bold">Transfer</div>
            {transferring ? (
                <div className="flex flex-col items-center gap-4">
                    <div className="text-3xl">transferring...</div>
                    <Loading size="xl"/>
                </div>
            ) : (
                <div className="flex flex-col gap-2">
                    <input
                        className="input"
                        value={to}
                        onInput={(e: any) => setTo(e.target.value)}
                        type="text"
                        placeholder="address"
                    />
                    <input
                        className="input"
                        value={amount}
                        onInput={(e: any) => setAmount(e.target.value)}
                        type="number"
                        placeholder="amount"
                    />
                    <button className="btn" onClick={transfer}>
                        send
                    </button>
                </div>
            )}
        </div>
    );
}

export default Transfer;

