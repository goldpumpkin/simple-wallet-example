import {useContext} from "react";
import {WalletContext} from "@/contexts/WalletContext";

const Details = () => {
    const {account, networkName, balance} = useContext(WalletContext);
    if (!account) {
        return null;
    }
    return (
        <div className="flex flex-col w-full gap-4 p-4 text-white rounded-md bg-slate-800">
            <div className="flex justify-between">
                <div className="text-2xl font-thin">balance</div>
                <div>network: {networkName}</div>
            </div>

            <div className="flex items-end gap-2">
                <div className="text-2xl">{balance.substring(0, 10)}</div>
                <div>ETH</div>
            </div>
        </div>
    );
}

export default Details;