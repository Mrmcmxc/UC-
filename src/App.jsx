import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Collections from "./views/Collections";
import NFT from "./views/NFT";
import About from "./views/About";
import Header from "./components/Header";
import NewToNFT from "./views/NewToNFT";
import ChangePrice from "./components/ChangePrice";
import PlaceBid from "./components/PlaceBid";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { isWalletConnected } from "./servers/blockchain";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(async () => {
    await isWalletConnected();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-800 bg-repeat via-[#000000] to-gray-900 bg-center subpixel-antialiased ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/nft/:id" element={<NFT />} />
        <Route path="/About" element={<About />} />
        <Route path="/NewToNFT" element={<NewToNFT />} />
      </Routes>
      <Footer />

      <ChangePrice />
      <PlaceBid />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
};

export default App;
