import { createGlobalState } from "react-hooks-global-state";

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  connectedAccount: "",
  boxModal: "scale-0",
  offerModal: "scale-0",
  priceModal: "scale-0",
  bidModal: "scale-0",
  auctions: [
    {
      tokenid: 1,
      owner: "0x12356894168912694168426981232",
      seller: "0x12356894168912694168426981233",
      winner: "0x12356894168912694168426981234",
      name: "Auction 1",
      description: "description of auction 1",
      duration: 10,
      image:
        "https://images.unsplash.com/photo-1650615567023-0721bceeecb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      price: "1.23",
      biddable: "true",
      sold: true,
      live: false,
    },

    {
      tokenid: 2,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 2",
      description: "description of auction 2",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1643139863038-7355941e9e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },

    {
      tokenid: 3,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 3",
      description: "description of auction 3",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },

    {
      tokenid: 4,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 4",
      description: "description of auction 4",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },

    {
      tokenid: 5,
      owner: "0x1235648941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 5",
      description: "description of auction 5",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
    {
      tokenid: 6,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 6",
      description: "description of auction 6",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1635846650676-55b9ba247172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
    {
      tokenid: 7,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 7",
      description: "description of auction 7",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
    {
      tokenid: 8,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 8",
      description: "description of auction 8",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
    {
      tokenid: 9,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 9",
      description: "description of auction 9",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
    {
      tokenid: 10,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 10",
      description: "description of auction 10",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1633443732847-a7ef42868dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
    {
      tokenid: 11,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 11",
      description: "description of auction 11",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1634658340808-9abaef7eb9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
    {
      tokenid: 12,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 12",
      description: "description of auction 12",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1635396259299-2eb9a880075a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
  ],
  auction: {
    tokenid: 1,
    owner: "0x12356894168912694168426981232",
    seller: "0x12356894168912694168426981233",
    winner: "0x12356894168912694168426981234",
    name: "Auction 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ligula massa. Morbi a volutpat purus. Quisque libero mi, facilisis eget venenatis nec, imperdiet consectetur quam.",
    duration: 10,
    image:
      "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: "1.23",
    biddable: "true",
    sold: false,
    live: true,
  },
  collections: [
    {
      tokenid: 1,
      owner: "0x12356894168912694168426981232",
      seller: "0x12356894168912694168426981233",
      winner: "0x12356894168912694168426981234",
      name: "Auction 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ligula massa. Morbi a volutpat purus. Quisque libero mi, facilisis eget venenatis nec, imperdiet consectetur quam.",
      duration: 10,
      image:
        "https://images.unsplash.com/photo-1650615567023-0721bceeecb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      price: "1.23",
      biddable: "true",
      sold: false,
      live: true,
    },

    {
      tokenid: 2,
      owner: "0x123568941689126941684269812321",
      seller: "0x123568941689126941684269812332",
      winner: "0x123568941689126941684269812343",
      name: "Auction 2",
      description: "description of auction 2",
      duration: 20,
      image:
        "https://images.unsplash.com/photo-1643139863038-7355941e9e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      price: "2.33",
      biddable: "true",
      sold: true,
      live: false,
    },
  ],
  bidders: [
    {
      timestamp: 164554523000,
      bidder: "0x3456789012345678980123456789012345678901",
      price: 0.5,
      refunded: true,
      won: false,
    },
    {
      timestamp: 164554522000,
      bidder: "0x4567890123456789801234567890123456789012",
      price: 0.25,
      refunded: false,
      won: false,
    },
    {
      timestamp: 1645545421000,
      bidder: "0x5678901234567898012345678901234567890123",
      price: 0.75,
      refunded: true,
      won: true,
    },
    {
      timestamp: 1645545420000,
      bidder: "0x6789012345678980123456789012345678901234",
      price: 1.25,
      refunded: false,
      won: false,
    },
    {
      timestamp: 1645545419000,
      bidder: "0x6789012345678980123456789012345678901234",
      price: 1,
      refunded: false,
      won: true,
    },
  ],
});

//Truncate function - text length to fit the specified
const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }

  return text;
};

export { getGlobalState, useGlobalState, setGlobalState, truncate };
