import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
	solidity: {
		version: "0.8.9",
		settings: {
			optimizer: {
				enabled: true
			}
		}
	},
	networks: {
		mumbai: {
			url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
			accounts: [process.env.PRIVATE_KEY as string],
		},
	},
};

export default config;
