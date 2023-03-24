const Footer = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify=between items-center my-4 mx-auto py-5 text-white">
        <div className=" sm:flex-1 justify-start items-center text-base space-x-12" >
            <p className="cursor-pointer  ">Market</p>
            <p className="cursor-pointer  ">Collections</p>
            <p className="cursor-pointer  ">About</p>
            <p className="cursor-pointer  ">Learn</p>
        </div>

        <p className="text-right text-xs ">&copy;2023 All Rights Reserved</p>
    </div>
  )
}

export default Footer