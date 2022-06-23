import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="banner-container">
        <img src="/strawberrybackground.webp" className="banner-image" />
        <div className="banner-text">
          <h1>GARDEN PARTY</h1>
        </div>
      </div>
    </div>
  );
}
