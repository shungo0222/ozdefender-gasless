/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface RegistryInterface extends utils.Interface {
  functions: {
    "isTrustedForwarder(address)": FunctionFragment;
    "names(address)": FunctionFragment;
    "owners(string)": FunctionFragment;
    "register(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isTrustedForwarder"
      | "names"
      | "owners"
      | "register"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "names",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "owners",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "names", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;

  events: {
    "Registered(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
}

export interface RegisteredEventObject {
  who: string;
  name: string;
}
export type RegisteredEvent = TypedEvent<
  [string, string],
  RegisteredEventObject
>;

export type RegisteredEventFilter = TypedEventFilter<RegisteredEvent>;

export interface Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isTrustedForwarder(
      forwarder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    names(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    register(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  isTrustedForwarder(
    forwarder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  names(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  owners(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  register(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    isTrustedForwarder(
      forwarder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    names(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    owners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    register(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Registered(address,string)"(
      who?: PromiseOrValue<string> | null,
      name?: null
    ): RegisteredEventFilter;
    Registered(
      who?: PromiseOrValue<string> | null,
      name?: null
    ): RegisteredEventFilter;
  };

  estimateGas: {
    isTrustedForwarder(
      forwarder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    names(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isTrustedForwarder(
      forwarder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    names(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
