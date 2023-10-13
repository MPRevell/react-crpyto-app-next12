import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cryptoData from "../data/cryptoData";

export default function Home() {
  return (
    <div>
      <h1>Cryptocurrencies</h1>
      <ul>
        {cryptoData.map((crypto) => (
          <li key={crypto.id}>
            <strong>{crypto.name}</strong>: ${crypto.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}
