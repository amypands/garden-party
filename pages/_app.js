import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    //fragment
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
