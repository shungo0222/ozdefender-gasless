import React, { useContext, useState, useEffect } from "react";
import { EthereumContext } from "../eth/context";
import "./Registrations.css";
import { EthereumContextProps } from "../eth/context";

interface RegistrationEvent {
  blockNumber: number;
  who: string;
  name: string;
  id: string;
}

const mapEvent = (event: any): RegistrationEvent => ({
  blockNumber: event.blockNumber,
  who: event.args.who,
  name: event.args.name,
  id: `${event.blockHash}/${event.transactionIndex}/${event.logIndex}`,
});

const Registrations: React.FC = () => {
  const { registry } = useContext(EthereumContext) as EthereumContextProps;
  const [registrations, setRegistrations] = useState<RegistrationEvent[] | undefined>(undefined);

  useEffect(() => {
    const filter = registry.filters.Registered();
  
    const listener = (...args: any) => {
      const event = args[args.length - 1];
      setRegistrations(rs => [mapEvent(event), ...(rs || [])]);
    };
  
    const subscribe = async () => {
      try {
        const past = await registry.queryFilter(filter, -1000);
        setRegistrations(past.reverse().map(mapEvent));
        registry.on(filter, listener);
      } catch (error) {
        console.error("Error loading registrations:", error);
      }
    };
  
    subscribe();
    return () => {
      registry.off(filter, listener);
    };
  }, [registry]);  

  return (
    <div className="Registrations">
      <h3>Last registrations 📝</h3>
      {registrations === undefined && (
        <span>Loading..</span>
      )}
      {registrations && (
        <ul>
          {registrations.map(r => (
            <li key={r.id}><span className="address">{r.who}</span> {r.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Registrations;
