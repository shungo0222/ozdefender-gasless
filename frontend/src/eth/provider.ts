import { ethers } from "ethers";

const NODE_URL: string = process.env.REACT_APP_NODE_URL as string;

export function createProvider(): ethers.providers.JsonRpcProvider {
  return new ethers.providers.JsonRpcProvider(NODE_URL, 80001);
}