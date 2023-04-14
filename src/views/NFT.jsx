import { useGlobalState } from "../store";
import { truncate } from "../store";
import Identicon from "react-identicons";
import Countdown from "../components/Countdown";

const NFT = () => {
  const [auction] = useGlobalState("auction");
  const [bidders] = useGlobalState("bidders");
  const [connectedAccount] = useGlobalState("connectedAccount");
  const { id } = useParams();

  useEffect(async () => {
    await loadAuction(id);
    await loadBidders(id);
  }, []);
  return (
    <div
      className="grid lg:grid-cols-2 gaps-6
        md:gap-4 lg:gap-3 py-2.5 text-white font-sans capitalize
        w-4/5 mx-auto mt-11"
    >
      <div
        className="h-[400px] bg-gray-800 rounded-md shadow-xl
        shadow-black md:w-4/5 md:items-center lg:w-4/5 md:mt-0"
      >
        <img
          src={auction?.image}
          alt={auction?.name}
          className="object-contain w-full h-80 mt-10"
        />
      </div>

      <div>
        <Details auction={auction} account={connectedAccount} />

        {bidders.length > 0 ? (
          <Bidders auction={auction} bidders={bidders} />
        ) : null}

        <CountdownNPrice auction={auction} />
        {auction?.live && Date.now() < auction?.duration ? (
          <ActionButton auction={auction} account={connectedAccount} />
        ) : null}
      </div>
    </div>
  );
};

const Details = ({ auction, account }) => {
  return (
    <div className="py-2">
      <h1 className="font-bold text-lg mb-1">{auction?.name}</h1>
      <p className="font-semibold text-sm">
        <span className="text-green-500">
          @
          {auction?.owner == account
            ? "You"
            : auction?.owner
            ? truncate(auction?.owner, 4, 4, 11)
            : null}
        </span>
      </p>
      <p className="text-sm py-2">{auction?.description}</p>
    </div>
  );
};

const Bidders = ({ bidders, auction }) => {
  console.log(bidders);
  return (
    <div className=" flex flex-col">
      <span>Top Bidders</span>
      <div className="h-[calc(100vh_-_40.5rem)] overflow-y-auto ">
        {bidders.map((bid, i) => (
          <div key={i} className=" flex justify-between items-center">
            <div className="flex justify-start items-center my-2 space-x-2">
              <Identicon
                className="h-5 w-5 object-contain bg-gray-800 rounded-full"
                size={18}
                string={bid.bidder}
              />
              <span className="font-medium text-sm mr-3">
                {truncate(bid.bidder, 4, 4, 11)}
              </span>
              <span className="text-blue-500 font-medium text-sm">
                {bid.price} ETH
              </span>
            </div>
            {i == 0 ? (
              <button className="shadow-sm shadow-black text-white bg-blue-500 hover:bg-blue-700 md:text-xs p-1 rounded-sm text-sm cursor-pointer font-light">
                Claim
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

const CountdownNPrice = ({ auction }) => {
  return (
    <div className="flex justify-between items-center py-5">
      <div>
        <span className="font-bold">Current Price</span>
        <p className="text-sm font-light">{auction?.price} ETH</p>
      </div>

      <div className="lowercase">
        <span className="font-bold">
          {auction?.duration > Date.now() ? (
            <Countdown timestamp={auction?.duration} />
          ) : (
            "00:00:00"
          )}
        </span>
      </div>
    </div>
  );
};

const ActionButton = ({ auction, account }) => {
  return (
    <div className="flex justify-start items-center space-x-2 mt-2">
      {auction.tokenId % 2 == 0 ? (
        <button className="shadow-sm shadow-black text-white bg-gray-500 hover:bg-gray-700 md:text-xs p-2.5 rounded-sm cursor-pointer font-light">
          Place a Bid
        </button>
      ) : (
        <button className="shadow-sm shadow-black text-white bg-red-500 hover:bg-red-700 md:text-xs p-2.5 rounded-sm cursor-pointer font-light">
          Buy NFT
        </button>
      )}
    </div>
  );
};
export default NFT;
