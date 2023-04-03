const Footer = () => {
  return (
    <div
      className="w-4/5 flex flex-col sm:flex-row justify-between
    items-center my-4 mx-auto py-5 text-white"
    >
      <div className="hidden sm:flex flex-1 justify-start items-center text-base space-x-12">
        <p className=" cursor-pointer">Market</p>
        <p className=" cursor-pointer">Artist</p>
        <p className=" cursor-pointer">Features</p>
        <p className=" cursor-pointer">Community</p>
      </div>

      <p className="text-right text-xs">&copy;2023 All rights reserved.</p>
    </div>
  )
}

export default Footer
