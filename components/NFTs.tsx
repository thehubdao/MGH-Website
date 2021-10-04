import NFTCard from "./NFTCard"


const NFTs = () => {

    return (
        <div className="text-center w-full">
            <div className={` w-full min-h-screen flex flex-col xl:flex-row items-center justify-center p-8`}>
                
                <div className="w-full xl:w-2/4 flex flex-col items-center xl:items-start justify-center mb-10 xl:mb-0 ">
                    {/* <p className={`text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-pink-600 mb-3`}>NFT</p>
                    <p className={`text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-300`}>Artist Series</p> */}
                    <div className=" flex space-x-5 items-center">
                        <span className={`text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-pink-600`}>NFT</span>
                        <span className={`text-lg sm:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-pink-600`}>Artist <br/>Series</span>
                    </div>
                    <p className={`text-lg lg:text-2xl font-bold text-gray-300 mt-2`}>Community curated 1-of-1 NFTs</p>

                    <div className="mt-5 text-center rounded-full px-6 py-2 drop-shadow bg-gray-400 bg-opacity-10 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-color border border-white border-opacity-20 hover:border-opacity-70 cursor-pointer">
                        <a href="https://opensea.io/MGH_DAO" target="_blank">
                            <span className="text-gray-200">Discover All</span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 w-full xl:w-2/4 transform xl:-translate-x-36 max-w-6xl">
                    <NFTCard classes="z-50 xl:scale-115 hover:scale-105 xl:hover:scale-120 opacity-90" img={"/images/NFTs/unnamed-7.png"} title="The immersion of Light" link="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/10790051772303826545514446335596251997342673603950883373218961063460382703617"/>
                    <NFTCard classes="z-40 xl:scale-110 hover:scale-105 xl:hover:scale-120 opacity-90" img={"/images/NFTs/unnamed-6.png"} title="The Planet with a Spear thorugh its Heart" link="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/10790051772303826545514446335596251997342673603950883373218961062360871075841"/>
                    <NFTCard classes="z-30 xl:scale-105 hover:scale-105 xl:hover:scale-120 opacity-90" img={"/images/NFTs/unnamed-5.png"} title="The Triangle of Space" link="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/10790051772303826545514446335596251997342673603950883373218961061261359448065"/>
                    <NFTCard classes="z-20 xl:scale-100 hover:scale-105 xl:hover:scale-120 opacity-90" img={"/images/NFTs/unnamed-4.png"} title="Falling into a Space of Passion" link="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/10790051772303826545514446335596251997342673603950883373218961060161847820289"/>
                    <NFTCard classes="z-10 xl:scale-95 hover:scale-105 xl:hover:scale-120 opacity-90" img={"/images/NFTs/unnamed-3.png"} title="Swimming in Space" link="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/10790051772303826545514446335596251997342673603950883373218961059062336192513"/>
                    <NFTCard classes="z-0 xl:scale-90 hover:scale-105 xl:hover:scale-120 opacity-90" img={"/images/NFTs/unnamed-2.png"} title="A Whale Diving through the Space" link="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/10790051772303826545514446335596251997342673603950883373218961057962824564737"/>
                </div>

            </div>
        </div>
    )
}

export default NFTs