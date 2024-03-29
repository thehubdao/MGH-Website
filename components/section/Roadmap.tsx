const Roadmap = () => {

    return (

        <>
            <div className="w-full py-10 px-5 sm:px-10 flex flex-col space-y-20">


                <div className={`relative w-full flex flex-col items-center lg:items-start pt-28 min-h-max`}>

                    <div className="relative w-full z-[-1] hidden lg:block">
                        <hr className="border-pink-600 w-1/4 border absolute top-0 left-0" />
                        <hr className="border-blue-500 w-3/4 border absolute top-0 right-0" />
                    </div>

                    <div className="border border-pink-600 h-1/4 absolute top-16 left-8 z-[-1] block lg:hidden" />
                    <div className="border border-blue-500 h-3/4 absolute top-1/4 left-8 z-[-1] block lg:hidden" />


                    <p className="absolute z-[-2] left-0 top-0 font-bold text-8xl xs:text-9xl text-white opacity-20">
                        2022
                    </p>

                    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10 xl:space-x-20 space-y-10 lg:space-y-0 -mt-7 pl-0 lg:pl-5 min-h-max w-full">

                        <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-5 space-x-5 xs:space-x-10 lg:space-x-0 items-start w-full lg:w-1/4">
                            <p className="rounded-full bg-pink-600 shadow-color_pink scale-125 font-medium text-3xl ml-0 lg:ml-10 text-gray-200 pt-3.5 w-15 h-15 min-w-[3.75rem] text-center">
                                Q1
                            </p>
                            <p className="text-lg  text-gray-200 max-w-sm lg:max-w-4/4 2xl:max-w-3/4">
                                Valuation Tool V2, Decentraland Editor, WG launch, Awareness expansion
                            </p>
                        </div>

                        <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-5 space-x-5 xs:space-x-10 lg:space-x-0 items-start w-full lg:w-1/4">
                            <p className="rounded-full bg-blue-500 font-medium text-3xl ml-0 lg:ml-10 text-gray-200 pt-3.5 w-15 h-15 min-w-[3.75rem] text-center">
                                Q2
                            </p>
                            <p className="text-lg  text-gray-200 max-w-sm lg:max-w-4/4 2xl:max-w-3/4">
                                Metaverse Expansion (FLUF World, Somnium Space): Land acquisitions and data tools, Decentraland Community Hub launch, Snoopverse launch, Meta NFT Series launch
                            </p>
                        </div>

                        <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-5 space-x-5 xs:space-x-10 lg:space-x-0 items-start w-full lg:w-1/4">
                            <p className="rounded-full bg-blue-500 font-medium text-3xl ml-0 lg:ml-10 text-gray-200 pt-3.5 w-15 h-15 min-w-[3.75rem] text-center">
                                Q3
                            </p>
                            <p className="text-lg  text-gray-200 max-w-sm lg:max-w-4/4 2xl:max-w-3/4">
                                GameFi Ecosystem (starting with MGH DAO’s “Lamarcito Game”), MGH DAO Community Hubs across Metaverses, dApp integration into Metaverses
                            </p>
                        </div>

                        <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-5 space-x-5 xs:space-x-10 lg:space-x-0 items-start w-full lg:w-1/4">
                            <p className="rounded-full bg-blue-500 font-medium text-3xl ml-0 lg:ml-10 text-gray-200 pt-3.5 w-15 h-15 min-w-[3.75rem] text-center">
                                Q4
                            </p>
                            <p className="text-lg  text-gray-200 max-w-sm lg:max-w-4/4 2xl:max-w-3/4">
                                Metaverse tool expansion, Metaverse interoperable ID, Perpetual LAND swaps, Cosmos integration
                            </p>
                        </div>

                    </div>

                </div>

                <div className={`relative w-full flex flex-col items-center lg:items-start pt-28 min-h-max`}>

                    <hr className="border-blue-500 w-[55%] border hidden lg:block" />
                    <div className="border border-blue-600 h-[85%] absolute top-16 left-8 z-[-1] block lg:hidden" />

                    <p className="absolute z-[-2] left-0 top-0 font-bold text-8xl xs:text-9xl text-white opacity-20">
                        2023
                    </p>

                    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10 xl:space-x-20 space-y-10 lg:space-y-0 -mt-7 pl-0 lg:pl-5 min-h-max w-full">

                        <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-5 space-x-5 xs:space-x-10 lg:space-x-0 items-start w-full lg:w-1/4">
                            <p className="rounded-full bg-blue-500 font-medium text-3xl ml-0 lg:ml-10 text-gray-200 pt-3.5 w-15 h-15 min-w-[3.75rem] text-center">
                                Q1
                            </p>
                            <p className="text-lg  text-gray-200 max-w-sm lg:max-w-4/4 2xl:max-w-3/4">
                                Launching MGH DAO’s own Metaverse “Nothingworld”, Valuation tool integrated on 4+ NFT marketplaces
                            </p>
                        </div>

                        <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-5 space-x-5 xs:space-x-10 lg:space-x-0 items-start w-full lg:w-1/4">
                            <p className="rounded-full bg-blue-500 font-medium text-3xl ml-0 lg:ml-10 text-gray-200 pt-3.5 w-15 h-15 min-w-[3.75rem] text-center">
                                Q2
                            </p>
                            <p className="text-lg  text-gray-200 max-w-sm lg:max-w-4/4 2xl:max-w-3/4">
                                Data tools for 6+ Metaverses, Metaverse Community Hub on 4+ Metaverses
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Roadmap
