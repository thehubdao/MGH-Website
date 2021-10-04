import NPTIllustration from "./NPTIllustration";


const NPT = ({ scroll }: any) => {

    return (

        <>
            <div className="w-full min-h-screen py-20">
                <div className={`w-full flex flex-col-reverse lg:flex-row items-center justify-start p-8`}>

                    <div className="flex flex-col text-center lg:text-left 2xl:text-center w-full lg:w-2/5">
                        <p className={` text-4xl sm:text-5xl xl:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-pink-500 mb-10`}>NPT Structure</p>
                        <p className="text-gray-400 text-lg lg:text-lg xl:text-xl">Users can select a pool based on their NFTs, lock them in along with MGH as collateral and mint NFT Pool Tokens in return. This allows the user to diversify their NFT holdings and hedge their overall exposure.</p>
                        <p className="text-gray-400 text-lg lg:text-lg xl:text-xl  mt-5">By staking MGH tokens users can passively earn rewards. The community can also earn Liquidity Pool tokens (LP) by providing MGH tokens and NPTs to the MGH/NPT Liquidity Pool. The LPs can be staked afterwards to farm MGH additional MGH tokens.</p>

                    </div>

                    <div className="relative flex flex-col pb-10 xl:pb-0 w-full h-full lg:w-3/5 justify-center items-center">
                        <NPTIllustration />
                    </div>

                </div>
            </div></>
    )
}

export default NPT