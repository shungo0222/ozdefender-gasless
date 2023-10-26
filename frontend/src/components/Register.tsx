import React, { useRef, useState, useContext } from "react";
import { registerName } from "../eth/register";
import { EthereumContext } from "../eth/context";
import { toast } from "react-toastify";
import "./Register.css";
import { EthereumContextProps } from "../eth/context";

const Register: React.FC = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { registry, provider } = useContext(EthereumContext) as EthereumContextProps;

  const sendTx = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    const name = nameInput.current?.value;
    if (!name) return;

    setSubmitting(true);
    
    try {
      const response = await registerName(registry, provider, name);
      const hash = response.hash;
      const onClick = hash
        ? () => window.open(`https://mumbai.polygonscan.com/tx/${hash}`)
        : undefined;
      toast("Transaction sent!", { type: "info", onClick });
      if (nameInput.current) {
        nameInput.current.value = "";
      }
    } catch(err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      toast(errorMessage, { type: "error" });
    } finally {
      setSubmitting(false);
    }
  }

  return <div className="Container">
    <form onSubmit={sendTx}>
      <input required={true} placeholder="Register your name here" ref={nameInput}></input>
      <button type="submit" disabled={submitting}>{submitting ? "Registering..." : "Register"}</button>
    </form>
  </div>
}

export default Register;
