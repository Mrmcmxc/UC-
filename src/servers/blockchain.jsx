import abi from "../abis/src/contracts/Auction.sol/Auction.json";
import address from "../abis/contractAddress.json";
import { ethers } from "ethers";
import { getGlobalState, setGlobalState } from "../store";

const { ethereum } = window;
const ContractAddress = address.address;
const ContractAbi = abi.abi;
let tx;

const toWei = (num) => ethers.utils.parseEther(num.toString());
const fromWei = (num) => ethers.utils.formatEther(num);

const getEthereumContract = async () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(ContractAddress, ContractAbi, signer);
  return contract;
};

const isWalletConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());

    window.ethereum.on("chainChanged", (chainId) => window.location.reload());

    window.ethereum.on("accountsChanged", async () => {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
      await isWalletConnected();
      await loadCollection();
    });

    if (accounts.length) {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
    } else {
      alert("Please connect wallet");
      console.log("No accounts found");
    }
  } catch (error) {
    reportError(error);
  }
};

const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
  } catch (error) {
    reportError(error);
  }
};

const createNFTItem = async ({
  name,
  description,
  image,
  metadataURI,
  price,
}) => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const connectedAccount = getGlobalState("connectedAccount");
    const contract = await getEthereumContract();

    tx = await contract.createAuction(
      name,
      description,
      image,
      metadataURI,
      toWei(price),
      {
        from: connectedAccount,
        value: toWei(0.02),
      }
    );

    await tx.wait();
  } catch (error) {
    reportError(error);
  }
};

const loadCollection = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const connectedAccount = getGlobalState("connectedAccount");
    const contract = await getEthereumContract();
    const collection = await contract.getMyAuctions({ from: connectedAccount });
    //setGlobalState("collections", structuredAuctions(collection));
    console.log(collection);
  } catch (error) {
    reportError(error);
  }
};

const reportError = (error) => {
  console.log(error.message);
  throw new Error(error);
};

export { isWalletConnected, connectWallet, createNFTItem, loadCollection };
