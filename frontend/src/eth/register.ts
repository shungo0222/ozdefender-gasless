import { ethers, Contract, Signer } from "ethers";
import { createInstance } from "./forwarder";
import { signMetaTxRequest } from "./signer";

async function sendMetaTx(
  registry: Contract,
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer,
  name: string
): Promise<Response> {
  console.log(`Sending register meta-tx to set name=${name}`);
  const url = process.env.REACT_APP_WEBHOOK_URL as string;
  if (!url) throw new Error("Missing relayer url");

  const forwarder = createInstance(provider);
  const from = await signer.getAddress();
  const data = registry.interface.encodeFunctionData("register", [name]);
  const to = registry.address;

  const signedRequest = await signMetaTxRequest((signer.provider as ethers.providers.JsonRpcProvider), forwarder, { to, from, data });

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(signedRequest),
    headers: { "Content-Type": "application/json" },
  });
}

interface EthereumWindow extends Window {
  ethereum?: any;
}

export async function registerName(
  registry: Contract,
  provider: ethers.providers.JsonRpcProvider,
  name: string
): Promise<any> {
  if (!name) throw new Error("Name cannot be empty");
  if (!(window as EthereumWindow).ethereum) {
    throw new Error("User wallet not found");
  }

  await (window as EthereumWindow).ethereum.enable();
  const userProvider = new ethers.providers.Web3Provider((window as EthereumWindow).ethereum);
  const userNetwork = await userProvider.getNetwork();
  if (userNetwork.chainId !== 80001) throw new Error("Please switch to Polygon Mumbai for signing");
  const signer = userProvider.getSigner();

  return await sendMetaTx(registry, provider, signer, name);
}
