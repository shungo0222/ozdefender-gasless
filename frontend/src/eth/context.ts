import { createContext } from "react";
import { ethers } from "ethers";

export interface EthereumContextProps {
  provider: ethers.providers.JsonRpcProvider;
  registry: ethers.Contract;
}

export const EthereumContext = createContext<EthereumContextProps | undefined>(undefined);
