import { useGlobalState } from "../store";
import Artworks from "../components/Artworks";
import Empty from "../components/Empty";
import OfferItem from "../components/OfferItem";

const Collections = () => {
  const [collections] = useGlobalState("collections");

  return (
    <div className="w-4/5 mx-auto mt-11">
      {collections.length > 0 ? (
        <Artworks title="Your Collections" auctions={collections} showOffer />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Collections;
